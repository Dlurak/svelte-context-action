type BaseItem<T extends string> = { type: T };

type DividerItem = BaseItem<'divider'>;

type ButtonItem = BaseItem<'button'> & {
	content: string;
	callback: (e: MouseEvent) => void;

	precontent?: HTMLElement;
};

export type Item = DividerItem | ButtonItem;

export interface ContextConfig {
	items: Item[];
}
