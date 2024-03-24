import type { ButtonStyle, MenuStyle, Style } from '$lib/types.js';

const defaultStyles = {
	menu: {
		borderRadius: '0.25rem',
		bgColor: '#333',
		padding: '0.25rem',
		gap: '0.25rem',

		minWidth: '5rem',
		maxHeight: '50%'
	},
	button: {
		gap: '0.25rem',
		padding: '0.5rem',
		bgColor: '#333',
		bgColorHover: '#444',
		color: 'white',
		border: 'none',
		borderRadius: '0.25rem'
	}
} satisfies Style;

type StyleMasterToken = keyof Style;

type MenuToken = `menu-${keyof MenuStyle}`;
type ButtonToken = `button-${keyof ButtonStyle}`;
export type StyleToken = MenuToken | ButtonToken;

export function getStyle(token: StyleToken, style: Style) {
	const group = token.split('-')[0] as StyleMasterToken;

	const specificToken = token.replace(/[a-zA-Z]+-/, '');
	const specificStyles = style[group];

	// @ts-expect-error
	const setValue = (specificStyles || {})[specificToken] as string;
	// @ts-expect-error
	const defaultValue = `var(--ctx-${token}, ${defaultStyles[group][specificToken]})`;

	return setValue || defaultValue;
}
