import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ExampleComponent} from './example.component';
import {AnimalListComponent} from './animal-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  ExampleComponent, //remove
                  AnimalListComponent
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
