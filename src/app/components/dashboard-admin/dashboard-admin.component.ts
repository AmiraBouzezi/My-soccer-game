import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  matches:any={};
  players:any={};

  constructor(private router:Router) { }

  ngOnInit() {
    this.matches=JSON.parse(localStorage.getItem("matches") || "[]");
    this.players=JSON.parse(localStorage.getItem("players") || "[]");
    
  }
  deleteMatch(id){
    let pos;
    for (let i=0;i<this.matches.length;i++)
    {
      if (this.matches[i].id==id){
        pos=i;
      }
    }
    this.matches.splice(pos,1);
    localStorage.setItem("users",JSON.stringify(this.matches));
  }

  displayMatch(id){
    
   this.router.navigate([`displayMatch/${id}`]);
 }
 deletePlayer(id){
  let pos;
  for (let i=0;i<this.players.length;i++)
  {
    if (this.players[i].id==id){
      pos=i;
    }
  }
  this.players.splice(pos,1);
  localStorage.setItem("players",JSON.stringify(this.players));
}
displayPlayer(id){
    
  this.router.navigate([`displayPlayer/${id}`]);
}
editMatch(id){
  let user;
  for (let i =0;i<this.matches.length;i++){
  if (this.matches[i].id==id){
    user= this.matches[i];
  }
}
if(user.role=="admin" ){
  this.router.navigate([`editMatch/${id}`]);

}


}
}
