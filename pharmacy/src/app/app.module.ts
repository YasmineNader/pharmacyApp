import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptor } from './interceptors/user.interceptor';
import { HomePageComponent } from './home-page/home-page.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PurchaseRequestsComponent } from './purchase-requests/purchase-requests.component';
import { PurchaseRequestDetailsComponent } from './purchase-request-details/purchase-request-details.component';
import { DispensingCartComponent } from './dispensing-cart/dispensing-cart.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PharmacistHomeComponent } from './pharmacist-home/pharmacist-home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DrugCategoriesComponent } from './drug-categories/drug-categories.component';
import { StockRequestComponent } from './stock-request/stock-request.component';
import { StockRequestDetailsComponent } from './stock-request-details/stock-request-details.component';
import { StockCartComponent } from './stock-cart/stock-cart.component';
import { AdminNavbarComponent } from './shared/admin/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './shared/admin/admin-footer/admin-footer.component';
import { PurchaseCartComponent } from './purchase-cart/purchase-cart.component';
import { PurchaseInvoicingComponent } from './purchase-invoicing/purchase-invoicing.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { EditSuppliersComponent } from './admin/edit-suppliers/edit-suppliers.component';
import { AddSuppliersComponent } from './admin/add-suppliers/add-suppliers.component';
import { EditStoreComponent } from './admin/edit-store/edit-store.component';
import { AddStoreComponent } from './admin/add-store/add-store.component';
import { AddUserStoreComponent } from './admin/add-user-store/add-user-store.component';
import { EditUserStoreComponent } from './admin/edit-user-store/edit-user-store.component';
import { AddDrugComponent } from './admin/add-drug/add-drug.component';
import { EditDrugComponent } from './admin/edit-drug/edit-drug.component';
import { AddClassComponent } from './admin/add-class/add-class.component';
import { EditClassComponent } from './admin/edit-class/edit-class.component';
import { AllTransferComponent } from './all-transfer/all-transfer.component';
import { EditFormClassComponent } from './admin/edit-form-class/edit-form-class.component';
import { EditFormDrugComponent } from './admin/edit-form-drug/edit-form-drug.component';
import { AllDrugStockRequestComponent } from './all-drug-stock-request/all-drug-stock-request.component';
import { AllPurchasesOrderComponent } from './all-purchases-order/all-purchases-order.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    HomePageComponent,
    DrugDetailsComponent,
    SearchPageComponent,
    PurchaseRequestsComponent,
    PurchaseRequestDetailsComponent,
    DispensingCartComponent,
    AdminHomeComponent,
    PharmacistHomeComponent,
    DrugCategoriesComponent,
    StockRequestComponent,
    StockRequestDetailsComponent,
    StockCartComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    PurchaseCartComponent,
    PurchaseInvoicingComponent,
    AddUserComponent,
    EditUserComponent,
    EditSuppliersComponent,
    AddSuppliersComponent,
    EditStoreComponent,
    AddStoreComponent,
    AddUserStoreComponent,
    EditUserStoreComponent,
    AddDrugComponent,
    EditDrugComponent,
    AddClassComponent,
    EditClassComponent,
    AllTransferComponent,
    EditFormClassComponent,
    EditFormDrugComponent,
    AllDrugStockRequestComponent,
    AllPurchasesOrderComponent,
    AllInvoicesComponent,
    SalesReportComponent,
    Page404Component  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
