<script lang="ts">
	import { contextMenu } from '$lib';

	const items = [
		{
			type: 'button',
			content: 'Hi',
			callback: () => window.alert('hi')
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
			callback: () => window.alert('hi'),
			precontent: (() => {
				const ele = document.createElement('p');
				ele.innerText = 'Pre'
				ele.style.color = 'red'
				ele.style.outline = '1px solid blue'
				return ele
			})()
		},
		{
			type: "custom",
			element: (() => {
				const ele = document.createElement('p');
				ele.innerText = 'Custom'
				ele.style.color = 'yellow'
				ele.style.outline = '1px solid green'
				return ele
			})()
		}
	] as const;
</script>

<div
	class="box"
	use:contextMenu={{
		items
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
