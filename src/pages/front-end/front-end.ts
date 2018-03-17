import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-front-end',
  templateUrl: 'front-end.html'
})
export class FrontEndPage {

  constructor(public navCtrl: NavController, public params: NavParams) {
    //this.topic = params.get('topic');
  }
  goToQuestion(params){
    if (!params) params = {};
    this.navCtrl.push(QuestionPage);
  }
}
