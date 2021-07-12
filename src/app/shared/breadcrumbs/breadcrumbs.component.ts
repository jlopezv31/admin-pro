import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  titleSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { 
 /*   console.log(route.snapshot.children[0].data)*/

  this.titleSubs$ = this.getArgumentosDeRutar()
   .subscribe(({title}) => {
     this.title = title;
     document.title = `AdminPro - ${ title }`
   });


  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();

  }

  getArgumentosDeRutar(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    );
   }

  }



