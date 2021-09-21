import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() primary = false;

  @Input() backgroundColor?: string;

  @Input() size: ButtonSize = ButtonSize.MEDIUM;

  @Input() text = 'Button';

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public get classes(): string[] {
    const mode = this.primary ? 'ui-button--primary' : 'ui-button--secondary';

    return ['ui-button', `ui-button--${this.size}`, mode];
  }

  handleButtonClick() {
    this.clicked.emit();
  }
}
