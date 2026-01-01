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

/**
 * RGB color representation
 */
export interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * HSL color representation
 */
export interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * RGBA color representation
 */
export interface RGBA extends RGB {
  a: number;
}

/**
 * Converts a hex color string to RGB values
 * @param hex - The hex color string (e.g., "#FF5252" or "FF5252")
 * @returns RGB object with r, g, b values (0-255)
 * @example
 * ```typescript
 * const rgb = hexToRgb('#FF5252');
 * console.log(rgb); // { r: 255, g: 82, b: 82 }
 * ```
 */
export function hexToRgb(hex: string): RGB {
  const cleanHex = hex.replace(/^#/, '');
  
  if (cleanHex.length !== 6 && cleanHex.length !== 3) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  const fullHex = cleanHex.length === 3
    ? cleanHex.split('').map(c => c + c).join('')
    : cleanHex;

  const num = parseInt(fullHex, 16);
  
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Converts RGB values to a hex color string
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Hex color string with # prefix
 * @example
 * ```typescript
 * const hex = rgbToHex(255, 82, 82);
 * console.log(hex); // "#FF5252"
 * ```
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  return '#' + [clamp(r), clamp(g), clamp(b)]
    .map(x => x.toString(16).padStart(2, '0').toUpperCase())
    .join('');
}

/**
 * Converts a hex color string to HSL values
 * @param hex - The hex color string (e.g., "#FF5252" or "FF5252")
 * @returns HSL object with h (0-360), s (0-100), l (0-100) values
 * @example
 * ```typescript
 * const hsl = hexToHsl('#FF5252');
 * console.log(hsl); // { h: 0, s: 100, l: 66 }
 * ```
 */
export function hexToHsl(hex: string): HSL {
  const { r, g, b } = hexToRgb(hex);
  
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;
  
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    
    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) / 6;
        break;
      case gNorm:
        h = ((bNorm - rNorm) / delta + 2) / 6;
        break;
      case bNorm:
        h = ((rNorm - gNorm) / delta + 4) / 6;
        break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Converts HSL values to a hex color string
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param l - Lightness (0-100)
 * @returns Hex color string with # prefix
 * @example
 * ```typescript
 * const hex = hslToHex(0, 100, 66);
 * console.log(hex); // "#FF5252"
 * ```
 */
export function hslToHex(h: number, s: number, l: number): string {
  const sNorm = s / 100;
  const lNorm = l / 100;
  
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }
  
  return rgbToHex(
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255)
  );
}

/**
 * Lightens a hex color by a given percentage
 * @param hex - The hex color string
 * @param amount - Amount to lighten (0-100)
 * @returns Lightened hex color string
 * @example
 * ```typescript
 * const lighter = lighten('#F44336', 20);
 * console.log(lighter); // A lighter shade of red
 * ```
 */
export function lighten(hex: string, amount: number): string {
  const hsl = hexToHsl(hex);
  const newL = Math.min(100, hsl.l + amount);
  return hslToHex(hsl.h, hsl.s, newL);
}

/**
 * Darkens a hex color by a given percentage
 * @param hex - The hex color string
 * @param amount - Amount to darken (0-100)
 * @returns Darkened hex color string
 * @example
 * ```typescript
 * const darker = darken('#F44336', 20);
 * console.log(darker); // A darker shade of red
 * ```
 */
export function darken(hex: string, amount: number): string {
  const hsl = hexToHsl(hex);
  const newL = Math.max(0, hsl.l - amount);
  return hslToHex(hsl.h, hsl.s, newL);
}

/**
 * Adds an alpha (opacity) channel to a hex color
 * @param hex - The hex color string
 * @param opacity - Opacity value (0-1)
 * @returns RGBA color string
 * @example
 * ```typescript
 * const transparent = alpha('#F44336', 0.5);
 * console.log(transparent); // "rgba(244, 67, 54, 0.5)"
 * ```
 */
