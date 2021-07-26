import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


/**
 *
 * Component to show an manage the filters of the list
 * @export
 * @class FiltersComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  defaultSelected:string="default"

  @Output() searchImagesEvent:EventEmitter<NgForm> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  enter($event:any, form:NgForm){
    if($event.keyCode == 13){
      this.searchImages(form)      
    }
  }

  searchImages(form:NgForm){        
    this.searchImagesEvent.emit(form)
  }
}
