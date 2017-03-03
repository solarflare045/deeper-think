import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';
import * as _ from 'lodash';
import { Voice, speechSynthesis, SpeechSynthesisUtterance } from '../types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phrase$: Observable<string>;

  constructor(private af: AngularFire) {
    this.phrase$ = this.af.database.object('/phrase')
      .map((ref) => ref.$value)
      .switchMap((phrase) => this.speak$(phrase).startWith(phrase));
  }

  speak$(phrase: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const msg = new SpeechSynthesisUtterance();
      msg.voice = _.sample(_.filter(speechSynthesis.getVoices(), (voice) => _.startsWith(voice.lang, 'en-')));
      msg.text = phrase;
      msg.pitch = _.random(0.5, 1.2, true);
      msg.rate = _.random(0.6, 0.7, true);
      speechSynthesis.speak(msg);

      return () => speechSynthesis.cancel();
    });
  }
}
