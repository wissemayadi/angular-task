import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { TaskComponent } from '../pages/task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './modal/modal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TaskComponent, NavbarComponent, FooterComponent, ModalComponent, LoginFormComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule
   
  ],
  exports:[
 
 NgChartsModule,
 TaskComponent,
 NavbarComponent,
 FooterComponent,
 ModalComponent
  ]
})
export class ComponentModule { }
