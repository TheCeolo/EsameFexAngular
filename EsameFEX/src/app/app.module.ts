import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPlaceComponent } from './pages/list-place/list-place.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPlaceComponent,
    ShopPageComponent,
    DetailsPageComponent,
    NewsPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
