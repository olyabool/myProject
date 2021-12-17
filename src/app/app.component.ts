import { Component, OnInit } from '@angular/core'
import { customMatcher } from './custom-matcher.guard'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isMobile: boolean
  public env = environment

  ngOnInit(): void {
    this.calculateVh()
    this.addEventListeners()
    customMatcher()
  }

  private addEventListeners(): void {
    window.addEventListener('resize', () => {
      this.calculateVh()
    })
  }

  private calculateVh(): void {
    let _vw = window.innerWidth * 0.01
    let _vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty('--vw', `${_vw}px`)
    environment._vw = _vw

    document.documentElement.style.setProperty('--vh', `${_vh}px`)
    environment._vh = _vh
  }
}
