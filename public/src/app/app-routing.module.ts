import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "products", children:[
    {path: "", pathMatch: "full", component: ListComponent},
    {path: "edit/:id", component: EditComponent},
    {path: "new", component: NewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
