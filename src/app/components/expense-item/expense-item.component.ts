import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-expense-item',
    templateUrl: './expense-item.component.html'
})

export class ExpenseItemComponent {
    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickEvent() {
        this.onClick.emit();
    }
}
