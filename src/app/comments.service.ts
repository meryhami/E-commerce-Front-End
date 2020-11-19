import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }
  getAll()
  {
    return this.http.get('http://localhost:8080/produits');
  }
  create(id,content,userid)
  {
    return this.http.post('http://localhost:8080/comment/add/'+id,
    {
      content:content,
      userid:userid,
      produits_id:id

    }
    )

  }

}
