import { Component, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { from, of, } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NgxSpinnerService } from "ngx-spinner";


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
  buttonText = "submit";

  private sendForm!: AngularFirestoreCollection<any>;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', 
        [
          Validators.required, 
          Validators.email
        ]
      ],
      aboutClient: ['', 
        [
          Validators.required,
          Validators.maxLength(300)
        ]
      ],
      reason: ['', Validators.required],
    });

    this.sendForm = this.firestore.collection('enquiry');

        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1200);   
  }

  hideForm() {
    this.onHideForm.emit(false);
  }

  onSubmit(value:any) {

    this.buttonText = "•••";

    if(this.emailForm.invalid) {
      this.buttonText = "error!";
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.buttonText = "submit";
      }, 1500); 
      this.submitted = false;
      return 
    } else {
        this.sendForm.add(value).then(res => {
          console.log(value);
          this.buttonText = "submit";
          this.submitted = true;
          this.formField = false;
          this.successMessage = true;
        }).catch(err => {
          console.log(err);
        });
      }
     // console.log(/*value*/);
    }
  
}
