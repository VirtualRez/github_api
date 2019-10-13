import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'user/:name', component: DetailComponent,
    data: { animation: 'Detail' }
  },
  {
    path: '**', component: HomeComponent,
    data: { animation: 'Home' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
