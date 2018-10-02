import { Injectable } from '@angular/core';
import { ITEMS } from './demo_items';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { TransactionsService } from './transactions.service';

@Injectable({
  // at the root level, Angular creates a single, shared instance
  // of ItemService and injects into any class that asks for it.
  providedIn: 'root'
})
export class ItemService {

  constructor(private transactionsService: TransactionsService) { }
  getItems(): Observable<Item[]> {
    this.transactionsService.add('ItemService: Items fetched');
    return of(ITEMS);
  }

  getItem(id: number): Observable<Item> {
    this.transactionsService.add(`fetched item => id=${id}`);
    return of(ITEMS.find(item => item.id === id));
  }
}
