import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'my application';
	author = 'Jaider Anillo';

	count = 0;
	imgSource = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
	enabled = true;
}
