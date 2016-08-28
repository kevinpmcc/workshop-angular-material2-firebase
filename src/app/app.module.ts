// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods } from 'angularfire2';

// APP
import { AppComponent }  from './app.component';
import { Theater } from './components/theater.component';
import { MovieGoer } from './components/moviegoer.component';

// replace me with your config
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCJ75u2HQ0zjWeE8M0m1wnyHk4lVQc5Nbk",
    authDomain: "fir-workshop-9aa8e.firebaseapp.com",
    databaseURL: "https://fir-workshop-9aa8e.firebaseio.com",
    storageBucket: "fir-workshop-9aa8e.appspot.com",
  };

@NgModule({
  imports: [
    AngularFireModule.initializeApp(
      config,
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect
      }
    ),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Theater,
    MovieGoer

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
