import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule} from 'ngx-bootstrap';
import { ButtonsModule} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap'; 
import { ProgressbarModule} from 'ngx-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
            ButtonsModule.forRoot(),
            AlertModule.forRoot(),
            ProgressbarModule.forRoot(),
            TabsModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
