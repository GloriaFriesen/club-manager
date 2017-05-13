import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  goToDetailPage(clickedPlayer) {
     this.router.navigate(['players', clickedPlayer.$key]);
   };
}
