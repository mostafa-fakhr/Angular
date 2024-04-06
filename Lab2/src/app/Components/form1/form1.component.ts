import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [
           FormsModule 
          ],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
    name="";
    imageName=[
    "assets/Images/1.jpg",
    "assets/Images/2.jpg",
    "assets/Images/3.jpg",
    "assets/Images/4.jpg",
    "assets/Images/5.jpg"
    ]
    
    currentIndex=0;
    interval:any

    reset(){
      this.name="";
    }

    nextImage(){
        this.currentIndex++;

        if(this.currentIndex>=this.imageName.length){
          this.currentIndex=this.imageName.length-1;
        }
      }

      prevImage(){
        if(this.currentIndex==0){
          this.currentIndex=0
        }else{
          this.currentIndex--
        }
      }
      
      slideShow(){
       this.interval= setInterval(()=>{this.currentIndex++;
          if(this.currentIndex>=this.imageName.length){
            this.currentIndex=0;
          }}, 1000)  
      }
      
      stop(){
        clearInterval(this.interval)
      }

    }

