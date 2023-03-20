import { Meta, StoryObj } from '@storybook/vue3';
import MkModal from './MkModal.vue';
const meta = {
	title: 'components/MkModal',
	component: MkModal,
} satisfies Meta<typeof MkModal>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkModal,
			},
			props: Object.keys(argTypes),
			template: '<MkModal v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkModal>;
export default meta;
