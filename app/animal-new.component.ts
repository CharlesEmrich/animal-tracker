import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new-component',
  template: `
    <div class="row" *ngIf="!formVisible">
      <button (click)="toggleForm()"> Add an Animal </button>
    </div>
    <div class="row" *ngIf="formVisible">
      <form>
      <div class="form-group form-inline">
        <label>Name</label>
        <input class="form-control" #name type="text">
      </div>
      <div class="form-group form-inline">
        <label>Species</label>
        <input class="form-control" #species type="text">
      </div>
      <div class="form-group form-inline">
        <label>Age</label>
        <input class="form-control" #age type="number">
      </div>
      <div class="form-group form-inline">
        <label>Diet</label>
        <input class="form-control" #diet type="text">
      </div>
      <div class="form-group form-inline">
        <label>Location</label>
        <input class="form-control" #location type="text">
      </div>
      <div class="form-group form-inline">
        <label>Caretakers</label>
        <input class="form-control" #caretakers type="number">
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
        <input class="form-control" #like type="text">
      </div>
      <div class="form-group form-inline">
        <label>Dislike</label>
        <input class="form-control" #dislike type="text">
      </div>
      </form>
      <button class="btn btn-info" (click)="
      formSubmit(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, like.value, dislike.value);
      species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; like.value=''; dislike.value='';">To the Zoo</button>
    </div>
  `
})

export class AnimalNewComponent {
  @Output() formSubmitSender = new EventEmitter();
  formVisible: boolean = false;

  toggleForm() {
    this.formVisible  ? this.formVisible = false : this.formVisible = true;
  }
  formSubmit(species: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, like: string, dislike: string) {
    if (species && name && parseInt(age) && diet && location && parseInt(caretakers) && sex && like && dislike) {
      this.formVisible = false;
      const emittedAnimal = new Animal(species, name, parseInt(age), diet, location, parseInt(caretakers), sex, like, dislike);
      this.formSubmitSender.emit(emittedAnimal);
    }
  }
}
