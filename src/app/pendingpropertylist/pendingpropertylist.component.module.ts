import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent} from './pendingpropertylist.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalContent],
  exports: [NgbdModalContent],
  bootstrap: [NgbdModalContent],
})
export class NgbdModalComponentModule {}
