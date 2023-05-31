import { Component, Input } from '@angular/core';
import { WikiSearchResult } from '../wiki-search.model';

@Component({
	selector: 'app-results-list',
	templateUrl: './results-list.component.html',
	styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
	@Input() public searchResults: WikiSearchResult[];
}
