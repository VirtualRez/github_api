import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string

  // FUNCTION for suggestions while user is typing --keyUp
  getSuggestion() {
    
    let endpoint = `https://api.github.com/users?q=${this.word}`;
    console.log(endpoint);
    fetch(endpoint, {method:'GET'})
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  };

  //calling getData function when users press Intro-Key
  doThat(key) {
    if (key.keycode === 13) {
      this.getSuggestion()
    }
  }

  //retrieving Github info when user press Search Button
  getData() { };

  constructor() { }

  ngOnInit() {
  }


}