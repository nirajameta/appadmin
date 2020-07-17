import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetpswComponent } from './resetpsw/resetpsw.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertylistComponent} from './pendingpropertylist/pendingpropertylist.component';
import { PropertydetailComponent } from './pendingpropertydetail/pendingpropertydetail.component';
import { EvaluteproComponent } from './evalutepro/evalutepro.component';
import { SettingsComponent } from './settings/settings.component';
import { CompletedpropertyComponent } from './completedproperty/completedproperty.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AllpropertyComponent } from './surveyorproperty/surveyorproperty.component';
import { SurveyorComponent } from './surveyor/surveyor.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AllpropertylistComponent } from './allpropertylist/allpropertylist.component';
import { AllpropertydetailComponent } from './allpropertydetail/allpropertydetail.component';
import { NewpropertyComponent } from './newproperty/newproperty.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbdModalComponentModule } from './pendingpropertylist/pendingpropertylist.component.module';
import { dashboardComponentModule } from './dashboard/dashboard.component.module';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { AddsurveyorComponent } from './addsurveyor/addsurveyor.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { AddexpertComponent } from './adduser/adduser.component';
import { ExpertlistComponent } from './userlist/userlist.component';
import { NewpropertydetailsComponent } from './newpropertydetails/newpropertydetails.component';
import { AppropendingpropertyComponent } from './appropendingproperty/appropendingproperty.component';













@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpswComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    
    PropertylistComponent,
    PropertydetailComponent,
    EvaluteproComponent,
    SettingsComponent,
    CompletedpropertyComponent,
    AdmindashboardComponent,
    AllpropertyComponent,
    SurveyorComponent,
    AddpropertyComponent,
    AllpropertylistComponent,
    AllpropertydetailComponent,
    NewpropertyComponent,
    AddsurveyorComponent,
    MustMatchDirective,
    AddexpertComponent,
    ExpertlistComponent,
    NewpropertydetailsComponent,
    AppropendingpropertyComponent
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    OrderModule,
    NgbdModalComponentModule,
    dashboardComponentModule,
    HttpClientModule,
    NgApexchartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    UiSwitchModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      outerStrokeGradient: false,
      outerStrokeWidth: 10,
      outerStrokeColor: "#b6529a",
      outerStrokeGradientStopColor: "#4882c2",
      innerStrokeColor: "#e64663",
      innerStrokeWidth: 10,
      animateTitle: true,
      animationDuration: 2000,
      maxPercent:500,
      subtitle: "Total",
      subtitleFontSize : "15",
      showBackground: false,
      clockwise: true,
      startFromZero: false
     
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAefYpBejAQM9_EGrRjwGdkWSwOI2XCGwU',
      libraries: ['places']
    })
  ],
  providers: [AuthGuard,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  
  bootstrap: [AppComponent],
  entryComponents: [PropertylistComponent]
})
export class AppModule { }
