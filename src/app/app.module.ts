import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseAddComponent } from './pages/expense-add/expense-add.component';
import { ExpenseEditComponent } from './pages/expense-edit/expense-edit.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

import { ContainerComponent } from './components/container/container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageBackButtonComponent } from './components/page-back-button/page-back-button.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ExpenseItemComponent } from './components/expense-item/expense-item.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { CategoryItemComponent } from './components/form/category-item/category-item.component';
import { InputPrependTextComponent } from './components/form/input-prepend-text/input-prepend-text.component';
import { InputAppendIconComponent } from './components/form/input-append-icon/input-append-icon.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { FormPrimaryButtonBgComponent } from './components/form/primary-button-bg/primary-button-bg.component';
import { FormPrimaryButtonTransparentComponent } from './components/form/primary-button-tranparent/primary-button-transparent.component';
import { FormDangerButtonBgComponent } from './components/form/danger-button-bg/danger-button-bg.component';
import { FormDangerButtonTransparentComponent } from './components/form/danger-button-transparent/danger-button-transparent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenseAddComponent,
    ExpenseEditComponent,
    CategoryComponent,
    ProfileComponent,
    LoginComponent,
    NotFoundComponent,

    ContainerComponent,
    PageTitleComponent,
    PageBackButtonComponent,
    BottomNavComponent,
    ExpenseItemComponent,
    ButtonLinkComponent,

    PrimaryButtonComponent,
    CategoryItemComponent,

    InputPrependTextComponent,
    InputAppendIconComponent,
    InputTextComponent,
    FormPrimaryButtonBgComponent,
    FormPrimaryButtonTransparentComponent,
    FormDangerButtonBgComponent,
    FormDangerButtonTransparentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
