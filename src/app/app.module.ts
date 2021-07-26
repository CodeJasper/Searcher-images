import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListImagesComponent } from './components/list-images/list-images.component';
import { ImageItemListComponent } from './components/image-item-list/image-item-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { StoreModule } from '@ngrx/store';
import { imageReducer } from './store/image.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    ImageItemListComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forRoot({ image: imageReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
