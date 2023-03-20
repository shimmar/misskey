import { Meta, StoryObj } from '@storybook/vue3';
import MkModalPageWindow from './MkModalPageWindow.vue';
const meta = {
	title: 'components/MkModalPageWindow',
	component: MkModalPageWindow,
} satisfies Meta<typeof MkModalPageWindow>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkModalPageWindow,
			},
			props: Object.keys(argTypes),
			template: '<MkModalPageWindow v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkModalPageWindow>;
export default meta;
