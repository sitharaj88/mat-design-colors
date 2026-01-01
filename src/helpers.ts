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

import { MaterialColor } from './MaterialColor';
import { ColorShade } from './ColorShade';

/**
 * Type representing valid Material Design color names
 */
export type ColorName = keyof typeof MaterialColor;

/**
 * Interface for a color palette entry
 */
export interface ColorPaletteEntry {
    name: ColorName;
    shades: Record<ColorShade, string | undefined>;
}

/**
 * Interface for search result
 */
export interface ColorSearchResult {
    colorName: ColorName;
    shade: ColorShade;
    hex: string;
}

/**
 * Gets all available Material Design color names
 * @returns Array of color names
 * @example
 * ```typescript
 * const colors = getAllColors();
 * console.log(colors); // ['RED', 'PINK', 'PURPLE', ...]
 * ```
 */
export function getAllColors(): ColorName[] {
    return Object.keys(MaterialColor) as ColorName[];
}

/**
 * Gets all available shade names
 * @returns Array of shade values
 * @example
 * ```typescript
 * const shades = getAllShades();
 * console.log(shades); // ['S50', 'S100', 'S200', ..., 'SA700']
 * ```
 */
export function getAllShades(): ColorShade[] {
    return Object.values(ColorShade);
}

/**
 * Gets a color by name and shade using string values
 * @param colorName - The color name (e.g., "RED", "BLUE")
 * @param shade - The shade (e.g., "S500", "SA200")
 * @returns The hex color string or undefined if not found
 * @example
 * ```typescript
 * const red500 = getColor('RED', 'S500');
 * console.log(red500); // "#F44336"
 * ```
 */
export function getColor(colorName: string, shade: string): string | undefined {
    const colorKey = colorName.toUpperCase() as ColorName;
    const shadeKey = shade.toUpperCase() as ColorShade;

    if (!(colorKey in MaterialColor)) {
        return undefined;
    }

    const colorPalette = MaterialColor[colorKey];
    return colorPalette[shadeKey];
}

/**
 * Gets all shades for a specific color family
 * @param colorName - The color name (e.g., "RED", "BLUE")
 * @returns Object containing all shades and their hex values
 * @example
 * ```typescript
 * const redPalette = getColorPalette('RED');
 * console.log(redPalette.S500); // "#F44336"
 * ```
 */
export function getColorPalette(colorName: string): Record<string, string | undefined> {
    const colorKey = colorName.toUpperCase() as ColorName;

    if (!(colorKey in MaterialColor)) {
        return {};
    }

    const result: Record<string, string | undefined> = {};
    const shades = getAllShades();

    for (const shade of shades) {
        result[shade] = MaterialColor[colorKey][shade];
    }

    return result;
}

/**
 * Searches for colors matching a query string
 * @param query - Search query (matches color names)
 * @returns Array of matching color results
 * @example
 * ```typescript
 * const results = searchColors('blue');
 * // Returns all BLUE and LIGHT_BLUE shades
 * ```
 */
export function searchColors(query: string): ColorSearchResult[] {
    const results: ColorSearchResult[] = [];
    const normalizedQuery = query.toLowerCase();
    const colors = getAllColors();
    const shades = getAllShades();

    for (const colorName of colors) {
        if (colorName.toLowerCase().includes(normalizedQuery)) {
            for (const shade of shades) {
                const hex = MaterialColor[colorName][shade];
                if (hex) {
                    results.push({ colorName, shade, hex });
                }
            }
        }
    }

    return results;
}

/**
 * Finds a color by its hex value
 * @param hex - The hex color to find
 * @returns Color info or undefined if not found
 * @example
 * ```typescript
 * const info = findColorByHex('#F44336');
 * console.log(info); // { colorName: 'RED', shade: 'S500', hex: '#F44336' }
 * ```
 */
export function findColorByHex(hex: string): ColorSearchResult | undefined {
    const normalizedHex = hex.toUpperCase().startsWith('#')
        ? hex.toUpperCase()
        : `#${hex.toUpperCase()}`;

    const colors = getAllColors();
    const shades = getAllShades();

    for (const colorName of colors) {
        for (const shade of shades) {
            const colorHex = MaterialColor[colorName][shade];
            if (colorHex === normalizedHex) {
                return { colorName, shade, hex: colorHex };
            }
        }
    }

    return undefined;
}

