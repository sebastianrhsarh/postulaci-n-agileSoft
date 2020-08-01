import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Superheroes } from '../classes/superheroes';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  public uri = 'http://157.245.138.232:9091/api/v1/test/superheroes';

  constructor(private http: HttpClient) { }

  public async getAllSuperheroes(): Promise<Superheroes[]> {
    return new Promise<Superheroes[]>((resolve, reject) => {
      this.http.get(`${this.uri}`).subscribe((info: any) => {
        resolve(info.data.map(value =>  new Superheroes(value)));
      });
    });
  }

  public async getSuperheroeById(id: number): Promise<Superheroes> {
    return new Promise<Superheroes>((resolve, reject) => {
      this.http.get(`${this.uri}/${id}`).subscribe((info: any) => {
        resolve(new Superheroes(info.data));
      });
    });
  }

  public async getFilterSuperheroe(fly: boolean): Promise<Superheroes[]> {
    return new Promise<Superheroes[]>((resolve, reject) => {
      this.http.get(`${this.uri}/?puedeVolar=${fly}`).subscribe((info: any) => {
        resolve(info.data.map(value =>  new Superheroes(value)));
      });
    });
  }
}
