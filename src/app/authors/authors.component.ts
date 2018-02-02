import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

// decorator function
@Component({
  selector: 'authors',
  // template: '<h1>kinjal patel</h1>',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
