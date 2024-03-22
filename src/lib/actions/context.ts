import { createContextMenu } from '$lib/contextMenu/dom.js';
import type { ContextConfig } from '$lib/types.js';
import { addMultipleEventListeners } from '$lib/utils/dom/eventListeners.js';

const removeContextMenu = () => document.getElementById('context-menu')?.remove() || null;

function handleContextMenu(config: ContextConfig) {
	return (e: MouseEvent) => {
		e.preventDefault();

		removeContextMenu();

		document.body.appendChild(createContextMenu(config, e));
	};
}

export function contextMenu(node: HTMLElement, config: ContextConfig) {
	const removeEventListeners = addMultipleEventListeners(
		document.documentElement,
		['click'],
		removeContextMenu
	);

	const listener = handleContextMenu(config);
	node.addEventListener('contextmenu', listener);

	return {
		destroy() {
			node.removeEventListener('contextmenu', listener);

			removeEventListeners();
		}
	};
}
