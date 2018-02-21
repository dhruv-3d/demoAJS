import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  son = null;

  constructor(private _data: GetdataService, private route: Router) { }

  ngOnInit() {
    this._data.getJsonData().subscribe(res => this.son = res)
  }

  takeMeToStore() {
    this.route.navigate(['']);
  }
}
