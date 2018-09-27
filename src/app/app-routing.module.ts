import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [{
  path: 'items',
  component: ItemsComponent
}];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
