import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    this.getUsers()
    .then(users => {
      console.log(users)
    });
  }

  /*ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if(false){
        resolve('Hola Mundo')
      }else{
        reject('Algo salio mal')
      }
      
    });

    promesa.then((message) => {
      console.log('Fin de Promesa..' + message)
    })
    .catch(error => console.log('Error en la promesa', error))

    console.log('Fin del Init')
  }*/

  getUsers() {

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(body => resolve(body.data));
    });

    return promesa;


  }
}
