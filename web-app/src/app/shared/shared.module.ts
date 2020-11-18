import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { setTheme } from 'ngx-bootstrap/utils';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import * as internalComp from './components'

@NgModule({
  declarations: [
    internalComp.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    internalComp.components,
    CollapseModule,
    BsDropdownModule,
  ]
})
export class SharedModule { }
