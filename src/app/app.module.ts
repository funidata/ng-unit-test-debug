import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, Test1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
