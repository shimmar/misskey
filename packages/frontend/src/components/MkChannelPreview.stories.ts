import { Meta, StoryObj } from '@storybook/vue3';
import MkChannelPreview from './MkChannelPreview.vue';
const meta = {
	title: 'components/MkChannelPreview',
	component: MkChannelPreview,
} satisfies Meta<typeof MkChannelPreview>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkChannelPreview,
			},
			props: Object.keys(argTypes),
			template: '<MkChannelPreview v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkChannelPreview>;
export default meta;
