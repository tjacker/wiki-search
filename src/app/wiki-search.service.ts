import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { WikiSearchResult } from './wiki-search.model';

@Injectable({
	providedIn: 'root',
})
export class WikiSearchService {
	private readonly wikiBaseURL = 'https://en.wikipedia.org/w/api.php';

	public constructor(private httpClient: HttpClient) {}

	public search(term: string): Observable<WikiSearchResult[]> {
		if (!term) {
			return EMPTY;
		}
		return (
			this.httpClient
				.get(this.wikiBaseURL, {
					params: {
						action: 'query',
						format: 'json',
						list: 'search',
						utf8: '1',
						origin: '*',
						srsearch: term,
					},
				})
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.pipe(map(({ query }: any): WikiSearchResult[] => query?.search))
		);
	}
}
