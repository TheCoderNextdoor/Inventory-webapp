import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

// decorator that specifies the metadata for the component
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [
    {
      id: 1,
      name: 'Laptop',
      value: 25
    },
    {
      id: 2,
      name: 'Torch',
      value: 2
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
