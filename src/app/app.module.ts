import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatTableModule, MatCheckboxModule, MatCardModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule, MatTableModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
