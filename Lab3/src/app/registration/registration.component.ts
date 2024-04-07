import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

name="";
age="";
@Output() myEvent = new EventEmitter();

students: { name: string, age: string } = { name: this.name, age: this.age };


Add(){
  if((+this.age<30 || +this.age<10) && (+this.name.length > 3)  ){
   this.students = {name: this.name , age: this.age} 
 this.myEvent.emit(this.students);
}
}
}
