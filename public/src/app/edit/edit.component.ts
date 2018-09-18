import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myProd: Object;
  myProdID: String;
  errors: any[];

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.currentpage = "edit";
    this.myProd={};
    this._route.params.subscribe((params: Params) => {
      this.myProdID = params['id'];
    })
    this.getProd();
  }
  deleteProd(){
    let obs = this._http.deleteProduct(this.myProdID);
    obs.subscribe(data => console.log(data));
    this._router.navigate(['/products']);
  }
  onSubmit(){
    let obs = this._http.updateProduct(this.myProdID, this.myProd);
    obs.subscribe(data=>{
      if (data['status'] === "bad") {
        this.errors = [];
        for (let key in data['content']['errors']) {
          if (key != "message" && key != "name" && key != "_message") {
            this.errors.push(data['content']['errors'][key]['message']);
          }
        }
      } else {
        this._router.navigate(['/products']);
      }
    })
  }
  getProd(){
    let obs = this._http.getOneProduct(this.myProdID);
    obs.subscribe(data => {
      if (data['status'] === "good") {
        this.myProd = data['content'];
        console.log(this.myProd);
      } else {
        console.log(data['content']);
      }
    })
  }
}
