import { Component } from '@angular/core';
import { MetafrenzyService } from './metafrenzy/metafrenzy.service';

@Component({
    selector: 'app-root',
    template: `
        <button [routerLink]="['/']">Start</button> <button [routerLink]="['/home']">Home</button>
        <br><br>
        {{ title }}
        <br><br>
        {{ description }}
    `,
})
export class AppComponent {

    title: string;
    description: string;

    constructor(private readonly metafrenzyService: MetafrenzyService) {
        // Set the title
        this.metafrenzyService.setTitle('ngx-metafrenzy | App Demo');

        this.title = this.metafrenzyService.getTitle();

        // Set the meta description
        this.metafrenzyService.setMetaTag('description', 'This is a demo of ngx-metafrenzy');

        this.description = this.metafrenzyService.getMetaTag('name=description');

        // Set the open graph title
        this.metafrenzyService.setMetaTag('og:title', 'ngx-metafrenzy | App Demo');

        // Set the meta charset
        this.metafrenzyService.setMetaCharsetTag('UTF-8');

        // Set the canonical link
        this.metafrenzyService.setLinkTag({
            rel: 'canonical',
            href: 'http://localhost'
        });
        // Or simply set the canonical with this helper function:
        // this.metafrenzyService.setCanonical('http://localhost2');

        // Set the robots link
        this.metafrenzyService.setLinkTag({
            name: 'robots',
            content: 'noindex, nofollow'
        });
    }

}
