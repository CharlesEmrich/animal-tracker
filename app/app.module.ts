import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AnimalListComponent} from './animal-list.component';
import {AnimalEditComponent} from './animal-edit.component';
import {AnimalNewComponent} from './animal-new.component';
import {AgePipe} from './age.pipe';

@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  AnimalNewComponent,
                  AnimalEditComponent,
                  AgePipe
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
