import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceQuote'
})
export class QuotePipe implements PipeTransform {

  transform(question: string): unknown {
    const clearQuote = question.replace(/&amp;/g, '&')
                               .replace(/&lt;/g, '<')
                               .replace(/&gt;/g, '>')
                               .replace(/&quot;/g, '"')
                               .replace(/&#039;/g, "'");

    return clearQuote;
  }

}
