import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from 'projects/auth/src/lib/auth.module';


const routes: Routes = [
  {
    path: '',
   // component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: 'projects/auth/src/lib/auth.module#AuthModule',
        // loadChildren: () => AuthModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
