import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appExpandableCell]',
  exportAs: 'appExpandableCell',
})
export class ExpandableCellDirective {
  @Input('appExpandableCell') maxLength!: number;
  @Input() expanded: boolean = false;

  exceedsLimit: boolean = false;
  truncatedText: string = '';
  private _originalText: string = '';

  @Input()
  set originalText(value: string) {
    this._originalText = value;
    this.updateText();
  }

  get originalText(): string {
    return this._originalText;
  }

  private updateText(): void {
    this.truncatedText = this._originalText;
    if (this._originalText.length > this.maxLength) {
      this.exceedsLimit = true;
      this.truncatedText = this._originalText.slice(0, this.maxLength);
    } else {
      this.exceedsLimit = false;
    }
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
