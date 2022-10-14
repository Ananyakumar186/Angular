import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpa',
  templateUrl: './rpa.component.html',
  styleUrls: ['./rpa.component.css']
})
export class RpaComponent implements OnInit {
  id="kg15yZiBGxE"
  playerVars = {
    cc_lang_pref : "en"
  };
  player: any;
  constructor() { }

  ngOnInit(): void {
  }
  savePlayer(player: any){
    this.player = player
}
  playVideo(){
  this.player.playVideo();
}

  pauseVideo(){
  this.player.pauseVideo();
}
}
