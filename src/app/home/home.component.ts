import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogicService } from '../services/logic.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string;
  suggestions: Object = [];
  noUser = false;
  //FUNCTION for suggestions while user is typing --keyUp
  getSuggestion(key) {

    if (this.word.length <= 1) {//if have problems with github API, increase the number
      return
    } else if (key.key == "Enter") {//navigate to profile via ENTER key
      this.showUser()
    }
    else {
      this.getData()
    }
  }
  //Retrieving Github-user info, when user press Search Button
  getData() {//send to services
    let endpoint = `https://api.github.com/search/users?q=${this.word}+in:login`;
    this._serv.requestData(endpoint).then((data) => {
      this.suggestions = data.items;
    })
      .catch((err) => console.log(err))
  }
  showUser() {//send to services
    let endpoint = `https://api.github.com/search/users?q=${this.word}+in:login`;
    if (this._serv.requestUser(endpoint, this.word) === undefined) {
      this.noUser = true;
    }
  }
  showUser2(event) {//when the user click a suggestion it redirect to user profile
    this.word = event.target.textContent;
    this._router.navigateByUrl(`user/${this.word}`);
  }
  constructor(private _router: Router, private _serv: LogicService) { }
  ngOnInit() { }
}
