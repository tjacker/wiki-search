import { Component } from '@angular/core';
import { WikiSearchResult } from './wiki-search.model';
import { WikiSearchService } from './wiki-search.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public searchResults: WikiSearchResult[];

	public constructor(private wikiSearchService: WikiSearchService) {}

	public onSubmit(value: string) {
		this.wikiSearchService
			.search(value)
			.subscribe((searchResults: WikiSearchResult[]) => (this.searchResults = searchResults));
	}
}
