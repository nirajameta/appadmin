import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetpswComponent } from './resetpsw/resetpsw.component';
import {NgbdModal1Content, DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent, PropertylistComponent} from './pendingpropertylist/pendingpropertylist.component';
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












@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpswComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    PropertylistComponent,
    NgbdModalContent,
    NgbdModal1Content,
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
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule, 

    OrderModule,
    NgApexchartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ChartsModule,
    UiSwitchModule,
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PropertylistComponent,NgbdModalContent,NgbdModal1Content, DashboardComponent]
})
export class AppModule { }
