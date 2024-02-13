import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { FooterComponent } from "../footer/footer.component";


@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        ProfileComponent,
        TasksComponent,
        AddtasksComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FooterComponent
    ]
})
export class DashboardModule { }
