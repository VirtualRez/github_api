import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _router: Router) { 
    var user = this._router.url.slice(6);
    var url = `https://api.github.com/search/users?q=${user}`
    fetch(url)
    .then(data=>data.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }

  //https://api.github.com/users/${user}/repos`
  //https://api.github.com/search/users?q=${user}`
  ngOnInit() {
  }

}
