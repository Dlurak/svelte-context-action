import type { ContextConfig } from "$lib/types.js";
import { createItem } from "$lib/utils/dom/parts.js";

export function createContextMenu(config: ContextConfig, e: MouseEvent) {
	const newContextMenu = document.createElement('div');
	newContextMenu.id = 'context-menu';
	newContextMenu.style.position = 'absolute';
	newContextMenu.style.left = `${e.clientX + 10}px`;
	newContextMenu.style.top = `${e.clientY + 10}px`;
	newContextMenu.style.borderRadius = '0.25rem';
	newContextMenu.style.backgroundColor = '#333333';
	newContextMenu.style.padding = '0.25rem';
	newContextMenu.style.minWidth = '5rem';
	newContextMenu.style.maxHeight = '50%';
	newContextMenu.style.overflowY = 'auto';
	newContextMenu.style.display = 'flex';
	newContextMenu.style.flexDirection = 'column';
	newContextMenu.style.gap = '0.2rem';

	newContextMenu.append(...config.items.map(createItem))

	return newContextMenu
}
