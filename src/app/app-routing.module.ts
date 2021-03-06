import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'details/:id', component: ItemDetailsComponent},
  {path: '', redirectTo: '/favourites', pathMatch: 'full'},
];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
