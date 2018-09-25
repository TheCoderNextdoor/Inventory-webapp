import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../demo_items';

// decorator that specifies the metadata for the component
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = ITEMS;
  selectedItem: Item;

  // selects a single item and assigns it to selectedItem
  onSelect(item): void {
    this.selectedItem = item;
  }

  constructor() { }

  ngOnInit() {
  }

}
