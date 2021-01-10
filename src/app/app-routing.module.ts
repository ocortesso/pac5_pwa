import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './components/episode/episode.component';
import { SeasonsComponent } from './components/seasons/seasons.component';

const routes: Routes = [
  {path:'', component: SeasonsComponent},
  {path:'episode/:Episode', component: EpisodeComponent},
  {path:'**', component: SeasonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
