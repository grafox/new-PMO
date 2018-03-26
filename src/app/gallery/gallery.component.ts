import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [
    { img: "https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/images%2F5-3-201801.jpg?alt=media&token=4e3df4ce-1684-4ee1-b432-54f378d9cb4f", thumb: "https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/thumbnail%2Fthumbnail_5-3-201801.jpg?alt=media&token=070ae0e9-86bc-460d-9b7c-6d197c8b424b", description: "Image 1" },
    { img: "https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/images%2F4-3-201802.jpg?alt=media&token=8ed21494-6c7f-4775-8fc8-a9cf4520f987", thumb: "https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/thumbnail%2Fthumbnail_4-3-201802.jpg?alt=media&token=f4c17826-9d8e-446d-8986-692d4c739a7c", description: "Image 2" }
]
}
