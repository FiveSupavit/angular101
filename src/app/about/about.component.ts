import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
                      '../assets/img/pic1.jpg',
                      '../assets/img/pic2.jpg',
                      '../assets/img/pic3.jpg'
                     ];
  }

}
