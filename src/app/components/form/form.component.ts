import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onHideForm = new EventEmitter<boolean>();
  emailForm! : FormGroup;
  submitted = false;
  formField = true;
  successMessage = false;

  private sendForm!: AngularFirestoreCollection<any>;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    ) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      aboutClient: ['', 
      [
        Validators.required,
        Validators.maxLength(300)
      ]
    ],
      reason: ['', Validators.required],
    });

    this.sendForm = this.firestore.collection('enquiry');
   
  }

  hideForm() {
    this.onHideForm.emit(false);
  }

  onSubmit(value:any) {
    this.submitted = true;

    if(this.emailForm.invalid) {
      return
    }

   // console.log(/*value*/);
    this.sendForm.add(value)
      .then(res => {
        this.formField = false;
        this.successMessage = true;
      })
      .catch(err => {
        console.log(err);
      }) 

      this.submitted = true;
  }
  

}
