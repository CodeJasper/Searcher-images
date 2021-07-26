import { Image } from "./Image";

/**
 * Format of an request of images
 * @export
 * @class RequestImages
 */
export class RequestImages{
    hits:Array<Image>= [];
    total:number= 0;
    totalHits:number= 0;
}