import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list-component',
  template: `
    <div class="row well">
      <select class="form-control form-group form-inline" (change)="onChange($event.target.value)">
        <option value="allAnimals">All Animals</option>
        <option value="youngAnimals">Animals Younger Than 2 Years Old</option>
        <option value="oldAnimals">Animals 2 Years Old or Older</option>
      </select>
      <span>Total Caretakers: {{totalCaretakers}}</span>
    </div>
    <div class="row">
      <div class="well" *ngFor="let animal of childAnimalList | byAge:ageFilter">
        <div class="row">
          <h2>{{animal.name}} : {{animal.species}}</h2>
        </div>
        <div class="row">
          <ul>
            <li>Age: {{animal.age}}</li>
            <li>Sex: {{animal.sex}}</li>
            <li>Diet: {{animal.diet}}</li>
            <li>Location: {{animal.location}}</li>
            <li>Caretakes: {{animal.caretakers}}</li>
            <li>Likes: {{animal.like}}</li>
            <li>Dislikes: {{animal.dislike}}</li>
          </ul>
        </div>
        <div class="row">
          <button class="btn btn-info" (click)="selectAnimal(animal)">Edit</button>
        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() totalCaretakers: number;
  @Output() selectSender = new EventEmitter();
  ageFilter: string = "allAnimals";

  selectAnimal(animal: Animal) {
    this.selectSender.emit(animal);
  }
  onChange(menuOption) {
    this.ageFilter = menuOption;
  }
}
