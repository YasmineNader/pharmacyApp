import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MainFrameService } from 'src/app/services/main-frame.service';
import { PharmacistService } from 'src/app/services/pharmacist.service';
declare var $: any

@Component({
  selector: 'app-edit-form-drug',
  templateUrl: './edit-form-drug.component.html',
  styleUrls: ['./edit-form-drug.component.css']
})
export class EditFormDrugComponent {

  constructor(public Main_frame:MainFrameService,private admin:AdminService,private active:ActivatedRoute,private _pharmacist:PharmacistService){
  }

  ngAfterViewInit(): void {
   this.drugcategory()

    this.oneDrug()

  }
  drugId = this.active.snapshot.paramMap.get('categoryId')

  isSubmitted:boolean=false
  msg:any=null
  Message:any =null
  categoryInfo:any

  singelData:any
  editDrug=new FormGroup({
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


  ngOnInit(): void {
    this.Main_frame.hide()
  }
    //info about categories
    drugcategory(){
  
      this._pharmacist.drugCategories().subscribe(res=>{
      
      this.categoryInfo = res
      
      })
      
      
      
      
      }

// get values to the form  
  formValues(){
    this.editDrug.get('en_brand_name')?.setValue(this.singelData.en_brand_name);
    this.editDrug.get('ar_brand_name')?.setValue(this.singelData.ar_brand_name);
    this.editDrug.get('chemical_name')?.setValue(this.singelData.chemical_name);
    this.editDrug.get('national_code')?.setValue(this.singelData.national_code);
    this.editDrug.get('class_id')?.setValue(this.singelData.class_id);
    this.editDrug.get('manufacture')?.setValue(this.singelData.manufacture);
    this.editDrug.get('drug_dose')?.setValue(this.singelData.drug_dose);
    this.editDrug.get('drug_usage')?.setValue(this.singelData.drug_usage);
    this.editDrug.get('main_uom')?.setValue(this.singelData.main_uom);
    this.editDrug.get('small_uom')?.setValue(this.singelData.small_uom);
  
  }
  //get one drug  to update
oneDrug(){
  $('.animation').fadeIn();
$('.adminT').css('display','none')
this.admin.getOneDrug(this.drugId).subscribe(res=>{
  $('.animation').fadeOut(0,function(){

    $('.adminT').css('display','block')
  })
this.singelData = res
this.formValues()
})
  }

  EditDrug(){

    this.isSubmitted=true
    if(this.editDrug.valid){
      this.admin.editDrug(this.editDrug.value,this.drugId).subscribe(res=>{



      },(error)=>{
        this.msg= this.Message


        },()=>{
          this.msg={"message":"Change done"}
         } )


    }

  }

   // validation error return 
   get en_brand_name(){return this.editDrug.get('en_brand_name')}
   get ar_brand_name(){return this.editDrug.get('ar_brand_name')}
   get chemical_name(){return this.editDrug.get('chemical_name')}
   get national_code(){return this.editDrug.get('national_code')}
   get manufacture(){return this.editDrug.get('manufacture')}
   get class_id(){return this.editDrug.get('class_id')}
   get drug_dose(){return this.editDrug.get('drug_dose')}  
   get drug_usage(){return this.editDrug.get('drug_usage')}
   get main_uom(){return this.editDrug.get('main_uom')}  
   get small_uom(){return this.editDrug.get('small_uom')}  
     
}
