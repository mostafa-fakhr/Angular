import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent,StudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loginData:{name: string , age:string }[] = [];
  
  getData(e:any){
  // this.loginData=e;
  this.loginData.push(e)
  console.log(this.loginData); 
}
}