/**
 * Generates CSS custom properties for all Material Design colors
 * @param prefix - Optional prefix for variable names (default: "md")
 * @returns CSS string with custom properties
 * @example
 * ```typescript
 * const css = generateCSSVariables();
 * // :root {
 * //   --md-red-50: #FFEBEE;
 * //   --md-red-100: #FFCDD2;
 * //   ...
 * // }
 * ```
 */
export function generateCSSVariables(prefix: string = 'md'): string {
    const lines: string[] = [':root {'];
    const colors = getAllColors();
    const shades = getAllShades();

    for (const colorName of colors) {
        const cssColorName = colorName.toLowerCase().replace(/_/g, '-');

        for (const shade of shades) {
            const hex = MaterialColor[colorName][shade];
            if (hex) {
                const cssShade = shade.toLowerCase().replace('s', '');
                lines.push(`  --${prefix}-${cssColorName}-${cssShade}: ${hex};`);
            }
        }
    }

    lines.push('}');
    return lines.join('\n');
}

/**
 * Generates a CSS class for each color
 * @param prefix - Optional prefix for class names (default: "md")
 * @param property - CSS property to set (default: "background-color")
 * @returns CSS string with classes
 * @example
 * ```typescript
 * const css = generateCSSClasses('bg', 'background-color');
 * // .bg-red-500 { background-color: #F44336; }
 * ```
 */
export function generateCSSClasses(
    prefix: string = 'md',
    property: string = 'background-color'
): string {
    const lines: string[] = [];
    const colors = getAllColors();
    const shades = getAllShades();

    for (const colorName of colors) {
        const cssColorName = colorName.toLowerCase().replace(/_/g, '-');

        for (const shade of shades) {
            const hex = MaterialColor[colorName][shade];
            if (hex) {
                const cssShade = shade.toLowerCase().replace('s', '');
                lines.push(`.${prefix}-${cssColorName}-${cssShade} { ${property}: ${hex}; }`);
            }
        }
    }

    return lines.join('\n');
}

/**
 * Gets the primary shade (500) for a color
 * @param colorName - The color name
 * @returns The S500 hex value or undefined
 * @example
 * ```typescript
 * const primary = getPrimaryShade('RED');
 * console.log(primary); // "#F44336"
 * ```
 */
export function getPrimaryShade(colorName: string): string | undefined {
    return getColor(colorName, 'S500');
}

/**
 * Gets a color with its contrast text color
 * @param colorName - The color name
 * @param shade - The shade
 * @returns Object with background and text colors
 */
export function getColorWithContrast(colorName: string, shade: string): {
    background: string | undefined;
    text: string;
} {
    const background = getColor(colorName, shade);

    if (!background) {
        return { background: undefined, text: '#000000' };
    }

    // Import dynamically to avoid circular dependency
    const { r, g, b } = hexToRgbInternal(background);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return {
        background,
        text: luminance > 0.5 ? '#000000' : '#FFFFFF',
    };
}

// Internal helper to avoid circular import
function hexToRgbInternal(hex: string): { r: number; g: number; b: number } {
    const cleanHex = hex.replace(/^#/, '');
    const num = parseInt(cleanHex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
    };
}

/**
 * Creates a random Material Design color
 * @returns Random color result
 */
export function getRandomColor(): ColorSearchResult {
    const colors = getAllColors();
    const shades = getAllShades();

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];

    const hex = MaterialColor[randomColor][randomShade] ?? MaterialColor[randomColor][ColorShade.S500] ?? '#000000';

    return {
        colorName: randomColor,
        shade: randomShade,
        hex,
    };
}

/**
 * Groups colors by hue category
 * @returns Object with color names grouped by category
 */
export function getColorsByCategory(): Record<string, ColorName[]> {
    return {
        reds: ['RED', 'PINK'],
        purples: ['PURPLE', 'DEEP_PURPLE'],
        blues: ['INDIGO', 'BLUE', 'LIGHT_BLUE', 'CYAN'],
        greens: ['TEAL', 'GREEN', 'LIGHT_GREEN', 'LIME'],
        yellows: ['YELLOW', 'AMBER', 'ORANGE', 'DEEP_ORANGE'],
        neutrals: ['BROWN', 'GREY', 'BLUE_GREY'],
    };
}
