import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}` 
  }

 @Input() progress : number = 50;
 @Input() btnClass : String = 'btn-primary';

 @Output() valorSalida: EventEmitter<number> = new EventEmitter(); 

  cambiarValor(valor: number){
    
    if(this.progress >= 100 && valor >=0){
      this.valorSalida.emit(100);
      return this.progress=100;
    }
    if(this.progress <= 0 && valor <0){
      this.valorSalida.emit(0);
      return this.progress=0;
    }
    this.valorSalida.emit(this.progress);
    return this.progress = this.progress + valor;
   
     
  }
  onChange(newValue : number){
    if(newValue >= 100){
      this.progress = 100;
    }
    else if (newValue <=0) {
      this.progress = 0;
    }
    else{
      this.progress=newValue
    }
    this.valorSalida.emit(this.progress)
  }

}
