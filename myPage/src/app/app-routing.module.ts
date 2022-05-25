import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
const routes: Routes = [
  {   
    path :'searchPage',component:SearchPageComponent, pathMatch: 'full'
  },
  {
    path: '', component: LandingPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
