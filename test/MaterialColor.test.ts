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
 * Copyright 2024 Sitharaj Seenivasan 
 */

import { MaterialColor, ColorShade } from '../src';

describe('MaterialColor', () => {
  it('should return the correct color for a valid standard shade', () => {
    const red500 = MaterialColor.RED[ColorShade.S500];
    expect(red500).toBe('#F44336');
  });

  it('should return the correct color for an accent shade', () => {
    const redA200 = MaterialColor.RED[ColorShade.SA200];
    expect(redA200).toBe('#FF5252');
  });

  it('should return the default color (S50) when an invalid shade is accessed', () => {
    const invalidShade = MaterialColor.RED['999' as ColorShade];
    expect(invalidShade).toBe(MaterialColor.RED[ColorShade.S50]);
  });

  it('should return the correct accent color for PINK SA200', () => {
    const pinkA200 = MaterialColor.PINK[ColorShade.SA200];
    expect(pinkA200).toBe('#FF4081');
  });

  it('should handle colors with missing accent shades gracefully', () => {
    const redA999 = MaterialColor.RED['SA999' as ColorShade];
    expect(redA999).toBe(MaterialColor.RED[ColorShade.S50]); // Falls back to default S50
  });

  it('should return the correct color for another color shade', () => {
    const blue400 = MaterialColor.BLUE[ColorShade.S400];
    expect(blue400).toBe('#42A5F5');
  });

  it('should return the default color (S50) for an invalid color shade in BLUE', () => {
    const blueInvalid = MaterialColor.BLUE['999' as ColorShade];
    expect(blueInvalid).toBe(MaterialColor.BLUE[ColorShade.S50]);
  });
});
