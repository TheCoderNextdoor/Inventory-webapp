import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
