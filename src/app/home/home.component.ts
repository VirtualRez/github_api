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
    console.log(this.word);
    let endpoint = `https://api.github.com/users/"${this.word}`;
    fetch(endpoint, {method:'GET'})
      .then((data) => { if (data.ok == true) { data.json() } })
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