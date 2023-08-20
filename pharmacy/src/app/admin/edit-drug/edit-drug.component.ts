import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
import { PharmacistService } from 'src/app/services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent {
  drugs:any
  constructor(public Main_frame:MainFrameService,private admin:AdminService,private _pharmacist:PharmacistService){
  }


  ngAfterViewInit(): void {

    this.getAllDrugs()

  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }
// get all users
getAllDrugs(){
  $('.animation').fadeIn();
  $('.adminT').css('display','none')
this._pharmacist.drugNames().subscribe(res=>{
  $('.animation').fadeOut(0,function(){

    $('.adminT').css('display','block')
  })
this.drugs = res


})

}

page:number=1
count:number = 0
tableSize :number =4

//pagination
onDataChange(event :any){
 this.page=event
}

}
