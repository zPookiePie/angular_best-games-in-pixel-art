import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent implements OnInit{
  @Input() cardPhoto: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string = "";
  
  constructor() {}
  
  ngOnInit(): void {
        
  }
}
