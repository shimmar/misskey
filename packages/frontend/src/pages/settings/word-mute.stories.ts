import { Meta, StoryObj } from '@storybook/vue3';
import word_mute from './word-mute.vue';
const meta = {
	title: 'pages/settings/word-mute',
	component: word_mute,
} satisfies Meta<typeof word_mute>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				word_mute,
			},
			props: Object.keys(argTypes),
			template: '<word_mute v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof word_mute>;
export default meta;
