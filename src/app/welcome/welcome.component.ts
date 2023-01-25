import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  implements OnInit{

  @ViewChild('name') namekey!: ElementRef;
  loader=true;
  ngOnInit():void{
    this.preloader();
  }
  startQuiz(){
    localStorage.setItem("name",this.namekey.nativeElement.value);
  }
  preloader(){
    setTimeout(()=>{
      this.loader=false;
     },1000);
     
  }
}
