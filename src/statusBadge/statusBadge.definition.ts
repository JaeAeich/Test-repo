import { FASTElement, customElement, attr } from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import template from './statusBadge.template.js';
import styles from './statusBadge.styles.js';

@customElement({
  name: 'status-badge',
  template,
  styles,
})
export default class StatusBadge extends FASTElement {
  @attr status = 0;

  statusChanged(): void {
    const currElement = this.$fastController.element;
    const specialColor = DesignToken.create<string>('special-color');
    if (this.status > 0) {
      specialColor.setValueFor(currElement, '#28a745');
    } else if (this.status < 0) {
      specialColor.setValueFor(currElement, '#dc3545');
    } else {
      specialColor.setValueFor(currElement, '#007bff');
    }
  }
}
