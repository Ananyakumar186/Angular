import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-java',
  templateUrl: './adv-java.component.html',
  styleUrls: ['./adv-java.component.css']
})
export class AdvJavaComponent implements OnInit {
  id="Ae-r8hsbPUo"
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
