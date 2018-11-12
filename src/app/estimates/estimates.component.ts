import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Estimate 1', weight: '10/12/18', symbol: '1200' },
    { position: 2, name: 'Estimate 2', weight: '10/12/18', symbol: '1250' },
    { position: 3, name: 'Estimate 3', weight: '10/12/18', symbol: '3000' },
    { position: 4, name: 'Estimate 4', weight: '10/12/18', symbol: '5678' },
    { position: 5, name: 'Estimate 5', weight: '10/12/18', symbol: '9876' },
    { position: 6, name: 'Estimate 6', weight: '10/12/18', symbol: '7643' },
    { position: 7, name: 'Estimate 7', weight: '10/12/18', symbol: '9765' },
    { position: 8, name: 'Estimate 8', weight: '10/12/18', symbol: '1356' },
    { position: 9, name: 'Estimate 9', weight: '10/12/18', symbol: '4890' },
    { position: 10, name: 'Estimate 10', weight: '10/12/18', symbol: '8654' },
    { position: 11, name: 'Estimate 11', weight: '10/12/18', symbol: '4789' },
    { position: 12, name: 'Estimate 12', weight: '10/12/18', symbol: '3890' },
    { position: 13, name: 'Estimate 13', weight: '10/12/18', symbol: '0856' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
