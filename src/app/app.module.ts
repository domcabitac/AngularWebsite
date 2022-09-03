import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { BackgroundComponent } from './hero/background/background.component';
import { TypeWritterComponent } from './hero/type-writter/type-writter.component';
import { ServiceComponent } from './service/service.component';
import { CardsComponent } from './service/cards/cards.component';
import { CodeComponent } from './code/code.component';
import { ProjectsComponent } from './code/projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './code/brands/brands.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeroComponent,
    BackgroundComponent,
    TypeWritterComponent,
    ServiceComponent,
    CardsComponent,
    CodeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    BrandsComponent,
    CareerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
