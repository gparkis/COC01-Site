import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public portfolio: Portfolio;
  public ngOnInit(): void{
    this.portfolio = {
      firstName: 'Cup',
      middleName: 'Of',
      lastName: 'Code01',
      subheading: 'FullStack Application Development',
      socialMedia: [],
      introduction: 'Every Problem Encapsulates A Potential Solution Waiting To Be Discovered',
      changeLog: [],
      updates: [],
      speakerBio: 'I can speak where you like'
    }
  }

}
