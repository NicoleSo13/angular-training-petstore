import { Routes } from '@angular/router';
import { Users } from './features/users/users';
import { Orders } from './features/orders/orders';
import { Pets } from './features/pets/pets';

export const routes: Routes = [
  { path: 'users', component: Users, data: { title: 'Users'} },
  { path: 'pets', component: Pets, data: { title: 'Pets'} },
  { path: 'orders', component: Orders, data: { title: 'Orders'} },
  
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];