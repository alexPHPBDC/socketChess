import { NgModule } from '@angular/core';
import { JugarComponent } from './Projecte/Components/jugar/jugar.component';
import { EntrarEquipsComponent } from './Projecte/Components/entrar-equips/entrar-equips.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'jugar', component: JugarComponent },
  { path: '', component: EntrarEquipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }