type BaseItem<T extends string> = { type: T };

type DividerItem = BaseItem<'divider'>;

type ButtonItem = BaseItem<'button'> & {
	content: string;
	callback: (e: MouseEvent) => void;

	precontent?: HTMLElement;
};

export type Item = DividerItem | ButtonItem;

export type MenuStyle = {
	borderRadius?: string;
	bgColor?: string;
	padding?: string;
	gap?: string;

	minWidth?: string;
	maxHeight?: string;
};

export type Style = {
	menu?: MenuStyle;
};

export interface ContextConfig {
	items: Item[];
	style?: Style;
}
