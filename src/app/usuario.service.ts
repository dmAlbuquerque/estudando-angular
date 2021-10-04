import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario();
    usuario.nome = "Daniel Albuquerque"
    usuario.email = "dm.albuquerque.dev@gmail.com"

    return usuario
  }

  public listaUsuario():Usuario[]{
     return [
      {
        nome: 'Daniel Albuquerque',
        email: 'dm.albuquerque.dev@gmail.com'
      },
      {
        nome: 'Macley Sousa',
        email: 'macleysousa@gmail.com'
      },
      {
        nome: 'Marea',
        email: 'mareaaa@gmail.com'
      }
      ,
      {
        nome: 'Laura',
        email: 'laurea@gmail.com'
      }
      ,
      {
        nome: 'Jéssica',
        email: 'jeessica@gmail.com'
      }
    ]
  }
}
