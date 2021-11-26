import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola Mundo</h1>
    <h2>{{titulo}}</h2>
    <button (click)="acumular(base)">+ {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">- {{base}}</button>
    <br>
    <h3>La base es: <strong>{{base}}</strong></h3>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }

    acumular(valor: number) {
        this.numero += valor;
    }
}