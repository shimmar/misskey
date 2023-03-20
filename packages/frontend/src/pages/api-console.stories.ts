import { Meta, StoryObj } from '@storybook/vue3';
import api_console from './api-console.vue';
const meta = {
	title: 'pages/api-console',
	component: api_console,
} satisfies Meta<typeof api_console>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				api_console,
			},
			props: Object.keys(argTypes),
			template: '<api_console v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof api_console>;
export default meta;
