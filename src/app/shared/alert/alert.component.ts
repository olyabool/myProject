import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { environment } from 'src/environments/environment'

import { AlertService } from '../services/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000

  public text: string
  public type = 'success'
  public env = environment
  alertSub: Subscription

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSub = this.alertService.alert$.subscribe((alert) => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy(): void {
    if (this.alertSub) {
      this.alertSub.unsubscribe()
    }
  }
}
