import { CrazyRequestsService } from './crazy-requests.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interval: any;
  constructor(private readonly service: CrazyRequestsService) {}

  iniciar() {
    this.interval = setInterval(() => {
      this.service.get('echo/' + Math.trunc(new Date().getTime() / 1000)).subscribe(res => {
        console.log(res);
      });
    }, 1000);
  }

  parar() {
    clearInterval(this.interval);
  }
}
