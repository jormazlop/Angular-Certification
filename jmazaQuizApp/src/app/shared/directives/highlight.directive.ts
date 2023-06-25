import { Directive, HostBinding, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[answerHighlight]'
})
export class HighlightDirective implements OnChanges, OnInit {

  @Input() selected = false;
  @Input() section = 'quiz';
  @Input() correctAnswer = false;

  @HostBinding('style.background-color') background = '';
  @HostBinding('style.color') color = '';
  @HostBinding('style.pointer-events') pointerEvents = 'auto';

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

}
