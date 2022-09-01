import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-toolbar-input-text',
  templateUrl: './toolbar-input-text.component.html'
})
export class ToolbarInputTextComponent implements OnInit {

  @Input() icon: string;
  @Input() value?: string;

  constructor() {
    this.icon = '';
  }

  ngOnInit(): void {
  }

}
