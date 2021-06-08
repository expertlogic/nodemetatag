import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Home / Angular SSR Implementing');
	this.meta.updateTag({ property: 'og:url', content: 'http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html' }); 
	this.meta.updateTag({ property: 'og:title', content: 'When Great Minds Don’t Think Alike' });
	this.meta.updateTag({ property: 'og:description', content: 'How much does culture influence creative thinking?' });
	this.meta.updateTag({ property: 'og:image', content: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' });
  
  }

}
