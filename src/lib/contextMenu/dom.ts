import type { ContextConfig } from "$lib/types.js";
import { createItem } from "$lib/utils/dom/parts.js";
import { getStyle, type StyleToken } from "./styles.js";

export function createContextMenu(config: ContextConfig, e: MouseEvent) {
	const newContextMenu = document.createElement('div');
	newContextMenu.id = 'context-menu';

	const configStyle = config.style || {}
	const getStyleWithConf = (token: StyleToken) => getStyle(token, configStyle)

	newContextMenu.style.position = 'absolute';
	newContextMenu.style.left = `${e.clientX + 10}px`;
	newContextMenu.style.top = `${e.clientY + 10}px`;

	newContextMenu.style.borderRadius = getStyleWithConf('menu-borderRadius')
	newContextMenu.style.backgroundColor = getStyleWithConf('menu-bgColor')
	newContextMenu.style.padding = getStyleWithConf('menu-padding')
	newContextMenu.style.minWidth = getStyleWithConf('menu-minWidth')
	newContextMenu.style.maxHeight = getStyleWithConf('menu-maxHeight')
	newContextMenu.style.overflowY = 'auto';
	newContextMenu.style.display = 'flex';
	newContextMenu.style.flexDirection = 'column';
	newContextMenu.style.gap = getStyleWithConf('menu-gap')

	newContextMenu.append(...config.items.map(createItem))

	return newContextMenu
}
