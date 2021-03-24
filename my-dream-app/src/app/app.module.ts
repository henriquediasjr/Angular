import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { WarningAlertComponent } from "./warningAlert/warning-Alert.component";
import { InputUsernameComponent } from './input-username/input-username.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SucessAlertComponent,
    WarningAlertComponent,
    InputUsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
