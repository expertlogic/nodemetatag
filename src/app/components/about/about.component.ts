import { Component, OnInit } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

// make state key in state to store users
const STATE_KEY_USERS = makeStateKey('users');

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public users: any = [];

    constructor(
        private title: Title,
        private meta: Meta,
        private http: HttpClient,
        private state: TransferState
    ) { }

    ngOnInit() {
        this.title.setTitle('About Angular SSR title update'); 

        this.users = this.state.get(STATE_KEY_USERS, <any>[]);
        if (this.users.length == 0) {
            this.http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe((users) => {
                this.users = users;
                this.state.set(STATE_KEY_USERS, <any>users);
				 this.title.setTitle( users[0].name);
				   this.meta.updateTag({
					'description':users[0].address.street
				});
				this.meta.updateTag({ property: 'og:url', content: 'http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html' }); 
				this.meta.updateTag({ property: 'og:title', content: users[0].email });
				this.meta.updateTag({ property: 'og:description', content: 'How much does culture influence creative thinking?' });
				this.meta.updateTag({ property: 'og:image', content: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' });

							
            }, (err) => {
                console.log(err);
            });
        }
    }
}