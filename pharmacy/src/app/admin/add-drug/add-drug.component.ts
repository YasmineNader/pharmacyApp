import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
import { PharmacistService } from 'src/app/services/pharmacist.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent {
  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  categoryInfo:any
  drug=new FormGroup({
    en_brand_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    ar_brand_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    chemical_name:new FormControl('',[Validators.required]),
    national_code:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(4)]),
    class_id:new FormControl('',[Validators.required]),
    manufacture:new FormControl('',[Validators.required]),
    drug_dose:new FormControl('',[Validators.required]),
    drug_usage:new FormControl('',[Validators.required]),
    main_uom:new FormControl('',[Validators.required]),
    small_uom:new FormControl('',[Validators.required]),
  })
  
  constructor(public Main_frame:MainFrameService,private admin:AdminService,private _pharmacist:PharmacistService){
    this.drug.controls["class_id"].setValue("1");

    this.drugcategory()
  }
  ngOnInit(): void {
    this.Main_frame.hide()
  }

  //info about categories
  drugcategory(){
  
    this._pharmacist.drugCategories().subscribe(res=>{
    
    this.categoryInfo = res
    
    })
    
    
    
    
    }

  addDrug(){
    this.isSubmitted=true
    if(this.drug.valid){

      this.admin.addDrug(this.drug.value).subscribe(res=>{
        
    this.Message= res.message
        console.log(res)
      },(error)=>{
        this.msg= {'message':"Already Exist"}

        },()=>{
          this.msg={"message":"Drug Added successfully"}
         } )

}
}
  // validation error return 
  get en_brand_name(){return this.drug.get('en_brand_name')}
  get ar_brand_name(){return this.drug.get('ar_brand_name')}
  get chemical_name(){return this.drug.get('chemical_name')}
  get national_code(){return this.drug.get('national_code')}
  get manufacture(){return this.drug.get('manufacture')}
  get class_id(){return this.drug.get('class_id')}
  get drug_dose(){return this.drug.get('drug_dose')}  
  get drug_usage(){return this.drug.get('drug_usage')}
  get main_uom(){return this.drug.get('main_uom')}  
  get small_uom(){return this.drug.get('small_uom')}  
    
  

}
