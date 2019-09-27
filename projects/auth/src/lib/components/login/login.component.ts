import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { NotificationService } from 'projects/core/src/lib/domain/services/notification-service/notification.service';
import { ResponseModel } from 'projects/viewmodels/response-model';
import { MembershipService } from 'projects/core/src/projects';
import { LoaderService } from 'projects/kobe-services/src/projects';
import { constMessage } from '../../config/constants';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  responseModel: ResponseModel = {};

  constructor(private fb: FormBuilder, private accountService: AccountService,
              private notificationService: NotificationService,
              private membershipService: MembershipService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  get email() {
    return this.rForm.get('email');
  }

  get password() {
    return this.rForm.get('password');
  }

  Login() {
    if (this.rForm.valid) {
      const data = {
        email: this.rForm.value.email,
        password: this.rForm.value.password
      };
     // this.loaderService.start();
      this.accountService.authenticate(data).subscribe(res => {
      // this.loaderService.stop();
       this.responseModel = res;
       switch (this.responseModel.status) {
          case 1:
            this.notificationService.Success({ message: constMessage.User_Login, title: '' });
            this.membershipService.setCookies(this.responseModel.responseData);
            break;
          case 2:
            this.notificationService.Error({ message: this.responseModel.message, title: '' });
            break;
          default:
            break;
        }
      });
    } else {
      this.validateAllFields(this.rForm);
    }
  }

  validateAllFields(formGroup: FormGroup) {
    Object.keys(this.rForm.controls).map(controlName => {
      this.rForm.get(controlName).markAsTouched({ onlySelf: true });
    });

    Object.keys(this.rForm.controls).map(controlName => {
      this.rForm.get(controlName).markAsDirty({ onlySelf: true });
    });
  }

}
