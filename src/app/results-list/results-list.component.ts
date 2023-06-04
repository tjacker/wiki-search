import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WikiSearchResult } from '../wiki-search.model';

@Component({
	selector: 'app-results-list',
	templateUrl: './results-list.component.html',
	styleUrls: ['./results-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ResultsListComponent {
	public readonly wikiBaseURL = 'https://en.wikipedia.org?curid=';

	@Input() public searchResults: WikiSearchResult[];
}
