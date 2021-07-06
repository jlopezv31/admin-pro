import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent {
 progresoOne: number= 25;
 progresoTwo: number=35;

 get getProgresoOne(){
   return `${this.progresoOne}%`
 }

 get getProgresoTwo(){
  return `${this.progresoTwo}%`
}


}
