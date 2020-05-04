import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogicService } from 'src/app/service-layer/logic.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
   text: string;

  @Output()
  buttonClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClick.emit();
       }
}
