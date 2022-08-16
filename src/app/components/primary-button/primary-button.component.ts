import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-primary-button',
    templateUrl: './primary-button.component.html'
})

export class PrimaryButtonComponent {
    @Input() text: string = '';

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickEvent() {
        this.onClick.emit();
    }
}
