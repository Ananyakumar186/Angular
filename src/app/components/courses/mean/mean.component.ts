import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {
 id="V-CeWkz1MNQ"
 id2="BO67e3QU9dU"
 id3="P3R-8jj3S7U"
 id4="185uAxYz1dU"
 id5="aOkAx1jZokc"
 id6="7YK4pJZG0oA"
 id7="z6Le35tGFRg"
 id8="PUvPNdVphtQ"
 id9="NPyFYsZb2gE"
 id10="Fa2imVkcdqs"
 id11="_MyUWj-AT8s"
 id12="aACLcXR0kls"
 id13="kiImo42Nfs0"
 id14="XM-1lNLuJjg"
 id15="HuC9YebfPMQ"
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
