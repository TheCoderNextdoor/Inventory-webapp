import { Injectable } from '@angular/core';
import { ITEMS } from './demo_items';
import { Item } from './item';

@Injectable({
  // at the root level, Angular creates a single, shared instance
  // of HeroService and injects into any class that asks for it.
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems(): Item[] {
    return ITEMS;
  }
}
