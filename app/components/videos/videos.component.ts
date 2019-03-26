import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videoGorillaz:string = "";

  constructor() { }

  ngOnInit() {
  }

  changeVideo(videoName:string){
    // switch(videoName){
    //   case "Clint Eastwood":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Clint Eastwood.mp4"
    //     console.log(this.videoRoute);
    //     break;
    //   case "Dare":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Dare.mp4"
    //     console.log(this.videoRoute);
    //     break;  
    //   case "Feel Good Inc.":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Feel Good Inc.mp4"
    //     break;
    //   case "Dirty Harry":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Dirty Harry.mp4"
    //     break;
    //   case "Humility":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Humility.mp4"
    //     break;
    //   case "Melancholy Hill":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Melancholy hill.mp4"
    //     break;
    //   case "Saturnz Barz":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Saturnz Barz.mp4"
    //     break;
    //   case "Tranz":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - Tranz.mp4"
    //     break;
    //   case "19-2000":
    //     this.videoRoute = "../../../assets/videos/Gorillaz-19200.mp4"
    //     break;
    //   case "Stylo":
    //     this.videoRoute = "../../../assets/videos/Gorillaz - stylo.mp4"
    //     break;
    // }
    this.videoGorillaz = videoName;
    console.log(this.videoGorillaz);
  }

}
