import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainFrameService {

  visible: boolean;

  constructor() { this.visible = true; }
  
    show() { this.visible = true; }
    hide() { this.visible = false; }
    
}
