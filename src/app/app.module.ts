import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { BackgroundComponent } from './hero/background/background.component';
import { TypeWritterComponent } from './hero/type-writter/type-writter.component';
import { CtaComponent } from './hero/cta/cta.component';
import { ServiceComponent } from './service/service.component';
import { CardsComponent } from './service/cards/cards.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeroComponent,
    BackgroundComponent,
    TypeWritterComponent,
    CtaComponent,
    ServiceComponent,
    CardsComponent,
    AboutComponent
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
