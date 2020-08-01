export class Superheroes {
  public id: number;
  public nombre: string;
  public puedeVolar: boolean;
  public nombreReal: string;
  public avatarURL: string;
  public descripcion: string;
  public habilidades: [];

  constructor (data: any = null) {
    if (data) {
      this.id = data.id;
      this.nombre = data.nombre;
      this.puedeVolar = data.puedeVolar;
      this.nombreReal = data.nombreReal;
      this.avatarURL = data.avatarURL;
      this.descripcion = data.descripcion;
      this.habilidades = data.habilidades.map(value => value);
    }
  }
}