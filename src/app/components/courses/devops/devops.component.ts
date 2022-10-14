import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/ICourses';
@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {
  id="hQcFE0RD0cQ"
  id1="cI16T7GOPwM"
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
