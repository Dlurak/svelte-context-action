import type { Style } from '$lib/types.js';
import { describe, it, expect } from 'vitest';
import { getStyle } from './styles.js';

describe('default styles', () => {
	it('should use the specified values', () => {
		const styles = {
			menu: {
				borderRadius: '25rem',
				bgColor: 'red',
				gap: '4rem',
				minWidth: '42px'
			}
		} satisfies Style;

		expect(getStyle('menu-borderRadius', styles)).toBe('25rem');
		expect(getStyle('menu-bgColor', styles)).toBe('red');
		expect(getStyle('menu-gap', styles)).toBe('4rem');
		expect(getStyle('menu-minWidth', styles)).toBe('42px');
	});

	it('uses default values', () => {
		expect(getStyle('menu-borderRadius', {})).toBe('var(--ctx-menu-borderRadius, 0.25rem)');
		expect(getStyle('menu-bgColor', {})).toBe('var(--ctx-menu-bgColor, #333)');
	});
});
