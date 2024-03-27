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

export type ButtonStyle = {
	borderRadius?: string;
	bgColor?: string;
	bgColorHover?: string;
	gap?: string;
	padding?: string;
	color?: string;
	border?: string;

	margin?: string;
	outline?: string;
};

export type DividerStyle = {
	width?: string;
}

export type Style = {
	menu?: MenuStyle;
	button?: ButtonStyle;
	divider?: DividerStyle;
};

export interface ContextConfig {
	items: Item[];
	style?: Style;
}
