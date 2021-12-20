import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SearchService } from './search.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, OneComponent, TwoComponent ],
  providers: [SearchService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
