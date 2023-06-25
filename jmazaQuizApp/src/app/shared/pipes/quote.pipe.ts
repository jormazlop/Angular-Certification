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
                               .replace(/&ldquo;/g, '"')
                               .replace(/&rdquo;/g, '"')
                               .replace(/&rsquo;/g, "'")
                               .replace(/&lsquo;/g, "'")
                               .replace(/&#039;/g, "'")
                               .replace(/&eacute;/g, "é")
                               .replace(/&aacute;/g, "á")
                               .replace(/&oacute;/g, "ó")
                               .replace(/&lrm;/g, '')
                               .replace(/&shy;/g, '');

    return clearQuote;
  }

}
