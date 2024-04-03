import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './Pages/site/site.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderButtonsComponent } from './Components/header/headerButtons/headerButtons.component';
import { HeaderSearchBarComponent } from './Components/header/headerSearchBar/headerSearchBar.component';

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
import { HttpClientModule } from '@angular/common/http';
import { HeaderDropDownMenuComponent } from './Components/header/header-drop-down-menu/header-drop-down-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HeaderComponent,
    FooterComponent,
    HeaderButtonsComponent,
    HeaderSearchBarComponent,
    ShopSiteComponent,
    SideBarFilterComponent,
    BreadCrumbBarComponent,
    CheckBoxFilterComponent,
    MeasuresFilterComponent,
    ColorsFilterComponent,
    PriceFilterComponent,
    ShopCardsComponent,
    HeaderDropDownMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
