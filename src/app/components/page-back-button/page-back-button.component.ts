import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-back-button',
  templateUrl: './page-back-button.component.html',
})
export class PageBackButtonComponent {
  @Input() path = '';
}
