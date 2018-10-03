import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
public lines: string;
public inset: boolean;

public destroy: boolean;

constructor() {
  this.lines = 'full';
  this.inset = false;
  
  this.destroy = false;
}

  log(message: any) {
   console.log('value: ', message);
  }

}
