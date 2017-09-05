import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '09/04/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '09/04/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Third Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '09/04/2017',
      image_url: 'http://google.com',
    }
  ]
}