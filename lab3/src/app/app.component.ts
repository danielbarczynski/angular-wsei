import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formGroup!: FormGroup;
  invoiceForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: [''],
      email: [''],
      phoneNumbers: this.fb.array([
        this.fb.control('')
      ])
    });

    this.invoiceForm = this.fb.group({
      seller: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        nip: ['', Validators.required],
        bankAccount: ['', Validators.required]
      }),
      buyer: this.fb.group({
        name: [''],
        city: [''],
        address: [''],
        postalCode: [''],
        nip: ['']
      }),
      number: ['', Validators.required],
      issueDate: ['', Validators.required],
      saleDate: ['', Validators.required],
      paymentDeadline: ['', Validators.required]
    })
  };

  onSubmit(): any { 
    console.log();
  }

  get invoiceItems() {
    return this.invoiceForm.get('invoiceItems') as FormArray;
  }

  addInvoiceItem() {
    this.invoiceItems.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      netPrice: ['', Validators.required],
      vatRate: ['', Validators.required],
      netValue: ['', Validators.required],
      grossValue: ['', Validators.required]
    }));
  }
}
