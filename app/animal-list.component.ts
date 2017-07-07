import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list-component',
  template: `
    <div class="row well">

    </div>
    <div class="row">
      <div class="well" *ngFor="let animal of childAnimalList">
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

        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
