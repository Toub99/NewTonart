import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendapiService } from '../backendapi.service';


@Component({
  selector: 'app-termin-modal',
  templateUrl: './termin-modal.component.html',
  styleUrls: ['./termin-modal.component.css']
})
export class TerminModalComponent implements OnInit {

  terminForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private backend: BackendapiService) { }

  ngOnInit() {
  }

  /**
   * addTermin
   */
  public addTermin() {
    const title = this.terminForm.value.title;
    const description = this.terminForm.value.description;
    this.backend.addTermin(title, description);

  }

}
