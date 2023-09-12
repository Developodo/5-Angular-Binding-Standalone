import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nombre: string = ''; //Los atributos por defecto son públicos
  edad = 10;
  timeout!: any;
  /* En caso de inicializar los valores usamos el operador ! y
   * si desconocemos el tipo, podemos emplear any, pero
   * intentaremos evitarlo en lo posible.*/

  color: string = 'red'; //definición y tipado perfecto. Tipo string
  //suele definirse con comilla simple
  miClases: string[] = ['contenedor', 'normal']; //un array de string

  /**
   * Los métodos también los tipamos.
   */
  incrementaEdad(): void {
    /**
     *  Los atributos y métodos de la clase deben referenciarse con el operador this
     */
    this.edad++;
    this.cambiaBorde(['contenedor', 'incrementa']);
  }
  decrementaEdad(): void {
    this.edad--;
    this.miClases = ['contenedor', 'decrementa'];
  }
  inserta(): void {
    /**
     * Se recomienda el uso de plantilla literales.
     * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
     */
    alert(`${this.nombre} puede sacarse la licencia`);
    this.resetea();
  }
  /**
   * Los parámetros opcionales de un método se definen con el operador ?
   */
  poneMayuscula(event?: Event): void {
    this.nombre = this.nombre.toUpperCase().trim();
  }
  resetea(): void {
    this.nombre = '';
    this.edad = 10;
  }
  /**
   * Los parámetros opcionales que deseamos tengan un valor defecto en caso
   * de ser omitidos se inicializan en la propia declaración del método.
   * En este caso recibe un parámetro denominado clases de tipo array de string
   * cuyo valor por defecto es el indicado.
   */
  private cambiaBorde(clases: string[] = ['contenedor', 'normal']): void {
    this.miClases = clases;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.miClases = ['contenedor', 'normal'];
      this.timeout = undefined;
    }, 1000);
  }
}
