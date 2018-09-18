import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  currentpage: String;
  constructor(private _http: HttpClient) { 
    this.currentpage = "home";
  }
  getAllProducts(){
    return this._http.get('/api/products');
  }
  getOneProduct(id){
    return this._http.get('/api/products/'+id);
  }
  createNewProduct(newProduct){
    return this._http.post('/api/products', newProduct);
  }
  deleteProduct(id){
    return this._http.delete('/api/products/'+id);
  }
  updateProduct(id, updates){
    return this._http.put('/api/products/'+id, updates);
  }
}
