import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accounting';
  links = [];
  constructor() {
    this.links = [ 
      {link: 'Estimate', route: 'estimates', icon: 'home'},
      {link: 'Reports', route: '', icon: 'reports'},
      {link: 'Invoices', route: '', icon: 'account_balance'},
      {link: 'Bills', route: '', icon: 'account_balance_wallet'}
    ];
  }
}
