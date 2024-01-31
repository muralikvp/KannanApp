import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddnewComponent } from "./addnew/addnew.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFouncComponent } from "./page-not-founc/page-not-founc.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AddnewComponent },
  { path: 'Edit/:id', component: AddnewComponent },


  { path: '**', component: PageNotFouncComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
