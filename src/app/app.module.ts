import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MnFullpageDirective, MnFullpageOptions } from 'ng2-fullpage';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component'
import { AboutComponent } from './about/about.component'
import { FooterComponent } from './footer/footer.component'
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { ProjectComponent } from './project/project.component';
import { router } from './app.router';
import { DevComponent } from './dev/dev.component';
import { EngComponent } from './eng/eng.component';
import { ResumeComponent } from './resume/resume.component';




@NgModule({
    declarations: [
        MnFullpageDirective,
        MdInput,
        MdCard,
        MdButton,
        MdIcon,
        MdToolbar,
        AppComponent,
        CoverComponent,
        AboutComponent,
        FooterComponent,
        ProjectComponent,
        DevComponent,
        EngComponent,
        ResumeComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        router
    ],
    providers: [FormBuilder,MdIconRegistry],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
