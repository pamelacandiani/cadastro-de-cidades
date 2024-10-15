import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';

const routes: Routes = [
  {path:'', redirectTo : '/cidade', pathMatch: 'full'},
  {path: 'cidade', component: CidadeComponent},
  {path: 'cidade/:id', component: CidadeFormComponent},
  {path: 'cidades', component: CidadeFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
