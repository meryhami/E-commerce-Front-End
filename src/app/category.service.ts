import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {


  constructor(private http: Http) { 
    
  }
  public getAll()
  {
    return this.http.get('http://localhost:8080/categorie');

    
  }
  

}
