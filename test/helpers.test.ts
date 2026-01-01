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
    getAllColors,
    getAllShades,
    getColor,
    getColorPalette,
    searchColors,
    findColorByHex,
    generateCSSVariables,
    generateCSSClasses,
    getPrimaryShade,
    getColorWithContrast,
    getRandomColor,
    getColorsByCategory,
} from '../src/helpers';
import { ColorShade } from '../src/ColorShade';

describe('Helper Functions', () => {
    describe('getAllColors', () => {
        it('should return all color names', () => {
            const colors = getAllColors();
            expect(colors).toContain('RED');
            expect(colors).toContain('BLUE');
            expect(colors).toContain('GREEN');
            expect(colors.length).toBe(19);
        });
    });

    describe('getAllShades', () => {
        it('should return all shade values', () => {
            const shades = getAllShades();
            expect(shades).toContain(ColorShade.S500);
            expect(shades).toContain(ColorShade.SA200);
            expect(shades.length).toBe(14);
        });
    });

    describe('getColor', () => {
        it('should get color by name and shade', () => {
            expect(getColor('RED', 'S500')).toBe('#F44336');
            expect(getColor('BLUE', 'S500')).toBe('#2196F3');
        });

        it('should be case insensitive', () => {
            expect(getColor('red', 's500')).toBe('#F44336');
            expect(getColor('RED', 'S500')).toBe('#F44336');
        });

        it('should return undefined for invalid color', () => {
            expect(getColor('INVALID', 'S500')).toBeUndefined();
        });
    });

    describe('getColorPalette', () => {
        it('should return all shades for a color', () => {
            const palette = getColorPalette('RED');
            expect(palette['S50']).toBe('#FFEBEE');
            expect(palette['S500']).toBe('#F44336');
            expect(palette['SA200']).toBe('#FF5252');
        });

        it('should return empty object for invalid color', () => {
            const palette = getColorPalette('INVALID');
            expect(Object.keys(palette).length).toBe(0);
        });
    });

    describe('searchColors', () => {
        it('should find colors by name', () => {
            const results = searchColors('blue');
            expect(results.length).toBeGreaterThan(0);
            expect(results.some(r => r.colorName === 'BLUE')).toBe(true);
            expect(results.some(r => r.colorName === 'LIGHT_BLUE')).toBe(true);
        });

        it('should return empty array for no matches', () => {
            const results = searchColors('xyz');
            expect(results.length).toBe(0);
        });
    });

    describe('findColorByHex', () => {
        it('should find color info by hex value', () => {
            const result = findColorByHex('#F44336');
            expect(result).toBeDefined();
            expect(result?.colorName).toBe('RED');
            expect(result?.shade).toBe(ColorShade.S500);
        });

        it('should handle hex without # prefix', () => {
            const result = findColorByHex('F44336');
            expect(result).toBeDefined();
            expect(result?.colorName).toBe('RED');
        });

        it('should return undefined for unknown hex', () => {
            const result = findColorByHex('#123456');
            expect(result).toBeUndefined();
        });
    });

    describe('generateCSSVariables', () => {
        it('should generate valid CSS', () => {
            const css = generateCSSVariables();
            expect(css).toContain(':root {');
            expect(css).toContain('--md-red-500: #F44336;');
            expect(css).toContain('}');
        });

        it('should use custom prefix', () => {
            const css = generateCSSVariables('material');
            expect(css).toContain('--material-red-500: #F44336;');
        });
    });

    describe('generateCSSClasses', () => {
        it('should generate valid CSS classes', () => {
            const css = generateCSSClasses();
            expect(css).toContain('.md-red-500 { background-color: #F44336; }');
        });

        it('should use custom prefix and property', () => {
            const css = generateCSSClasses('text', 'color');
            expect(css).toContain('.text-red-500 { color: #F44336; }');
        });
    });

    describe('getPrimaryShade', () => {
        it('should return the S500 shade', () => {
            expect(getPrimaryShade('RED')).toBe('#F44336');
            expect(getPrimaryShade('BLUE')).toBe('#2196F3');
        });

        it('should return undefined for invalid color', () => {
            expect(getPrimaryShade('INVALID')).toBeUndefined();
        });
    });

    describe('getColorWithContrast', () => {
        it('should return correct contrast color for light backgrounds', () => {
            const result = getColorWithContrast('YELLOW', 'S200');
            expect(result.text).toBe('#000000');
        });

        it('should return correct contrast color for dark backgrounds', () => {
            const result = getColorWithContrast('INDIGO', 'S900');
            expect(result.text).toBe('#FFFFFF');
        });
    });

    describe('getRandomColor', () => {
        it('should return a valid color result', () => {
            const result = getRandomColor();
            expect(result.colorName).toBeDefined();
            expect(result.shade).toBeDefined();
            expect(result.hex).toBeDefined();
            expect(result.hex.startsWith('#')).toBe(true);
        });
    });

    describe('getColorsByCategory', () => {
        it('should group colors by category', () => {
            const categories = getColorsByCategory();
            expect(categories.reds).toContain('RED');
            expect(categories.blues).toContain('BLUE');
            expect(categories.greens).toContain('GREEN');
            expect(categories.neutrals).toContain('GREY');
        });
    });
});
