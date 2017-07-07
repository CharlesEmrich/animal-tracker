import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="jumbotron text-center">Animal Tracker</h2>
    <div class="container">
      <animal-new-component (formSubmitSender)="addAnimal($event)"></animal-new-component>
      <animal-list-component [childAnimalList]="masterAnimalList"></animal-list-component>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that aren't rope"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  addAnimal(animal: Animal) {
    this.masterAnimalList.push(animal);
  }
}
