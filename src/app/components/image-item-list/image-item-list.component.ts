import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-image-item-list',
  templateUrl: './image-item-list.component.html',
  styleUrls: ['./image-item-list.component.css']
})
export class ImageItemListComponent implements OnInit {
   
   // Image with the info to show in the template, it comes from list-images component
  @Input() image:Image = new Image();  

  constructor() { }

  ngOnInit(): void {

  }

}
