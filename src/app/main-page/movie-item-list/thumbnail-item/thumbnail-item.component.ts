import { LogicService } from './../../../service-layer/logic.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieItem } from 'src/app/models/movie-item';


@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.css']
})
export class ThumbnailItemComponent implements OnInit {

  @Input()
   movieItem: MovieItem;
  // @Output()
  // idSelect: EventEmitter<number> = new EventEmitter();

  constructor(private logic: LogicService) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.movieItem) {
      this.logic.selectedMovieItemsByGroupId(this.movieItem.groupId); // ba inke ntitiesh movieitem hast ama tu servis momkene nashnasanesh
      this.logic.removeMovieItem();
      // this.idSelect = this.movieItem.groupId;
      // this.idSelect.emit();
    }
  }

}
