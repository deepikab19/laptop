import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './training/training.component';
import {FeedService} from './feed.service';
import { FormComponent } from './form/form.component';
import { FeedbackService } from './feedback.service';
// import {PopupModule} from 'ng2-opd-popup';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CommonModule } from "@angular/common";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogComponent } from './form/dialog.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';







@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FormComponent,
    DialogComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    BootstrapModalModule.forRoot({container:document.body}),
    CommonModule,
    //PopupModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'training',
        component:FeedbackComponent
    },
    {
      path:'form',
      component:FormComponent
    }
  ])

  ],
  entryComponents: [
    FormComponent
  ],
  
  providers: [FeedbackService, HttpClientModule,FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
