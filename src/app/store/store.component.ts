import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  msg = '';
  name: string;
  
  c_name = ["Luffy", "Naruto", "Goku"];
  c_age = [19, 21, 144]

  constructor() { }

  ngOnInit() {
  }

  showMsg() {
    this.msg = "Welcome";
  }
}
