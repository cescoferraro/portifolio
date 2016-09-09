import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MnFullpageDirective } from 'ng2-fullpage';
import { MnFullpageService  } from 'ng2-fullpage/components/fullpage/mnFullpage.service';
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/contact/contact.component';
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { ProjectComponent } from './components/project/project.component';
import { router } from './app.router';
import { DevComponent } from './pages/dev/dev.component';
import { EngComponent } from './pages/eng/eng.component';
import { ResumeComponent } from './components/resume/resume.component';


@NgModule({
    declarations: [
        MnFullpageDirective,
        MdInput,
        MdCard,
        MdButton,
        MdIcon,
        MdToolbar,
        CoverComponent,
        AboutComponent,
        DevComponent,
        AppComponent,
        FooterComponent,
        ProjectComponent,
        EngComponent,
        ResumeComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        router
    ],
    providers: [FormBuilder, MdIconRegistry,MnFullpageService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
