import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

// decorator that specifies the metadata for the component
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  // selectedItem: Item;

  constructor(private itemService: ItemService) {}
  // selects a single item and assigns it to selectedItem
  // onSelect(item): void {
  //   this.selectedItem = item;
  // }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
