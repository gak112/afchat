import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.componen';

const routes: Routes = [
{
  path: '', component: LayoutComponent, loadChildren: './home/home.module#HomeModule',
},
{
  path: 'auth',  loadChildren: './auth/auth.module#AuthModule',
},
{
  path: 'chat',  component: LayoutComponent,  loadChildren: './chat/chat.module#ChatModule',
},
{
  path: 'profile', component: LayoutComponent,  loadChildren: './profile/profile.module#ProfileModule',
},
{
  path: 'group-chat', component: LayoutComponent,  loadChildren: './group-chat/group-chat.module#GroupChatModule',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
