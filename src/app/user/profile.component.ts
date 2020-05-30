import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  ngOnInit(): void {
    //In order for the FormControl and FormGroup objects to work with
    //the HTML template, the "ReactiveFormsModule" should be imported
    //within the Angular module for this component.

    //Validators.required makes it so that the HTML elements that correspond to these values become required.
    //These will determine whether the "profileForm" object is valid or not, as seen in the "saveProfile" method.

    //Validators.pattern checks to see if the value entered starts with a letter (from a to z, lowercase or capital),
    //and is followed by any amount of letters.

    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required,
        Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues: any): void{
    if(this.profileForm.valid)
    {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }

  }
  cancel(): void{
    this.router.navigate(['events']);
  }

  validateFirstName(): boolean{
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean{
    return this.lastName.valid || this.lastName.untouched;
  }

}
