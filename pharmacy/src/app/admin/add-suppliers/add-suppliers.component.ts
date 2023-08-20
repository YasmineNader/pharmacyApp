import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css']
})
export class AddSuppliersComponent {
  constructor(public Main_frame:MainFrameService,private admin:AdminService){}
  ngOnInit(): void {
    this.Main_frame.hide()
  }




  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  suppliers=new FormGroup({
    supplier_first_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    supplier_middle_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    supplier_last_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    supplier_aphone1:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    supplier_address:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]),
    


  })

  addSupplier(){

    this.isSubmitted=true
    if(this.suppliers.valid){

      this.admin.addSupplier(this.suppliers.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg={"message":"Already Exist"}

        },()=>{
          this.msg={"message":"Supplier Added successfully"}
         } )

}

    
  }

   // validation error return 
   get supplier_first_name(){return this.suppliers.get('supplier_first_name')}
   get supplier_last_name(){return this.suppliers.get('supplier_last_name')}
   get supplier_middle_name(){return this.suppliers.get('supplier_middle_name')}
   get supplier_aphone1(){return this.suppliers.get('supplier_aphone1')}
   get supplier_address(){return this.suppliers.get('supplier_address')}
}
