import { By } from "@angular/platform-browser";
import { QuestionComponent } from "../components/questions/question/question.component";
import { HighlightDirective } from "./highlight.directive";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { QuotePipe } from "../pipes/quote.pipe";
import { Answer } from "../models/answer.model";

let fixture: ComponentFixture<QuestionComponent>
let component: QuestionComponent;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ HighlightDirective, QuestionComponent, QuotePipe ]
  });

  fixture = TestBed.createComponent(QuestionComponent);
  component = fixture.componentInstance;

  const answer = new Answer();
  answer.answersList = ['1', '2', '3', '4', '5'];
  component.answer = answer;

  // initial binding
  fixture.detectChanges();
});

describe('TestDirective', () => {

  it('should have five highlighted elements', () => {
    const buttons = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    expect(buttons.length).toBe(5);
  });

  it('should color 1st <button> background to be "" on quiz section', () => {
    component.section = 'quiz';
    const buttons = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    const bgColor = buttons[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('');
  });

  it('should color 1st <button> background to be "rgb(25, 135, 84)" after click on quiz section', (() => {
    component.section = 'quiz';
    let buttonElement = fixture.debugElement.queryAll(By.directive(HighlightDirective))[0];
    buttonElement.nativeElement.click();
    fixture.detectChanges();
    const bgColor = buttonElement.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('rgb(25, 135, 84)');
  }));

  it('should color 1st <button> background to be "" after two click on quiz section', (() => {
    component.section = 'quiz';
    let buttonElement = fixture.debugElement.queryAll(By.directive(HighlightDirective))[0];
    buttonElement.nativeElement.click();
    buttonElement.nativeElement.click();
    fixture.detectChanges();
    const bgColor = buttonElement.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('');
  }));

  it('should color 1st <button> background to be "" after click on results section', (() => {
    component.section = 'results';
    let buttonElement = fixture.debugElement.queryAll(By.directive(HighlightDirective))[0];
    buttonElement.nativeElement.click();
    fixture.detectChanges();
    const bgColor = buttonElement.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('');
  }));
});
