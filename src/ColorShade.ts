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
 * Enum representing all available Material Design color shades.
 * 
 * Standard shades range from S50 (lightest) to S900 (darkest).
 * Accent shades (SA100, SA200, SA400, SA700) are available for most colors
 * and provide vibrant, saturated alternatives.
 * 
 * @example
 * ```typescript
 * import { MaterialColor, ColorShade } from 'mat-design-colors';
 * 
 * // Use standard shade
 * const red500 = MaterialColor.RED[ColorShade.S500];
 * 
 * // Use accent shade
 * const redAccent = MaterialColor.RED[ColorShade.SA200];
 * ```
 */
export enum ColorShade {
  S50 = 'S50',
  S100 = 'S100',
  S200 = 'S200',
  S300 = 'S300',
  S400 = 'S400',
  S500 = 'S500',
  S600 = 'S600',
  S700 = 'S700',
  S800 = 'S800',
  S900 = 'S900',
  SA100 = 'SA100',
  SA200 = 'SA200',
  SA400 = 'SA400',
  SA700 = 'SA700',
}
