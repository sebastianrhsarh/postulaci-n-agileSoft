import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superheroes } from 'src/app/classes/superheroes';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  
  public superhero: Superheroes;
  public filterSuperhero: Superheroes[];
  public id: number;
  public fly: boolean;

  constructor(private superService: SuperheroService) { }

  ngOnInit() {
  }

  public search(fly) {
    this.superService.getFilterSuperheroe(fly).then((data:Superheroes[]) => {
      this.filterSuperhero = data;
    });
  }
}
