import { Meta, StoryObj } from '@storybook/vue3';
import page_image from './page.image.vue';
const meta = {
	title: 'components/page/page.image',
	component: page_image,
} satisfies Meta<typeof page_image>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				page_image,
			},
			props: Object.keys(argTypes),
			template: '<page_image v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof page_image>;
export default meta;
