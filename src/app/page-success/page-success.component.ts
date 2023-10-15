import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-success',
  templateUrl: './page-success.component.html',
  styleUrls: ['./page-success.component.css']
})
export class PageSuccessComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const source = this.route.snapshot.queryParams['source'];

    this.orderService.confirm({ source })
      .subscribe(res => console.log(res));
  }
}
