import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  currpage: String;
  mybool: Boolean;
  
  constructor(
    private _http: HttpService
  ){}
  ngOnInit(){
    this.mybool = false;
    this.currpage = this._http.currentpage;
  }
  onActivate(){
    setTimeout(()=>{
        this.currpage = this._http.currentpage;
      }
    ,1);
  }

}
