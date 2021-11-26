import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['IronMan', 'Spiderman', 'Thor', 'Hulk', 'Capitan America'];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
    // Se utiliza para inicializar cosas por ejemplo
    // peticiones a un servicio
  }

  borrarHeroe(){
    // console.log("Borrar");
    // this.heroes.shift();
    // this.heroes = [];
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
