import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent, PropertylistComponent } from './pendingpropertylist.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalContent, PropertylistComponent],
  exports: [NgbdModalContent],
  bootstrap: [NgbdModalContent],
  entryComponents: [PropertylistComponent]
})
export class NgbdModalComponentModule {}
