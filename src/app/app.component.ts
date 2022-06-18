import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: []
})
export class AppComponent { 
  constructor(private primengConfig: PrimeNGConfig) {}
//   export class MyModel {

//     value: Date;

// }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
