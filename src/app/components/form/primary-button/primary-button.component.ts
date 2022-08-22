import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'form-primary-button',
    templateUrl: './primary-button.component.html'
})

export class FormPrimaryButtonComponent {
    @Input() text: string = '';

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickEvent() {
        this.onClick.emit();
    }
}
