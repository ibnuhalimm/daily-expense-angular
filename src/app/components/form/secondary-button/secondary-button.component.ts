import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'form-secondary-button',
    templateUrl: './secondary-button.component.html'
})

export class FormSecondaryButtonComponent {
    @Input() text: string = '';

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickEvent() {
        this.onClick.emit();
    }
}
