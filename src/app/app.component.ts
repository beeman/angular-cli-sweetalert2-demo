import { Component } from '@angular/core';
import { AlertService } from './alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alert works!';
  text = 'This is the Alert Text!';

  constructor(
    private alertService: AlertService,
  ) {
  }

  showAlert(type) {
    this.alertService.alert(this.title, this.text, type);
  }
}
