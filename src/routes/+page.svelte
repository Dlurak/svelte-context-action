<script>
	import { contextMenu } from '$lib';
</script>

<div
	class="box"
	use:contextMenu={{
		items: [
			{
				type: 'button',
				content: 'Hi',
				callback: () => window.alert('hi'),
			},
			{
				type: 'button',
				content: 'Hi 1',
				callback: () => window.alert('hi')
			},
			{
				type: 'divider'
			},
			{
				type: 'button',
				content: 'Hi 2',
				callback: () => window.alert('hi')
			},
		],
		style: { menu: {
			bgColor: 'red'
		} }
	}}
>
	Right click me
</div>

<style>
	.box {
		aspect-ratio: 1;
		width: 12rem;
		display: flex;
		border-radius: 0.25rem;
		border: 1px solid gray;
	}
</style>
