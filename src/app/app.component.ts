import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // validateForm!: UntypedFormGroup;

  // submitForm(): void {
  //   if(this.validateForm.invalid){
  //     Object.values(this.validateForm.controls).forEach(formItem=>{
  //       formItem.markAsDirty();
  //       formItem.updateValueAndValidity({ onlySelf: true });
  //     })
  //   }else{
  //     console.log(this.validateForm.value);
  //   }
  // }

  // constructor(private formBuilder: UntypedFormBuilder){

  // }

  // ngOnInit(): void {
  //   this.validateForm = this.formBuilder.group({
  //     userName: [null, [Validators.required]],
  //     password: [null, [Validators.required]],
  //   });
  // }
}
