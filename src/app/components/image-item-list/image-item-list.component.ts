import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { Store} from '@ngrx/store';
import * as actions from "../../store/image.actions"

@Component({
  selector: 'app-image-item-list',
  templateUrl: './image-item-list.component.html',
  styleUrls: ['./image-item-list.component.css']
})
export class ImageItemListComponent implements OnInit {
    

   // Image with the info to show in the template, it comes from list-images component
  @Input() image:Image = new Image();  

  constructor(private store:Store<{image:Image}>) { }

  ngOnInit(): void {  
  }

  openModalDetailImage(image:Image){    
    this.store.dispatch(actions.setImage({image:image}))
  }
}
