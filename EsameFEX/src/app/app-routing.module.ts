import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPlaceComponent } from './pages/list-place/list-place.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'localita', component: ListPlaceComponent },
  { path: 'localita/:id', component: DetailsPageComponent },
  { path: 'eventi', component: NewsPageComponent },
  { path: 'pass', component:ShopPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
