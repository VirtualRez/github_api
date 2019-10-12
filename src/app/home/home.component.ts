import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string;
  suggestions: Object = [];
  //FUNCTION for suggestions while user is typing --keyUp
  getSuggestion() {
    let endpoint = `https://api.github.com/search/users?q=${this.word}+in:login`;

    fetch(endpoint, { method: 'GET' })
      .then((data) => data.json())
      .then((data) => this.suggestions = data.items)
      .catch((err) => console.log(err))
  }
  // calling getData function when users press Intro-Key
  doThat(key) {
    if (key.keycode === 13) { this.getSuggestion(); }
  }
  //Retrieving Github-user info, when user press Search Button
  getData() { }
  showUser() { 
    this._router.navigateByUrl(`user/${this.word}`)
  }

  constructor(private _router: Router) { }
  ngOnInit() { }
}