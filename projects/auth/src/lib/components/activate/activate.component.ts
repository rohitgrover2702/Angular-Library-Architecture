import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { ResponseModel } from 'projects/viewmodels/response-model';
import { NotificationService } from 'projects/core/src/lib/domain/services/notification-service/notification.service';
import { constMessage } from '../../config/constants';

@Component({
  selector: 'lib-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  userId = null;
  responseModel: ResponseModel = {};

  constructor(private route: ActivatedRoute, private accountService: AccountService,
    private notificationService: NotificationService) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  ngOnInit() {
    this.activateUser();
  }
  activateUser() {

    const data = {
      id: this.userId,
      IsActive: true
    };
    this.accountService.activate(data).subscribe(res => {
      this.responseModel = res;
      switch (this.responseModel.status) {
        case 1:
          this.notificationService.Success({ message: constMessage.User_Activated, title: '' });
          break;
        case 2:
          this.notificationService.Error({ message: this.responseModel.message, title: '' });
          break;
        default:
          break;
      }
    });

  }
}
