import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
  testProp = new FormControl('')

  // Using Form Group
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.min(2)),
    lastName: new FormControl('')
  })

  /* Using FormBuilder
  profileTwo = this.fb.group({
    firstName: [''],
    lastName: [''],
  })
*/
  constructor(private router: Router, private fb: FormBuilder) {
  }

  modifyFormControl(): void {
    this.testProp.setValue('')
  }

}
