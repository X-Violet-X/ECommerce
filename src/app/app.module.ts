import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './Pages/site/site.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderButtonsComponent } from './Components/header/headerButtons/headerButtons.component';
import { HeaderSearchBarComponent } from './Components/header/headerSearchBar/headerSearchBar.component';
import { ShopComponent } from './Pages/Shop/shop.component';
import { ShopSiteComponent } from './Components/shopSite/shopSite.component';
import { SideBarFilterComponent } from './Components/side-bar-filter/side-bar-filter.component';
import { BreadCrumbBarComponent } from './Components/bread-crumb-bar/bread-crumb-bar.component';
import { CheckBoxFilterComponent } from './Components/side-bar-filter/check-box-filter/check-box-filter.component';
import { MeasuresFilterComponent } from './Components/side-bar-filter/measures-filter/measures-filter.component';
import { ColorsFilterComponent } from './Components/side-bar-filter/colors-filter/colors-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PriceFilterComponent } from './Components/side-bar-filter/price-filter/price-filter.component';
import { ShopCardsComponent } from './Components/shopSite/shop-cards/shop-cards.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HeaderComponent,
    FooterComponent,
    HeaderButtonsComponent,
    HeaderSearchBarComponent,
    ShopComponent,
    ShopSiteComponent,
    SideBarFilterComponent,
    BreadCrumbBarComponent,
    CheckBoxFilterComponent,
    MeasuresFilterComponent,
    ColorsFilterComponent,
    PriceFilterComponent,
    ShopCardsComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
