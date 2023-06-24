import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[answerHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() selected = false;
  @Input() newQuestions = false;
  @Input() correctAnswer = false;

  @HostBinding('style.background-color') background = '';
  @HostBinding('style.color') color = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if(this.newQuestions) {
      if (this.selected) {
        this.background = '#198754';
        this.color = '#fff';
      } else {
        this.background = '';
        this.color = '';
      }
    } else {
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
