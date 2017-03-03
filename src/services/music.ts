import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

declare var Synth: {
  createInstrument(instrument: string): SynthInstrument;
  setVolume(volume: number): void;
}

declare class SynthInstrument {
  play(note: string, octave: number, duration: number): void;
}

const NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const OCTAVES = [3, 4];

@Injectable()
export class MusicService {
  play$(): Observable<any> {
    return Observable.timer(0)
      .map(() => {
        Synth.setVolume(0.15);
        return Synth.createInstrument('organ');
      })
      .switchMap((piano) => {
        const duration = _.random(1, 4) / 4;
        piano.play( _.sample(NOTES), _.sample(OCTAVES), duration );
        return Observable.timer(duration * 1000);
      })
      .repeatWhen((en) => en);
  }
}
