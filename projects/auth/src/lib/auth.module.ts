import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from 'projects/core/src/projects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';
import { ValidationComponent, KobeComponentsModule } from 'projects/kobe-components/src/public-api';
import { ButtonComponent } from 'projects/kobe-components/src/lib/button/button.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivateComponent } from './components/activate/activate.component';


@NgModule({
  declarations: [LoginComponent, ValidationComponent, ButtonComponent, RegisterComponent, ActivateComponent],
  imports: [CommonModule, RouterModule, AuthRoutingModule, CoreModule, FormsModule, ReactiveFormsModule],
  providers: [AccountService]
})
export class AuthModule { }
