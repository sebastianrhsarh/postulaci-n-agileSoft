import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superheroes } from 'src/app/classes/superheroes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public id: number;
  public superhero: Superheroes;

  constructor(
    private router: ActivatedRoute,
    private superService: SuperheroService
  ) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = (params['id']);
    });

    this.superService.getSuperheroeById(this.id).then((data: Superheroes) => {
      this.superhero = data;
    });
  }
}