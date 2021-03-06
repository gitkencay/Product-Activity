import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Product} from './Product-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewProduct {
  title: string;
  description: 0;
  price: number;
}

@Injectable()
export class ProductService {
  ProductCollection: AngularFirestoreCollection<Product>;
  ProductDocument:   AngularFirestoreDocument<Product>;
}
