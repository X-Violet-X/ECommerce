import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './Pages/Shop/shop.component';
import { SiteComponent } from './Pages/site/site.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'home', component: SiteComponent },
  { path: 'uomo', component: SiteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }