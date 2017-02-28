import {Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  constructor(platform: Platform){
    platform.ready().then(() => {
      StatusBar.styleDefault();
      SplashScreen.hide();
    })
  }
}
