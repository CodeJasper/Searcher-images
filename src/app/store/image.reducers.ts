import { createReducer, on } from "@ngrx/store";
import { Image } from "../models/Image";
import * as states from './image.actions'

export const initial = new Image()

const _imageReducer = createReducer(
    initial,
    on(states.setImage, (state, {image}) => image)
)

export function imageReducer(state:any, action:any){
    return _imageReducer(state, action)
}