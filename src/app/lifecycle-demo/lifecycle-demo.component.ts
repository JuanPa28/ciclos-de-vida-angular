import { CommonModule } from '@angular/common';
import { 
  Component, Input, OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements 
  OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy {

  @Input() data: string = "Hola Mundo";
  logMessages: string[] = [];

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
    this.logMessages = []; // ✅ Se limpia el log al destruirse
  }

  private log(hook: string) {
    this.logMessages.push(hook);
    console.log(hook);
  }

  changeData() {
    this.data = this.data === "Hola Mundo" ? "Propiedad Cambiada" : "Hola Mundo";
  }

  destroyComponent() {
    this.logMessages = []; // ✅ Se reinicia el log al eliminar el componente
    this.data = "Componente Eliminado";
  }
}
