import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AccordionExampleModule} from './accordian-example/accordion-example.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        NgbModule,
        AccordionExampleModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}