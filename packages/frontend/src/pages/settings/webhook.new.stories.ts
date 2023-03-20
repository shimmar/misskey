import { Meta, StoryObj } from '@storybook/vue3';
import webhook_new from './webhook.new.vue';
const meta = {
	title: 'pages/settings/webhook.new',
	component: webhook_new,
} satisfies Meta<typeof webhook_new>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				webhook_new,
			},
			props: Object.keys(argTypes),
			template: '<webhook_new v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof webhook_new>;
export default meta;
