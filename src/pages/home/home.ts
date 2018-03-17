import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuestionPage} from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      title: "Interview Prep App",
      description: "This is ia",
      image: "http://via.placeholder.com/150x150",
    },
    {
      title: "What is this?",
      description: "This is an app to help you Ace the technical interview."+
      "It is a collection of question and answers to the most popular front-end technical questions.",
      image: "http://via.placeholder.com/150x150",
    },
    {
      title: "Get Started",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://via.placeholder.com/150x150",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goToQuestion(){
    this.navCtrl.push(QuestionPage);
  }

}
