/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Copyright 2025 Sitharaj Seenivasan 
 */

import {
    hexToRgb,
    rgbToHex,
    hexToHsl,
    hslToHex,
    lighten,
    darken,
    alpha,
    isLight,
    isDark,
    getContrastColor,
    getContrastRatio,
    mix,
    invert,
    grayscale,
    getLuminance,
} from '../src/utils';

describe('Color Utilities', () => {
    describe('hexToRgb', () => {
        it('should convert hex to RGB correctly', () => {
            expect(hexToRgb('#FF5252')).toEqual({ r: 255, g: 82, b: 82 });
            expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
            expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
        });

        it('should handle hex without # prefix', () => {
            expect(hexToRgb('FF5252')).toEqual({ r: 255, g: 82, b: 82 });
        });

        it('should handle 3-character hex', () => {
            expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
            expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
        });

        it('should throw error for invalid hex', () => {
            expect(() => hexToRgb('#GGGG')).toThrow();
        });
    });

    describe('rgbToHex', () => {
        it('should convert RGB to hex correctly', () => {
            expect(rgbToHex(255, 82, 82)).toBe('#FF5252');
            expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
            expect(rgbToHex(0, 0, 0)).toBe('#000000');
        });

        it('should clamp out of range values', () => {
            expect(rgbToHex(300, -10, 128)).toBe('#FF0080');
        });
    });

    describe('hexToHsl', () => {
        it('should convert hex to HSL correctly', () => {
            const red = hexToHsl('#FF0000');
            expect(red.h).toBe(0);
            expect(red.s).toBe(100);
            expect(red.l).toBe(50);
        });

        it('should handle achromatic colors', () => {
            const white = hexToHsl('#FFFFFF');
            expect(white.l).toBe(100);

            const black = hexToHsl('#000000');
            expect(black.l).toBe(0);
        });
    });

    describe('hslToHex', () => {
        it('should convert HSL to hex correctly', () => {
            expect(hslToHex(0, 100, 50)).toBe('#FF0000');
            expect(hslToHex(120, 100, 50)).toBe('#00FF00');
            expect(hslToHex(240, 100, 50)).toBe('#0000FF');
        });
    });

    describe('lighten', () => {
        it('should lighten a color', () => {
            const lightened = lighten('#F44336', 20);
            const original = hexToHsl('#F44336');
            const result = hexToHsl(lightened);
            expect(result.l).toBeGreaterThan(original.l);
        });

        it('should not exceed 100% lightness', () => {
            const lightened = lighten('#FFFFFF', 50);
            const result = hexToHsl(lightened);
            expect(result.l).toBe(100);
        });
    });

    describe('darken', () => {
        it('should darken a color', () => {
            const darkened = darken('#F44336', 20);
            const original = hexToHsl('#F44336');
            const result = hexToHsl(darkened);
            expect(result.l).toBeLessThan(original.l);
        });

        it('should not go below 0% lightness', () => {
            const darkened = darken('#000000', 50);
            const result = hexToHsl(darkened);
            expect(result.l).toBe(0);
        });
    });

    describe('alpha', () => {
        it('should add alpha channel correctly', () => {
            expect(alpha('#FF5252', 0.5)).toBe('rgba(255, 82, 82, 0.5)');
            expect(alpha('#000000', 0)).toBe('rgba(0, 0, 0, 0)');
            expect(alpha('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
        });

        it('should clamp opacity values', () => {
            expect(alpha('#FF5252', 1.5)).toBe('rgba(255, 82, 82, 1)');
            expect(alpha('#FF5252', -0.5)).toBe('rgba(255, 82, 82, 0)');
        });
    });

    describe('isLight / isDark', () => {
        it('should correctly identify light colors', () => {
            expect(isLight('#FFFFFF')).toBe(true);
            expect(isLight('#FFFF00')).toBe(true);
            expect(isDark('#FFFFFF')).toBe(false);
        });

        it('should correctly identify dark colors', () => {
            expect(isDark('#000000')).toBe(true);
            expect(isDark('#1A237E')).toBe(true);
            expect(isLight('#000000')).toBe(false);
        });
    });

    describe('getContrastColor', () => {
        it('should return black for light backgrounds', () => {
            expect(getContrastColor('#FFFFFF')).toBe('#000000');
            expect(getContrastColor('#FFEB3B')).toBe('#000000');
        });

        it('should return white for dark backgrounds', () => {
            expect(getContrastColor('#000000')).toBe('#FFFFFF');
            expect(getContrastColor('#1A237E')).toBe('#FFFFFF');
        });
    });

    describe('getContrastRatio', () => {
        it('should calculate maximum contrast correctly', () => {
            const ratio = getContrastRatio('#FFFFFF', '#000000');
            expect(ratio).toBeCloseTo(21, 0);
        });

        it('should return 1 for same colors', () => {
            const ratio = getContrastRatio('#FF5252', '#FF5252');
            expect(ratio).toBeCloseTo(1, 1);
        });
    });

    describe('mix', () => {
        it('should mix two colors equally by default', () => {
            const mixed = mix('#FF0000', '#0000FF');
            const rgb = hexToRgb(mixed);
            expect(rgb.r).toBe(128);
            expect(rgb.b).toBe(128);
        });

        it('should respect weight parameter', () => {
            const mixed = mix('#FF0000', '#0000FF', 0.75);
            const rgb = hexToRgb(mixed);
            expect(rgb.r).toBeGreaterThan(rgb.b);
        });
    });

    describe('invert', () => {
        it('should invert colors correctly', () => {
            expect(invert('#FFFFFF')).toBe('#000000');
            expect(invert('#000000')).toBe('#FFFFFF');
            expect(invert('#FF0000')).toBe('#00FFFF');
        });
    });

    describe('grayscale', () => {
        it('should convert to grayscale', () => {
            const gray = grayscale('#FF0000');
            const rgb = hexToRgb(gray);
            expect(rgb.r).toBe(rgb.g);
            expect(rgb.g).toBe(rgb.b);
        });
    });

    describe('getLuminance', () => {
        it('should return 1 for white', () => {
            expect(getLuminance('#FFFFFF')).toBeCloseTo(1, 2);
        });

        it('should return 0 for black', () => {
            expect(getLuminance('#000000')).toBeCloseTo(0, 2);
        });
    });
});
