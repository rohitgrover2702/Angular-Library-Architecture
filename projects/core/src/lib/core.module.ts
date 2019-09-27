import { NgModule, ErrorHandler } from '@angular/core';
import { CoreComponent } from './core.component';
import { CookieModule, CookieService } from 'ngx-cookie';
import { InterceptorService } from './domain/services/interceptor/interceptor.service';
import { ApiService } from './domain/services/api-service/api.service';
import { AuthServiceGuard } from './domain/services/auth-service/auth-service.guard';
import { ErrorHandlerService } from './domain/services/error-handler/error-handler.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    CookieModule.forRoot()],
  providers: [CookieService, ErrorHandlerService, InterceptorService, ApiService, AuthServiceGuard, InterceptorService],
  exports: [CoreComponent]
})
export class CoreModule { }
