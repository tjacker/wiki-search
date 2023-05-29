import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [AppComponent, SearchBarComponent, ResultsListComponent],
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
