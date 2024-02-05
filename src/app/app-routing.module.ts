import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddnewComponent } from "./addnew/addnew.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFouncComponent } from "./page-not-founc/page-not-founc.component";
import { authGuard } from "./Shared/auth.guard";
import { roleGuard } from "./Shared/role.guard";
import { CustomerComponent } from "./customer/customer.component";
import { ListingComponent } from "./listing/listing.component";
import { InBuiltDirectivesComponent } from "./in-built-directives/in-built-directives.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: ListingComponent,
      },
      { path: 'create', component: AddnewComponent },
      { path: 'Edit/:id', component: AddnewComponent },
      {path:'Directives',component:InBuiltDirectivesComponent}
    ],
    canActivate: [authGuard, roleGuard],
  },

  { path: '**', component: PageNotFouncComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
