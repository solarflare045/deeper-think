import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AppComponent } from './app.component';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDRIuNoGLn7fttQ-F5F47YLe4cH1YREGMc',
  authDomain: 'deeper-think-afb06.firebaseapp.com',
  databaseURL: 'https://deeper-think-afb06.firebaseio.com',
  storageBucket: 'deeper-think-afb06.appspot.com',
  messagingSenderId: '57149301871',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
