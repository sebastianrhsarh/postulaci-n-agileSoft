import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superheroes } from 'src/app/classes/superheroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public superheroes: Superheroes[];
  public allSuperheroes: Superheroes[];

  constructor(private superService: SuperheroService) { }

  ngOnInit() {
    this.superService.getAllSuperheroes().then((data:Superheroes[]) => {
    this.superheroes = data.map(value => new Superheroes(value));
    this.allSuperheroes = data.map(value => new Superheroes(value));
  });
  }
  
  public buscarSuperheroe(termino: string) {
    let heroArr = [];
    termino = termino.toLowerCase();
    for(let hero of this.allSuperheroes) {
      let result = hero.nombre.toLowerCase();
      if(result.indexOf(termino) >= 0) {
        heroArr.push(hero)
      }
    }
    this.superheroes = heroArr.map(value => new Superheroes(value));
  }
}
