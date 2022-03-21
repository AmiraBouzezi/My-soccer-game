import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id :any;
  matches:any;
  match:any;
  resOne:string;
  resTwo:string;
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.matches=JSON.parse(localStorage.getItem("matches") || "[]");
    for (let i = 0; i < this.matches.length; i++) {
     if (this.matches[i].id==this.id) {
        this.match=this.matches[i];
     }
      
    }

    
      if (this.match.scoreOne > this.match.scoreTwo){
       
        this.resOne='win';
        this.resTwo='lose';
      }
      else if (this.match.scoreOne < this.match.scoreTwo){
        this.resOne='lose';
        this.resTwo='win';
   
      }
        else{
          this.resOne='equal';
          this.resTwo='equal';
        }
      }
      }
    
    
      
    
  
  



