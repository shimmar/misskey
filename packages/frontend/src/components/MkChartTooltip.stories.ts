import { Meta, StoryObj } from '@storybook/vue3';
import MkChartTooltip from './MkChartTooltip.vue';
const meta = {
	title: 'components/MkChartTooltip',
	component: MkChartTooltip,
} satisfies Meta<typeof MkChartTooltip>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkChartTooltip,
			},
			props: Object.keys(argTypes),
			template: '<MkChartTooltip v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkChartTooltip>;
export default meta;
