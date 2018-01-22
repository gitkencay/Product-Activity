import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './Product.service';

import { ProductListComponent } from './Product-list/Product-list.component';
import { ProductDetailComponent } from './Product-detail/product-detail.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [ProductService],
})
export class ProductModule { }
