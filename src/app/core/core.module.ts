import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    NavigationBarComponent,
    NavComponent,
  ],
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    NavigationBarComponent,
    NavComponent,
  ],
  providers: [AuthService],
})

export class CoreModule { }
