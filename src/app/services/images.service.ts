import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../global_constants/globalConstants';
import { RequestImages } from '../models/RequestImages';


/** 
 * Service to manage request of images
 * @export
 * @class ImagesService
 */
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  constructor(private http:HttpClient) { }


  /**
   *
   * Requests the images
   * @param {string} page Current page of the list of images
   * @param {string} query Query to search images that match
   * @param {string} category Category to search images that match
   * @return {*}  {Observable<RequestImages>}
   * @memberof ImagesService
   */
  getImages(page:string, query:string, category:string):Observable<RequestImages>{
    const response = this.http.get<RequestImages>(baseUrl, {
      params:  new HttpParams().set("per_page", "36").set("page", page).set("q", query).set("category", category)
    });
    return response
  }
}
