import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repair-payment-status',
  templateUrl: './repair-payment-status.component.html',
  styleUrls: ['./repair-payment-status.component.scss']
})
export class RepairPaymentStatusComponent implements OnInit {
  @Input() status: number;
  repairStatus = environment.status;
  constructor() { }

  ngOnInit(): void {
  }

}
