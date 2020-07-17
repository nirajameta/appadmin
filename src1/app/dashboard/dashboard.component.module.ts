import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModal1Content, DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModal1Content, DashboardComponent],
  exports: [NgbdModal1Content],
  bootstrap: [NgbdModal1Content],
  entryComponents: [NgbdModal1Content]
})
export class NgbdModal1ComponentModule {}
