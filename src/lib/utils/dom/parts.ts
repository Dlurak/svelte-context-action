import type { Item } from '$lib/types.js';

export function createItem(item: Item) {
	switch (item.type) {
		case 'divider':
			return document.createElement('hr');
		case 'button':
			const newButton = document.createElement('button');

			if (item.precontent) newButton.appendChild(item.precontent);
			const contentEle = document.createElement('span')
			contentEle.innerText = item.content

			newButton.appendChild(contentEle);

			newButton.addEventListener('click', item.callback);

			return newButton;
	}
}
