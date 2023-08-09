import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../../service/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  formData!: FormGroup;
  dateArray: Date[] = [new Date(), new Date()];
  eventId!: number | undefined;

  constructor(private formBuilder: FormBuilder,
              private eventService: EventService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private message: NzMessageService) {
  }
  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null],
      status: [null]
  });

    this.activeRoute.paramMap.subscribe(paramMap => {
      this.eventId = paramMap.get('id') ? Number(paramMap.get('id')) : undefined;
      if (this.eventId) {
        this.eventService.getDetail(this.eventId).subscribe(res => {
          this.formData.patchValue({...res});
          this.dateArray = [new Date(), new Date()];
        })
      }
    });
  }

  submitForm() {
    for (const i in this.formData.controls) {
      this.formData.controls[i].markAsDirty();
      this.formData.controls[i].updateValueAndValidity();
    }

    if (this.formData.invalid) {
      return;
    }

    // Collect data & call API
    const payload = this.formData.value;
    if (this.dateArray && this.dateArray.length > 0) {
      payload.startDateTime = this.dateArray[0];
    }
    if (this.dateArray && this.dateArray.length > 1) {
      payload.endDateTime = this.dateArray[1];
    }
    if (this.eventId) {
      this.eventService.updateEvent(this.eventId, payload)
        .subscribe(() => this.submitSuccess('Update event success!'));
    } else {
      this.eventService.createEvent(payload)
        .subscribe(() => this.submitSuccess('Create event success!'));
    }
  }

  submitSuccess(message: string) {
    this.message.success(message);
    this.router.navigate(['/app/events']);
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    if (!result) {
      return;
    }
    if (result instanceof Date) {
      this.dateArray.push(result);
    } else if (Array.isArray(result)) {
      this.dateArray = [...result];
    }
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

}
