import { environment } from '../environments/environment'

export function customMatcher() {
  environment.isMobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    )
  document
    .getElementsByTagName('html')[0]
    .setAttribute('isMobile', environment.isMobile + '')
}
