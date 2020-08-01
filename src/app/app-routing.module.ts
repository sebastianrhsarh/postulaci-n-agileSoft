import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'superheroes'
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'superheroes',
        component: HomeComponent
      },
      {
        path: 'superheroes/:id',
        component: DetailsComponent
      },
      {
        path: 'filtrado',
        component: SuperheroesComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
