import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription;

  constructor() {
    

    /*this.returnObservable()
    .pipe(

      retry(1)

    )
    .subscribe(
      success => console.log('Subs: ', success),
      error => console.error('Error : ', error),
      () => console.info('Observable Complete...')
    )*/
    this.intervalSub = this.returnInterval()
    .subscribe(console.log);
    

   }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  ngOnInit(): void {
  }

  returnInterval(){
    const interval$ = interval(500)
    .pipe(
      map(value => value + 1),
      filter(x => (x % 2 === 0) ? true : false),
      /*take(10)*/);
    return interval$;
  }

  returnObservable (): Observable<number> {
    let i = 0;
    return new Observable<number>( observer => {

     const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2){
          observer.error('I llego al valor de 2')
        }

      }, 1000)

    });
    
  }

}
