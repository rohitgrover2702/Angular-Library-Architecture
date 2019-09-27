import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'projects/core/src/lib/domain/services/notification-service/notification.service';
import { AccountService } from '../../services/account.service';
import { ResponseModel } from 'projects/viewmodels/response-model';
import { constMessage } from '../../config/constants';
import { LoaderService } from 'projects/kobe-services/src/projects';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  responseModel: ResponseModel = {};
  passwordText = 'Show';

  constructor(private fb: FormBuilder, private accountService: AccountService,
              private notificationService: NotificationService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  get firstname() {
    return this.rForm.get('firstname');
  }
  get lastname() {
    return this.rForm.get('lastname');
  }
  get email() {
    return this.rForm.get('email');
  }

  get password() {
    return this.rForm.get('password');
  }
  Register() {
    if (this.rForm.valid) {
      const data = {
        email: this.rForm.value.email,
        password: this.rForm.value.password,
        firstname: this.rForm.value.firstname,
        lastname: this.rForm.value.lastname,
      };
      this.loaderService.start();
      this.accountService.register(data).subscribe(res => {
        this.loaderService.stop();
        this.responseModel = res;
        switch (this.responseModel.status) {
          case 1:
            this.notificationService.Success({ message: this.responseModel.message, title: '' });
            break;
          default:
            break;
        }
      });
    }
  }
  display() {
    const element = document.getElementById('inputPassword') as HTMLInputElement;
    switch (element.type) {
      case 'password':
        element.type = 'text';
        this.passwordText = 'Hide';
        break;
      case 'text':
        element.type = 'password';
        this.passwordText = 'Show';
        break;
      default:
        break;
    }

  }
}
