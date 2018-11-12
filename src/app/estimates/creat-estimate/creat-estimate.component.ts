import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-estimate',
  templateUrl: './creat-estimate.component.html',
  styleUrls: ['./creat-estimate.component.scss']
})
export class CreatEstimateComponent implements OnInit {

  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }

}
