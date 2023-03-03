import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_PERSONAL = "http://localhost:3000/results";

  constructor(private http: HttpClient) { }

  // GET - PERSONAL
  getProductos(): Observable<any> {
    return (this.http.get(this.API_PERSONAL))
  }

  // POST - NOSOTROS
  postProductos(trabajador: any): Observable<any> {
    return (this.http.post(this.API_PERSONAL, trabajador))
  }

  // PUT - NOSOTROS
  putProductos(user: any, ide: any): Observable<any> {
    this.API_PERSONAL = `${this.API_PERSONAL}/${ide}`
    return (this.http.put(this.API_PERSONAL, user))
  }

  // DELETE - NOSOTROS
  deleteProductos(id: any): Observable<any> {
    this.API_PERSONAL = `${this.API_PERSONAL}/${id}`
    return (this.http.delete(this.API_PERSONAL, id))
  }

}
