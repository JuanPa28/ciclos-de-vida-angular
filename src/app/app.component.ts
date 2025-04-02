import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LifecycleDemoComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecycle Demo';
  showComponent = true;

  alternarComponente() {
    this.showComponent = !this.showComponent;
  }
}
