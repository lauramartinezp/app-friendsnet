import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  firsName = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'firstName': this.firsName,
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onsubmitModelBased() {

    console.log('model-based from submitted');
    console.log(this.form);

  }

}
