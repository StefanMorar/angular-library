import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick() {
    this.clicked.emit();
  }
}
