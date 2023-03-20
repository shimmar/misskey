import { Meta, StoryObj } from '@storybook/vue3';
import about_federation from './about.federation.vue';
const meta = {
	title: 'pages/about.federation',
	component: about_federation,
} satisfies Meta<typeof about_federation>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				about_federation,
			},
			props: Object.keys(argTypes),
			template: '<about_federation v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof about_federation>;
export default meta;
