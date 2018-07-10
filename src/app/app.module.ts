import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import {FormsModule} from '@angular/forms';
import {ProjectsService} from './projects.service';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { PhasesComponent } from './phases/phases.component';
import {PhasesService} from './phases.service';
import { TasksComponent } from './tasks/tasks.component';
import { ResourcesComponent } from './resources/resources.component';
import {TasksService} from './tasks.service';
import {ResourcesService} from './resources.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    PhasesComponent,
    TasksComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FormsModule,
      FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
      ProjectsService,
      PhasesService,
      TasksService,
      ResourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
