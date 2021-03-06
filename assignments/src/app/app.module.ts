import { CounterService } from './counter.service';
import { UserService } from './user.service';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { WarningAlertComponent } from './warnig-alert/warnig-alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment2Component,
    Assignment2Component,
    Assignment3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
