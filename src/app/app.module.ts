import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialComponent } from './testimonials/testimonial.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { InformationComponent } from './information/information.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getInitialState, reducerToken, REDUCER_PROVIDER } from './app.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProjectEffects, weatherEffects } from './projects/store/projects.effects';
import { projectReducer } from './projects/store/projects.reducers';
import { weatherReducer } from './projects/store/projects.reducers';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestimonialComponent,
    HeaderComponent,
    TitleComponent,
    InformationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
        }
    }),
    EffectsModule.forRoot([ProjectEffects, weatherEffects]),
    StoreModule.forRoot(reducerToken, {initialState: getInitialState}),
    StoreModule.forFeature('projects', projectReducer),
    StoreModule.forFeature('weather', weatherReducer),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [REDUCER_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
