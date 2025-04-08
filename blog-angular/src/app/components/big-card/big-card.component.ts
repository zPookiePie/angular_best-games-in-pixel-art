import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit {
  @Input() cardPhoto: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string = "";

  constructor() {}

  ngOnInit(): void {
      
  }
}
