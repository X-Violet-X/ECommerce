import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './Pages/site/site.component';
import { LoginComponent } from './Pages/login/login.component';
import { ShopSiteComponent } from './Components/shopSite/shopSite.component';

const routes: Routes = [
  { path: 'shop', component: ShopSiteComponent },
  { path: 'home', component: SiteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }