import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form1Component } from './Components/form1/form1.component';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            Form1Component,
            FormsModule
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab2';
}
