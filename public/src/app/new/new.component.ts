import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProd: Object;
  errors: any[];

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.currentpage = "new";
    this.newProd={
      "title": "",
      "price": "",
      "imageurl": ""
    }
  }
  onSubmit(){
    let obs = this._http.createNewProduct(this.newProd);
    obs.subscribe(data=>{
      if (data['status'] === "bad") {
        this.errors = [];
        for (let key in data['content']['errors']) {
          if (key != "message" && key != "name" && key != "_message") {
            this.errors.push(data['content']['errors'][key]['message']);
          }
        }
      }
      else {
        this._router.navigate(['/products']);
      }
    })
  }

}
