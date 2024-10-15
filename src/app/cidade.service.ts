import { Cidade } from './../cidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CidadeService {


  constructor(private http:HttpClient) { }

  getCidades(): Observable<Cidade []>{
    return this.http.get<Cidade []>('http://localhost:3000/cidades')
  }

  getCidadesbyId(id:number): Observable<Cidade>{
    return this.http.get<Cidade>('http://localhost:3000/cidades/' + id)
  }

  delete(cidade: Cidade): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/cidades/' + cidade.id)
  }

  uptade(cidade: Cidade): Observable<Cidade>{
    return this.http.put<Cidade>('http://localhost:3000/cidades' + cidade.id, cidade)
  }
}
