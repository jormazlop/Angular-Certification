import { QuotePipe } from "./quote.pipe";

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new QuotePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms &amp; to &', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Angular &amp; co')).toBe('Angular & co');
  });

  it('transforms &lt; to <', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('5 &lt; 7')).toBe('5 < 7');
  });

  it('transforms &gt; to >', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('9 &gt; 3')).toBe('9 > 3');
  });

  it('transforms &quot; to "', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Hello &quot;World&quot;')).toBe('Hello "World"');
  });

  it('transforms &ldquo; y &rdquo; to "', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Hello &ldquo;World&rdquo;')).toBe('Hello "World"');
  });

  it(`transforms &lsquo; y &rsquo; to ${"'"}`, () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Estas &lsquo;seguro&rsquo;?')).toBe(`Estas 'seguro'?`);
  });

  it(`transforms &#039; to ${"'"}`, () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('&#039;Adios&#039;')).toBe(`'Adios'`);
  });

  it('transforms &eacute; and &eacute; to é and á', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Exam&eacute;n pr&aacute;ctico')).toBe('Examén práctico');
  });

  it('transforms &oacute; to ó', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Rendimiento &oacute;ptimo')).toBe('Rendimiento óptimo');
  });

  it('clean &lrm; and &shy;', () => {
    const pipe = new QuotePipe();
    expect(pipe.transform('Tes&lrm;t An&shy;gular')).toBe('Test Angular');
  });

});
