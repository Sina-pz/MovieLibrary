import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieGroup } from 'src/app/models/movie-group';
import { LogicService } from 'src/app/service-layer/logic.service';

@Component({
  selector: 'app-group-row',
  templateUrl: './group-row.component.html',
  styleUrls: ['./group-row.component.css']
})
export class GroupRowComponent implements OnInit {

  @Input()
  group: MovieGroup;

  constructor(private logic: LogicService) {
   }

  ngOnInit(): void {
  }

  onClick() {
    if (this.group) {
      this.logic.updateFilteredItemsByGroupId(this.group.id);
    }
  }
}
