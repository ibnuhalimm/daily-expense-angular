import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesRoutingModule } from './categories/categories-routing.module';
import { CategoriesModule } from './categories/categories.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExpensesRoutingModule } from './expenses/expenses-routing.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PageTitleStrategy } from './shared/providers/PageTitleStrategy';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    AccountModule,
    AccountRoutingModule,
    CategoriesModule,
    CategoriesRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    ExpensesModule,
    ExpensesRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
