import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InputPostDirective } from './inputPost.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [InputPostDirective],
  exports: [CommonModule, InputPostDirective],
})
export class SharedDirectivesModule {}
