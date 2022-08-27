import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
})
export class ButtonLinkComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() path: string;

  constructor() {
    this.icon = 'bi bi-close';
    this.text = '';
    this.path = '';
  }
}
