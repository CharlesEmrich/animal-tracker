import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'example-component',
  template: `
  <div class="row" *ngIf="childSelectedAnimal">
    <form>
    <div class="form-group form-inline">
      <label>Name</label>
      <input class="form-control" #name [(ngModel)]="childSelectedAnimal.name" type="text">
    </div>
    <div class="form-group form-inline">
      <label>Species</label>
      <input class="form-control" #species [(ngModel)]="childSelectedAnimal.species" type="text">
    </div>
    <div class="form-group form-inline">
      <label>Age</label>
      <input class="form-control" #age [(ngModel)]="childSelectedAnimal.age" type="number">
    </div>
    <div class="form-group form-inline">
      <label>Diet</label>
      <input class="form-control" #diet [(ngModel)]="childSelectedAnimal.diet" type="text">
    </div>
    <div class="form-group form-inline">
      <label>Location</label>
      <input class="form-control" #location [(ngModel)]="childSelectedAnimal.location" type="text">
    </div>
    <div class="form-group form-inline">
      <label>Caretakers</label>
      <input class="form-control" #caretakers [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    </div>
    <div class="form-group form-inline">
      <label>Sex</label>
      <select #sex>
        <option [value]="male"> Male </option>
        <option [value]="female"> Female </option>
      </select>
    </div>
    <div class="form-group form-inline">
      <label>Like</label>
      <input class="form-control" #like [(ngModel)]="childSelectedAnimal.like" type="text">
    </div>
    <div class="form-group form-inline">
      <label>Dislike</label>
      <input class="form-control" #dislike [(ngModel)]="childSelectedAnimal.dislike" type="text">
    </div>
    </form>
    <div class="bg-warning" *ngIf="!fieldsTruthy(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, like.value, dislike.value)">Please leave all fields filled out.</div>
    <button *ngIf="fieldsTruthy(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, like.value, dislike.value)" class="btn btn-info" (click)="doneButtonClicked()">Done</button>
  </div>
`
})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneClickSender.emit();
  }
  fieldsTruthy(species: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, like: string, dislike: string) {
    return species && name && parseInt(age) && diet && location && parseInt(caretakers) && sex && like && dislike;
  }
}
