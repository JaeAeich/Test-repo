import { html, TemplateResult } from 'lit';
import '../src/untouched-app.js';

export default {
  title: 'UntouchedApp',
  component: 'untouched-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <untouched-app style="--untouched-app-background-color: ${backgroundColor}" .header=${header}></untouched-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
