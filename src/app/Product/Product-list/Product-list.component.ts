import { Component, OnInit } from '@angular/core';

import { ProductService } from '../Product.service';

import { Product } from '../Product-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'Product-list',
  templateUrl: './Product-list.component.html',
  styleUrls: ['./Product-list.component.scss'],
})
export class ProductListComponent implements OnInit {


  

  ngOnInit() {
    // this.notes = this.noteService.getData()
  }


}
