import type { Item } from '$lib/types.js';

export function createItem(item: Item) {
	switch (item.type) {
		case 'divider':
			const ele = document.createElement('hr')
			ele.style.width = '90%'
			return ele
		case 'button':
			const newButton = document.createElement('button');

			if (item.precontent) newButton.appendChild(item.precontent);
			const contentEle = document.createElement('span');
			contentEle.innerText = item.content;
			contentEle.style.height = 'min-content';

			newButton.appendChild(contentEle);

			newButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			newButton.style.display = 'flex';
			newButton.style.color = 'white';
			newButton.style.border = 'none';
			newButton.style.borderRadius = '0.5rem';
			newButton.style.gap = '0.5rem';
			newButton.style.flexDirection = 'row';
			newButton.style.alignItems = 'center';
			newButton.style.padding = '0.5rem .75rem';

			newButton.addEventListener('mouseenter', () => {
				newButton.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			});
			newButton.addEventListener('mouseleave', () => {
				newButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			});

			newButton.addEventListener('click', item.callback);

			return newButton;
	}
}
