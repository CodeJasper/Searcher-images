import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { per_page, max_hits } from 'src/app/global_constants/globalConstants';


/**
 * Component to show the list of images
 * @export
 * @class ListImagesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})


export class ListImagesComponent implements OnInit {

  // Array of images that are shown in the template list of images
  images:Image[] = []

  // Current page of the list of images
  page:number = 1

  // Query to use in the request of images
  query:string = ""

  // Category to use in the request of images
  category:string = ""


  // Max pages allowed in the list
  maxPages:number = 1

  /**
   * Creates an instance of ListImagesComponent.
   * @param {ImagesService} imagesService Is the instance of the service to request images 
   * @memberof ListImagesComponent
   */
  constructor(private imagesService:ImagesService) { }

  ngOnInit(): void {
    this.getImages()
  }


  /**
   *
   * It request the images to imagesService and change the value of the variable "images"
   * @memberof ListImagesComponent
   */
  getImages(){
    this.imagesService.getImages(this.page.toString(), this.query, this.category).subscribe( response => {
      this.maxPages = max_hits / parseFloat(per_page)      
      response.hits.forEach( item => {
        const image = new Image();
        image.id = item.id;
        image.largeImageURL = item.largeImageURL;
        image.pageUrl = item.pageUrl;
        image.previewURL = item.previewURL;
        image.tags = item.tags;
        image.type = item.type;
        image.user = item.user;
        image.userImageURL = item.userImageURL;
        image.user_id = item.user_id;
        image.webformatURL = item.webformatURL;
        image.views = item.views;
        image.likes = item.likes;
        this.images.push(image)
      })      
      this.page++;
    })
  }

  /**
   *
   * Requests more images if the user scroll down the page
   * @memberof ListImagesComponent
   */
  onScroll(){
    if(this.page < this.maxPages){
      this.getImages()
    }
  }


}
