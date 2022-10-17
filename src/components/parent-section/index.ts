import { CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { customElement, property } from 'lit/decorators';
import { parent_section_card_css } from './css';

@customElement('parent-section-card')
export class ParentSectionCard extends LitElement {
  @property({ attribute: false })
  id!: string;

  /**
   * @returns CSSResultGroup
   */
  static get styles(): CSSResultGroup {
    // CSS goes here...
    return parent_section_card_css;
  }

  protected render(): TemplateResult | void {
    return html`<div class="parent-section-card">${this.id}</div>`;
  }
}
