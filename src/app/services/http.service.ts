import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";
import { Produto } from '../models/Produto';

const URL: string = 'https://rdcrud.herokuapp.com';

function AdaptadorDeGrupo(data: any[]) {
  return data.map(
    (el) => { return new Grupo(el.COD_GRUPO, el.DESC)}
  )
}

function AdaptadorDeProduto(data: any[]) {
  return data.map(
   (el) => {return new Produto(el.COD, el.DESC, el.REG_ANVISA, el.CONTROLADO, el.COD_GRUPO)}
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor (private http: HttpClient) { }

  getGrupos(){
    let obs = this.http.get(URL + "/grupos")
    return obs.pipe(map(AdaptadorDeGrupo))
  }

  getProdutos(){
    return this.http.get(URL + '/produtos')
    .pipe(map(AdaptadorDeProduto))
  }

}
