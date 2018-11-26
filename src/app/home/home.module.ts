import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [],
  providers: [],
})
export class HomeModule {}
