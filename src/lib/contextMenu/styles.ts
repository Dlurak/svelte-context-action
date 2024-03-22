import type { MenuStyle, Style } from '$lib/types.js';

const defaultStyles = {
	menu: {
		borderRadius: '0.25rem',
		bgColor: '#333',
		padding: '0.25rem',
		gap: '0.25rem',

		minWidth: '5rem',
		maxHeight: '50%'
	}
} satisfies Style;

type MenuBaseToken = keyof MenuStyle;
type MenuToken = `menu-${MenuBaseToken}`;
type GlobalToken = Exclude<keyof Style, 'menu'>;
export type StyleToken = GlobalToken | MenuToken;

export function getStyle(token: StyleToken, style: Style) {
	const tokenIsMenu = token.startsWith('menu-');

	if (!tokenIsMenu) {
		const typedToken = token as GlobalToken;
		return style[typedToken] || `var(--ctx-${token}, ${defaultStyles[typedToken]})`;
	}

	const { menu } = style;
	const menuToken = token.replace(/menu-/, '') as MenuBaseToken;

	const setValue = (menu || {})[menuToken];
	const defaultValue = `var(--ctx-${token}, ${defaultStyles.menu[menuToken]})`;
	return setValue || defaultValue;
}
