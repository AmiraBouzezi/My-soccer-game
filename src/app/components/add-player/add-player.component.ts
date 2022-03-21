import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  formPlayer: FormGroup;
  player: any = {};
  id:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formPlayer = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      post: [''],
      team: [''],
      age: [''],
      nTshirt: ['']
    })

  }
  addPlayer() {
    console.log('player', this.player);
    

  let players = JSON.parse(localStorage.getItem('players') || '[]');
     let id = JSON.parse(localStorage.getItem('playerId') || '1');
     this.player.id = id;
     players.push(this.player);
     localStorage.setItem('players', JSON.stringify(players));
     localStorage.setItem('playerId', id + 1)

  }

}
