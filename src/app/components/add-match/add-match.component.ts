import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {}
  formMatch: FormGroup;
  id: any;
  title: string = 'Add';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formMatch = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }
  addMatch() {
    console.log('match', this.match);
     let matches = JSON.parse(localStorage.getItem('matches') || '[]');
     let id = JSON.parse(localStorage.getItem('matchId') || '1');
     this.match.id = id;
     matches.push(this.match);
     localStorage.setItem('matches', JSON.stringify(matches));
     localStorage.setItem('matchId', id + 1)
  }

}
