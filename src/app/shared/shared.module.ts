import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { ContainerComponent } from './components/container/container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageBackButtonComponent } from './components/page-back-button/page-back-button.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { ToolbarPrimaryButtonComponent } from './components/toolbar-primary-button/toolbar-primary-button.component';
import { InputPrependTextComponent } from './components/input-prepend-text/input-prepend-text.component';
import { InputAppendIconComponent } from './components/input-append-icon/input-append-icon.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { PrimaryButtonBgComponent } from './components/primary-button-bg/primary-button-bg.component';
import { PrimaryButtonTransparentComponent } from './components/primary-button-tranparent/primary-button-transparent.component';
import { DangerButtonBgComponent } from './components/danger-button-bg/danger-button-bg.component';
import { DangerButtonTransparentComponent } from './components/danger-button-transparent/danger-button-transparent.component';
import { TopBarRightActionComponent } from './components/top-bar-right-action/top-bar-right-action.component';
import { ToolbarInputTextComponent } from './components/toolbar-input-text/toolbar-input-text.component';
import { InputPrependIconComponent } from './components/input-prepend-icon/input-prepend-icon.component';
import { BadgeComponent } from './components/badge/badge.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
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
    ButtonLinkComponent,
    ToolbarPrimaryButtonComponent,
    ToolbarInputTextComponent,
    InputPrependTextComponent,
    InputPrependIconComponent,
    InputAppendIconComponent,
    InputTextComponent,
    PrimaryButtonBgComponent,
    PrimaryButtonTransparentComponent,
    DangerButtonBgComponent,
    DangerButtonTransparentComponent,
    TopBarRightActionComponent,
    BadgeComponent
  ],
  declarations: [
    ContainerComponent,
    PageTitleComponent,
    PageBackButtonComponent,
    BottomNavComponent,
    ButtonLinkComponent,
    ToolbarPrimaryButtonComponent,
    ToolbarInputTextComponent,
    InputPrependTextComponent,
    InputPrependIconComponent,
    InputAppendIconComponent,
    InputTextComponent,
    PrimaryButtonBgComponent,
    PrimaryButtonTransparentComponent,
    DangerButtonBgComponent,
    DangerButtonTransparentComponent,
    TopBarRightActionComponent,
    BadgeComponent
  ],
  providers: [
    provideNgxMask()
  ],
})
export class SharedModule {}
