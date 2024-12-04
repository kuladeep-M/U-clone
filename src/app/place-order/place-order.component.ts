import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  order = {
    customerName: '',
    address: '',
    product: '',
    quantity: 1,
    paymentMethod: 'Credit Card'
  };

  // Placeholder for handling form submission
  onSubmit() {
    // In a real application, this would be sent to a backend service
    console.log('Order Submitted:', this.order);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
