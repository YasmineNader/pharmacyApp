import { Component } from '@angular/core';
import { MainFrameService } from './services/main-frame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pharmacy';


  constructor(public Main_frame:MainFrameService) { }
}
