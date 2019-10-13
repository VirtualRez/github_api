import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userName;
  reposurl: string;
  reposlist;
  gotRepos =false;
  followersUrl;
  followersQuantity;

  constructor(private _router: Router) {
    var user = this._router.url.slice(6);
    var url = `https://api.github.com/search/users?q=${user}`;
    fetch(url)//show the user name
      .then(data => data.json())
      .then(data => {
        this.userName = data.items;
        this.reposurl = this.userName[0].repos_url;
        this.followersUrl= this.userName[0].followers_url
        this.getFollowes(this.followersUrl);
        fetch(this.reposurl)//show the repositories
          .then(data => data.json())
          .then(data => {
            this.reposlist=data;
            this.reposlist.length==0 ? this.gotRepos=true : this.gotRepos=false;
          })
          .catch(err => console.log(err));
        })
      .catch(err => console.log(err))
  }
getFollowes(url){//show the number of followers
  fetch(url)
  .then(data=>data.json())
  .then(data=>this.followersQuantity=data.length)
  .catch(err=>console.log(err))
}
ngOnInit() {
  
 
}
}