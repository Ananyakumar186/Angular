import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
export interface Links {
  template: string;
}


@Component({
  selector: 'app-navcaro',
  templateUrl: './navcaro.component.html',
  styleUrls: ['./navcaro.component.css']
})
export class NavcaroComponent implements OnInit {
  search : string ="";
  constructor() { }

  ngOnInit(): void {
    

  }

}
