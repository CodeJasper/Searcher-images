import { createAction, props } from "@ngrx/store";
import { Image } from "../models/Image";

export const setImage = createAction("setImage", 
    props<{image:Image}>()
);