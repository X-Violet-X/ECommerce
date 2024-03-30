import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './Pages/site/site.component';
// import { CarouselBackgroundComponent } from './site/carousel-background/carousel-background.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderButtonsComponent } from './Components/header/headerButtons/headerButtons.component';
import { HeaderSearchBarComponent } from './Components/header/headerSearchBar/headerSearchBar.component';
import { ShopComponent } from './Pages/Shop/shop.component';
import { ShopSiteComponent } from './Components/shopSite/shopSite.component';
import { SideBarFilterComponent } from './Components/side-bar-filter/side-bar-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    // CarouselBackgroundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderButtonsComponent,
    HeaderSearchBarComponent,
    ShopComponent,
    ShopSiteComponent,
    SideBarFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
