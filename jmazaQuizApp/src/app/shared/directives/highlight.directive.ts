import { Directive, HostBinding, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges, OnInit {

  @Input() correctAnswer = false;
  @Input() selected = false;
  @Input() section = 'quiz';

  @HostBinding('style.background-color') background = '';
  @HostBinding('style.color') color = '';
  @HostBinding('style.pointer-events') pointerEvents = 'auto';

  ngOnChanges(): void {
    if(this.section === 'quiz') {
      if (this.selected) {
        this.background = '#198754';
        this.color = '#fff';
      } else {
        this.background = '';
        this.color = '';
      }
    }
  }

  ngOnInit(): void {
    if(this.section === 'results') {
      this.pointerEvents = 'none';
      if (this.selected && this.correctAnswer) {
        this.background = '#198754';
        this.color = '#fff';
      } else if (this.selected && !this.correctAnswer) {
        this.background = 'red';
        this.color = '#fff';
      } else if (!this.selected && this.correctAnswer) {
        this.background = '#198754';
        this.color = '#fff';
      } else {
        this.background = '';
        this.color = '';
      }
    }
  }

}
