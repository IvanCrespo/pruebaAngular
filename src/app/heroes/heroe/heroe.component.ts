import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'IronMan';
    edad: number = 32;

    obtenerNombre(): string{
      return `${ this.nombre} - ${ this.edad}`;
    }

    get nombreCapitalizado(){
      return this.nombre.toUpperCase();
    }
}
