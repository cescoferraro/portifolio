import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';
import { AppComponent } from './app.component';
import {CoverComponent} from './cover/cover.component'
import {AboutComponent} from './about/about.component'
import {FooterComponent} from './footer/footer.component'
import {ProjectsComponent} from './projects/projects.component'
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';


@NgModule({
  declarations: [ 
                  MdInput,
                  MdCard,
                  AppComponent,
                  MnFullpageDirective, 
                  CoverComponent,
                  AboutComponent,
                  FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
              AppComponent, 
              CoverComponent,
              AboutComponent,
              FooterComponent
              ]
})
export class AppModule { }
