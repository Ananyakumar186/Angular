import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  appList: any[] = [ {
    "url": "../assets/images/T.jpg"
 },
 {
    "url": '../assets/images/T1.jpg'
 } ];
  constructor() { }

  ngOnInit(): void {
  }

}
