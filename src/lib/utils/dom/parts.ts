import { getStyle, type StyleToken } from '$lib/contextMenu/styles.js';
import type { ContextConfig, Item } from '$lib/types.js';

export function createItem(item: Item, config: ContextConfig) {
	const getStyleConfig = (tok: StyleToken) => getStyle(tok, config.style || {});

	switch (item.type) {
		case 'divider':
			const ele = document.createElement('hr');

			ele.style.width = getStyleConfig('divider-width');

			return ele;
		case 'button':
			const newButton = document.createElement('button');

			if (item.precontent) newButton.appendChild(item.precontent);
			const contentEle = document.createElement('span');
			contentEle.innerText = item.content;
			contentEle.style.height = 'min-content';

			newButton.appendChild(contentEle);

			newButton.style.backgroundColor = getStyleConfig('button-bgColor');
			newButton.style.display = 'flex';
			newButton.style.color = getStyleConfig('button-color');
			newButton.style.border = getStyleConfig('button-border');
			newButton.style.borderRadius = getStyleConfig('button-borderRadius');
			newButton.style.gap = getStyleConfig('button-gap');
			newButton.style.flexDirection = 'row';
			newButton.style.alignItems = 'center';
			newButton.style.padding = getStyleConfig('button-padding');
			newButton.style.margin = getStyleConfig('button-margin');
			newButton.style.outline = getStyleConfig('button-outline');

			newButton.addEventListener('mouseenter', () => {
				newButton.style.backgroundColor = getStyleConfig('button-bgColorHover');
			});
			newButton.addEventListener('mouseleave', () => {
				newButton.style.backgroundColor = getStyleConfig('button-bgColor');
			});

			newButton.addEventListener('click', item.callback);

			return newButton;
	}
}
