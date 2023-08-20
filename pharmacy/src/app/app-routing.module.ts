import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PurchaseRequestsComponent } from './purchase-requests/purchase-requests.component';
import { PurchaseRequestDetailsComponent } from './purchase-request-details/purchase-request-details.component';
import { DispensingCartComponent } from './dispensing-cart/dispensing-cart.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DrugCategoriesComponent } from './drug-categories/drug-categories.component';
import { StockRequestComponent } from './stock-request/stock-request.component';
import { StockRequestDetailsComponent } from './stock-request-details/stock-request-details.component';
import { StockCartComponent } from './stock-cart/stock-cart.component';
import { AdminNavbarComponent } from './shared/admin/admin-navbar/admin-navbar.component';
import { PurchaseCartComponent } from './purchase-cart/purchase-cart.component';
import { PurchaseInvoicingComponent } from './purchase-invoicing/purchase-invoicing.component';
import { PharmacistGuard } from './guards/pharmacist.guard';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AddSuppliersComponent } from './admin/add-suppliers/add-suppliers.component';
import { EditSuppliersComponent } from './admin/edit-suppliers/edit-suppliers.component';
import { AddStoreComponent } from './admin/add-store/add-store.component';
import { EditStoreComponent } from './admin/edit-store/edit-store.component';
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
import { PurchaserGuard } from './guards/purchaser.guard';
import { StokkeeperGuard } from './guards/stokkeeper.guard';
import { AdminGuard } from './guards/admin.guard';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:"",component:LandingPageComponent},
  {path:"home",component:HomePageComponent,canActivate:[PharmacistGuard]},
  {path:"drugDetails/:drugID",component:DrugDetailsComponent,canActivate:[PharmacistGuard]},
  {path:"category/:category/:categoryName",component:DrugCategoriesComponent,canActivate:[PharmacistGuard]},
  {path:"search",component:SearchPageComponent,canActivate:[PharmacistGuard]},
  {path:"search/:category/:searchName",component:SearchPageComponent,canActivate:[PharmacistGuard]},
  {path:"dispensing/cart",component:DispensingCartComponent,canActivate:[PharmacistGuard]},
  {path:"purchase",component:PurchaseRequestsComponent,canActivate:[PurchaserGuard]},
  {path:"stock/request",component:StockRequestComponent,canActivate:[StokkeeperGuard]},
  {path:"stock/cart",component:StockCartComponent,canActivate:[PharmacistGuard]},
  {path:"stock/requestDetails/:RequestID",component:StockRequestDetailsComponent,canActivate:[StokkeeperGuard]},
  {path:"purchase/cart",component:PurchaseCartComponent,canActivate:[PurchaserGuard]},
  {path:"purchase/request",component:PurchaseRequestsComponent,canActivate:[PurchaserGuard]},
  {path:"purchase/requestDetails",component:PurchaseRequestDetailsComponent,canActivate:[PurchaserGuard]},
  {path:"invoicing/:orderId",component:PurchaseInvoicingComponent,canActivate:[PurchaserGuard]},
  // {path:"admin",component:AdminHomeComponent},
  {path:"addUser",component:AddUserComponent,canActivate:[AdminGuard]},
  {path:"EditUser",component:EditUserComponent,canActivate:[AdminGuard]},
  {path:"addSupplier",component:AddSuppliersComponent,canActivate:[AdminGuard]},
  {path:"editSupplier",component:EditSuppliersComponent,canActivate:[AdminGuard]},
  {path:"addStore",component:AddStoreComponent,canActivate:[AdminGuard]},
  {path:"editStore",component:EditStoreComponent,canActivate:[AdminGuard]},
  {path:"addUserStore",component:AddUserStoreComponent,canActivate:[AdminGuard]},
  {path:"editUserStore",component:EditUserStoreComponent,canActivate:[AdminGuard]},
  {path:"addDrug",component:AddDrugComponent,canActivate:[AdminGuard]},
  {path:"editdrug/:categoryId",component:EditFormDrugComponent,canActivate:[AdminGuard]},
  {path:"editClass/:categoryId",component:EditFormClassComponent,canActivate:[AdminGuard]},
  {path:"editDrug",component:EditDrugComponent,canActivate:[AdminGuard]},
  {path:"addClass",component:AddClassComponent,canActivate:[AdminGuard]},
  {path:"editClass",component:EditClassComponent,canActivate:[AdminGuard]},
  {path:"allTransfer",component:AllTransferComponent,canActivate:[StokkeeperGuard]},
  {path:"requestedDrugs",component:AllDrugStockRequestComponent,canActivate:[StokkeeperGuard]},
  // {path:"report/sales",component:SalesReportComponent},
  // {path:"nav",component:AdminNavbarComponent},
  {path:"allPurchasesOrder",component:AllPurchasesOrderComponent,canActivate:[PurchaserGuard]},
  {path:"allinvoices",component:AllInvoicesComponent,canActivate:[PurchaserGuard]},
  // {path:"login",component:LoginComponent},
  {path:"**",component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
