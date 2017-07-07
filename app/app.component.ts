import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="jumbotron text-center">Animal Tracker</h2>
    <div class="container">
      <animal-new-component (formSubmitSender)="addAnimal($event)"></animal-new-component>
      <animal-edit-component [childSelectedAnimal]="selectedAnimal" (doneClickSender)="editAnimalDone()"></animal-edit-component>
      <animal-list-component [childAnimalList]="masterAnimalList" [totalCaretakers]="addCaretakers()" (selectSender)="editAnimal($event)"></animal-list-component>
    </div>
  `
})

//NOTE: Below this line, my linter starts freaking out a bunch. I couldn't pin down the why of it. If anything shows up on scrutiny, I'd love to hear about it.
export class AppComponent {
  selectedAnimal: Animal = null;
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that aren't rope"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  addCaretakers() {
    let total: number = 0;
    this.masterAnimalList.forEach(animal => total += animal.caretakers);
    return total;
  }

  addAnimal(animal: Animal) {
    this.masterAnimalList.push(animal);
  }
  editAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }
  editAnimalDone() {
    this.selectedAnimal = null;
  }
}
