import { html, fixture, expect } from '@open-wc/testing';
import StatusBadge from '../src/statusBadge/index.js';
import '../src/index.js';

describe('StatusBadge', () => {
  it('should have a default status of 0', async () => {
    const statusBadge = await fixture<StatusBadge>(
      html`<status-badge></status-badge>`
    );
    expect(statusBadge.status).to.equal(0);
  });

  it('should display "Processing" when status is 0', async () => {
    const statusBadge = await fixture<StatusBadge>(
      html`<status-badge></status-badge>`
    );
    const statusTextElement =
      statusBadge.shadowRoot?.querySelector('.status-badge');
    expect(statusTextElement?.innerHTML.trim()).to.equal('Processing');
  });

  it('should display "Complete" when status is 1', async () => {
    const statusBadge = await fixture<StatusBadge>(
      html`<status-badge status="1"></status-badge>`
    );
    const statusTextElement =
      statusBadge.shadowRoot?.querySelector('.status-badge');
    expect(statusTextElement?.innerHTML.trim()).to.equal('Complete');
  });

  it('should display "Error" when status is -1', async () => {
    const statusBadge = await fixture<StatusBadge>(
      html`<status-badge status="-1"></status-badge>`
    );
    const statusTextElement =
      statusBadge.shadowRoot?.querySelector('.status-badge');
    expect(statusTextElement?.innerHTML.trim()).to.equal('Error');
  });
});
