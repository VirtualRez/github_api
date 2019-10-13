import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogicService {

  requestData(url) {
    return fetch(url, { method: 'GET' })
      .then((data) => data.json())
  }

  requestUser(url, word) {
    fetch(url, { method: 'GET' })
      .then((data) => data.json())
      .then((data) => {
        if (data.items.length == 0 || data.items[0].login != word) {
          return;
        } else {
          this._router.navigateByUrl(`user/${word}`)
          return;
        }
      })
      .catch((err) => console.log(err))
  }


  constructor(private _router: Router) { }
}
