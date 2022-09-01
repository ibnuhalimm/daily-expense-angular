import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent } from './components/container/container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageBackButtonComponent } from './components/page-back-button/page-back-button.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ExpenseItemComponent } from './components/expense-item/expense-item.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { ToolbarPrimaryButtonComponent } from './components/toolbar-primary-button/toolbar-primary-button.component';
import { InputPrependTextComponent } from './components/input-prepend-text/input-prepend-text.component';
import { InputAppendIconComponent } from './components/input-append-icon/input-append-icon.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { PrimaryButtonBgComponent } from './components/primary-button-bg/primary-button-bg.component';
import { PrimaryButtonTransparentComponent } from './components/primary-button-tranparent/primary-button-transparent.component';
import { DangerButtonBgComponent } from './components/danger-button-bg/danger-button-bg.component';
import { DangerButtonTransparentComponent } from './components/danger-button-transparent/danger-button-transparent.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerComponent,
    PageTitleComponent,
    PageBackButtonComponent,
    BottomNavComponent,
    ExpenseItemComponent,
    ButtonLinkComponent,
    ToolbarPrimaryButtonComponent,
    InputPrependTextComponent,
    InputAppendIconComponent,
    InputTextComponent,
    PrimaryButtonBgComponent,
    PrimaryButtonTransparentComponent,
    DangerButtonBgComponent,
    DangerButtonTransparentComponent
  ],
  declarations: [
    ContainerComponent,
    PageTitleComponent,
    PageBackButtonComponent,
    BottomNavComponent,
    ExpenseItemComponent,
    ButtonLinkComponent,
    ToolbarPrimaryButtonComponent,
    InputPrependTextComponent,
    InputAppendIconComponent,
    InputTextComponent,
    PrimaryButtonBgComponent,
    PrimaryButtonTransparentComponent,
    DangerButtonBgComponent,
    DangerButtonTransparentComponent
  ],
  providers: [],
})
export class SharedModule {}
