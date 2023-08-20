import { Component, OnInit } from '@angular/core';
import { MainFrameService } from '../services/main-frame.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private main:MainFrameService){}

  ngOnInit(): void {


    this.main.hide()
  }



}
