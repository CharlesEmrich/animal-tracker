import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'byAge',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input : Animal[], ageFilter) {
    if (ageFilter === 'allAnimals') {
      return input;
    } else if (ageFilter === 'youngAnimals') {
      return input.filter(animal => animal.age < 2);
    } else if (ageFilter === 'oldAnimals') {
      return input.filter(animal => animal.age >= 2);
    }
  }
}
