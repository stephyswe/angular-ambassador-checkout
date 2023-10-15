import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { User } from '../interfaces/user';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  code!: string
  user!: User
  products: Product[] = []
  quantities: number[] = [];

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];

    this.linkService.get(this.code).subscribe(
      res => {
        this.user = res.user
        this.products = res.products;
        this.products.forEach(p => {
          this.quantities[p.id] = 0;
        }); 
      }
    )
  }

  total(): number {
    return this.products.reduce((s, p) => s + p.price * this.quantities[p.id], 0);    
  }
}
