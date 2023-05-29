import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	@Output() public submitted = new EventEmitter<string>();

	public searchTerm = '';

	public onSubmit() {
		this.submitted.emit(this.searchTerm);
	}

	public onInput(event: Event): void {
		this.searchTerm = (event.target as HTMLInputElement).value;
	}
}
