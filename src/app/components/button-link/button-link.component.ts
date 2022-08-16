import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-button-link',
    templateUrl: './button-link.component.html'
})

export class ButtonLinkComponent {
    @Input() icon = 'bi bi-close';
    @Input() text = 'Unknown';
    @Input() path = '';
}
