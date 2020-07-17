import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetpswComponent } from './resetpsw/resetpsw.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertylistComponent} from './pendingpropertylist/pendingpropertylist.component';
import { PropertydetailComponent} from './pendingpropertydetail/pendingpropertydetail.component';
import { EvaluteproComponent} from './evalutepro/evalutepro.component';
import { SettingsComponent} from './settings/settings.component';
import { CompletedpropertyComponent} from './completedproperty/completedproperty.component';
import { AdmindashboardComponent} from './admindashboard/admindashboard.component';
import { AllpropertyComponent} from './surveyorproperty/surveyorproperty.component';
import { SurveyorComponent} from './surveyor/surveyor.component';
import { AddpropertyComponent} from './addproperty/addproperty.component';
import { AllpropertylistComponent} from './allpropertylist/allpropertylist.component';
import { AllpropertydetailComponent} from './allpropertydetail/allpropertydetail.component';
import { NewpropertyComponent} from './newproperty/newproperty.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpswComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pendingpropertylist', component: PropertylistComponent },
  { path: 'pendingpropertydetail', component: PropertydetailComponent },
  { path: 'evaluteproperty', component: EvaluteproComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'completedproperty', component: CompletedpropertyComponent},
  { path: 'admindashboard', component: AdmindashboardComponent},
  { path: 'allproperty', component: AllpropertyComponent},
  { path: 'surveyor', component: SurveyorComponent},
  { path: 'addproperty', component: AddpropertyComponent},
  { path: 'allpropertylist', component: AllpropertylistComponent},
  { path: 'allpropertydetails', component: AllpropertydetailComponent},
  { path: 'newproperty', component: NewpropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
