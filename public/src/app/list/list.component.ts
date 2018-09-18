import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allProds: any[];

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.currentpage = "list";
    this.getAllProds();
  }
  deleteProd(pid){
    let obs = this._http.deleteProduct(pid);
    obs.subscribe(data => console.log(data));
    this.getAllProds();
  }
  getAllProds(){
    let obs = this._http.getAllProducts();
    obs.subscribe(data=>{
      if (data['status'] === "good") {
        this.allProds = data['content'];
      } else {
        console.log(data['content']);
      }
    })
  }
}