export function alpha(hex: string, opacity: number): string {
  const { r, g, b } = hexToRgb(hex);
  const a = Math.max(0, Math.min(1, opacity));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Calculates the relative luminance of a color
 * @param hex - The hex color string
 * @returns Luminance value (0-1)
 */
export function getLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  
  const [rs, gs, bs] = [r, g, b].map(c => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Determines if a color is considered "light"
 * @param hex - The hex color string
 * @returns True if the color is light
 * @example
 * ```typescript
 * console.log(isLight('#FFFFFF')); // true
 * console.log(isLight('#000000')); // false
 * ```
 */
export function isLight(hex: string): boolean {
  return getLuminance(hex) > 0.179;
}

/**
 * Determines if a color is considered "dark"
 * @param hex - The hex color string
 * @returns True if the color is dark
 * @example
 * ```typescript
 * console.log(isDark('#000000')); // true
 * console.log(isDark('#FFFFFF')); // false
 * ```
 */
export function isDark(hex: string): boolean {
  return !isLight(hex);
}

/**
 * Returns black or white color that provides best contrast with the given color
 * @param hex - The hex color string
 * @returns "#000000" for light backgrounds, "#FFFFFF" for dark backgrounds
 * @example
 * ```typescript
 * console.log(getContrastColor('#FFFFFF')); // "#000000"
 * console.log(getContrastColor('#000000')); // "#FFFFFF"
 * ```
 */
export function getContrastColor(hex: string): string {
  return isLight(hex) ? '#000000' : '#FFFFFF';
}

/**
 * Calculates the contrast ratio between two colors
 * @param hex1 - First hex color string
 * @param hex2 - Second hex color string
 * @returns Contrast ratio (1-21)
 * @example
 * ```typescript
 * const ratio = getContrastRatio('#FFFFFF', '#000000');
 * console.log(ratio); // 21 (maximum contrast)
 * ```
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Mixes two colors together
 * @param hex1 - First hex color string
 * @param hex2 - Second hex color string
 * @param weight - Weight of first color (0-1), default 0.5
 * @returns Mixed hex color string
 * @example
 * ```typescript
 * const mixed = mix('#FF0000', '#0000FF', 0.5);
 * console.log(mixed); // Purple mix of red and blue
 * ```
 */
export function mix(hex1: string, hex2: string, weight: number = 0.5): string {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const w = Math.max(0, Math.min(1, weight));
  
  return rgbToHex(
    Math.round(rgb1.r * w + rgb2.r * (1 - w)),
    Math.round(rgb1.g * w + rgb2.g * (1 - w)),
    Math.round(rgb1.b * w + rgb2.b * (1 - w))
  );
}

/**
 * Inverts a color
 * @param hex - The hex color string
 * @returns Inverted hex color string
 * @example
 * ```typescript
 * console.log(invert('#FFFFFF')); // "#000000"
 * console.log(invert('#FF0000')); // "#00FFFF"
 * ```
 */
export function invert(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

/**
 * Converts a color to grayscale
 * @param hex - The hex color string
 * @returns Grayscale hex color string
 * @example
 * ```typescript
 * const gray = grayscale('#FF5252');
 * console.log(gray); // Grayscale version
 * ```
 */
export function grayscale(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  return rgbToHex(gray, gray, gray);
}

/**
 * Saturates a color by a given percentage
 * @param hex - The hex color string
 * @param amount - Amount to saturate (0-100)
 * @returns Saturated hex color string
 */
export function saturate(hex: string, amount: number): string {
  const hsl = hexToHsl(hex);
  const newS = Math.min(100, hsl.s + amount);
  return hslToHex(hsl.h, newS, hsl.l);
}

/**
 * Desaturates a color by a given percentage
 * @param hex - The hex color string
 * @param amount - Amount to desaturate (0-100)
 * @returns Desaturated hex color string
 */
export function desaturate(hex: string, amount: number): string {
  const hsl = hexToHsl(hex);
  const newS = Math.max(0, hsl.s - amount);
  return hslToHex(hsl.h, newS, hsl.l);
}

/**
 * Adjusts the hue of a color
 * @param hex - The hex color string
 * @param degrees - Degrees to rotate the hue (-360 to 360)
 * @returns Adjusted hex color string
 */
export function adjustHue(hex: string, degrees: number): string {
  const hsl = hexToHsl(hex);
  let newH = (hsl.h + degrees) % 360;
  if (newH < 0) newH += 360;
  return hslToHex(newH, hsl.s, hsl.l);
}

/**
 * Gets the complementary color (180 degrees on color wheel)
 * @param hex - The hex color string
 * @returns Complementary hex color string
 */
export function complement(hex: string): string {
  return adjustHue(hex, 180);
}
