import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-java',
  templateUrl: './core-java.component.html',
  styleUrls: ['./core-java.component.css']
})
export class CoreJavaComponent implements OnInit {
  id="CFD9EFcNZTQ"
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
