import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

     public name: string = "";
     public questionList : any = [];
     public currentQuestion:number = 0;
     public points: number=0;
     counter=60;
     correctAnswer:number =0;
     incorrectAnswer:number =0;
     interval$:any;
     progress:String="0";
     isQuizCompleted : boolean = false;

   constructor(private questionService: QuestionService){}
   ngOnInit():void{
   this.name = localStorage.getItem("name")!;
   this.getAllQuestions();
   this.starcounter();
  
   }
   getAllQuestions(){
     this.questionService.getQuestionJson()
     .subscribe(res=>{
      this.questionList = res.questions
     })
   }
   nextquestion(){
      this.currentQuestion++;
   }
   previousquestion(){
    this.currentQuestion--;
   }
   answer(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted= true;
      this.stopcounter();
      
    }
    if(option.correct){
      this.points+=10;
     // this.points =this.points+10;
     this.currentQuestion++;
     this.correctAnswer++;
     this.resetcounter();
     this.getprogresspercent();
    }
    else{
      this.points-=10;
       this.currentQuestion++;
       this.incorrectAnswer++;
       this.resetcounter();
       this.getprogresspercent();
    }
   }
   starcounter(){
    this.interval$ = interval(1000) 
    .subscribe(val => {
     this.counter--;
    if(this.counter === 0)
    {
      this.currentQuestion++;
      this.counter=60;
      this.points-=10;
    }
    });
    setTimeout(() =>{
     this.interval$.unsubscribe();
    }, 600000);
   }
   stopcounter(){
  this.interval$.unsubscribe();
  this.counter=0;
   }
   resetcounter(){
    this.stopcounter();
    this.counter=60;
    this.starcounter();
   
   }
   getprogresspercent(){
    this.progress =((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
   }
  skip(){
     this.resetcounter();
     this.getprogresspercent();
     this.currentQuestion++;
     this.incorrectAnswer++;
     this.points-=10;
     
  }
 
}
