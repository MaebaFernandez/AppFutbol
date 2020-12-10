import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
