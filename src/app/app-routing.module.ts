import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

const routes: Routes = [
  {path:'list',component:TaskComponent},
{path:'good/:id',component:TaskDetailComponent},
{path:'adduser',component:LoginFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
