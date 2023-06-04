import { html } from '@microsoft/fast-element';
import StatusBadge from './statusBadge.definition.js';

const template = html<StatusBadge>`
  <div class="status-badge">
    ${(x): string => {
      if (x.status > 0) {
        return 'active';
      }
      if (x.status < 0) {
        return 'Error';
      }
      return 'Processing';
    }}
  </div>
`;

export default template;
