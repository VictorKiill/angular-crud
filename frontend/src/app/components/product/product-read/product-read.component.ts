import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<Product>;

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  ngAfterViewInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
