import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { EntrarEquipsComponent } from './Projecte/Components/entrar-equips/entrar-equips.component';
import { JugarComponent } from './Projecte/Components/jugar/jugar.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { NumerosComponent } from './Projecte/Components/numeros/numeros.component';
import { LletresComponent } from './Projecte/Components/lletres/lletres.component';
import { CementiriComponent } from './Projecte/Components/cementiri/cementiri.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    EntrarEquipsComponent,
    JugarComponent,
    NumerosComponent,
    LletresComponent,
    CementiriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
