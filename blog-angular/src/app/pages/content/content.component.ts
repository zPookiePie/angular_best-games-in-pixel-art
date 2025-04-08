import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gameData } from '../../data/gameData';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  @Input() gamePhoto: string = "";  
  @Input() gameName: string = "";
  @Input() gameDescription: string = "";
  @Input() gameSmallPhoto: string = "";
  @Input() gamePlayDescription: string = "";
  @Input() gamePlayPhoto: string = "";
  @Input() textColor: string = "";
  @Input() bgColor: string = "";
  @Input() gradientColor: string = "";
  @Input() imageSizeClass: string = "";
  @Input() finalImage: string = "";
  @Input() linkForDownload: string = "";

  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
     const result = gameData.filter(article => article.id.toString() == id)[0]

     this.gamePhoto = result.gamePhoto
     this.gameName = result.gameName
     this.gameDescription = result.gameDescription
     this.gameSmallPhoto = result.gameSmallPhoto
     this.gamePlayDescription = result.gamePlayDescription
     this.gamePlayPhoto = result.gamePlayPhoto
     this.textColor = result.textColor
     this.bgColor = result.bgColor
     this.finalImage = result.finalImage
     this.imageSizeClass = result.imageSizeClass
     this.gradientColor = result.gradientColor
     this.linkForDownload = result.linkForDownload
  }
}
