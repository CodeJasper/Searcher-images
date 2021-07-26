import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imageToShow: Image = new Image();
  image$:Observable<Image> = new Observable<Image>();

  constructor(private store:Store<{image:Image}>) { }

  ngOnInit(): void {
    this.image$ = this.store.pipe(select("image"))  
    this.image$.forEach(item => {
      this.imageToShow.id = item.id
      this.imageToShow.largeImageURL = item.largeImageURL
      this.imageToShow.pageUrl = item.pageUrl
      this.imageToShow.previewURL = item.previewURL
      this.imageToShow.tags = item.tags
      this.imageToShow.type = item.type
      this.imageToShow.user = item.user
      this.imageToShow.userImageURL = item.userImageURL
      this.imageToShow.user_id = item.user_id
      this.imageToShow.webformatURL = item.webformatURL
      this.imageToShow.views = item.views
      this.imageToShow.likes = item.likes
      
    })
  }

}
