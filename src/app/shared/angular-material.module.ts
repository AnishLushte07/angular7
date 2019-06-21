import { NgModule } from '@angular/core';

// Navigation

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

// Buttons & Indicators

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Layout

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatToolbarModule, MatMenuModule, MatDividerModule,
  ],
  exports: [
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatToolbarModule, MatMenuModule, MatDividerModule,
  ],
})

export class AngularMaterialModule { }
