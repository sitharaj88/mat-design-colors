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

import { ColorShade } from './ColorShade';

function isValidColorShade(key: string | symbol): key is keyof typeof ColorShade {
  return typeof key === 'string' && key in ColorShade;
}

export const MaterialColor = {
  RED: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FFEBEE',
    [ColorShade.S100]: '#FFCDD2',
    [ColorShade.S200]: '#EF9A9A',
    [ColorShade.S300]: '#E57373',
    [ColorShade.S400]: '#EF5350',
    [ColorShade.S500]: '#F44336',
    [ColorShade.S600]: '#E53935',
    [ColorShade.S700]: '#D32F2F',
    [ColorShade.S800]: '#C62828',
    [ColorShade.S900]: '#B71C1C',
    [ColorShade.SA100]: '#FF8A80',
    [ColorShade.SA200]: '#FF5252',
    [ColorShade.SA400]: '#FF1744',
    [ColorShade.SA700]: '#D50000',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  PINK: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FCE4EC',
    [ColorShade.S100]: '#F8BBD0',
    [ColorShade.S200]: '#F48FB1',
    [ColorShade.S300]: '#F06292',
    [ColorShade.S400]: '#EC407A',
    [ColorShade.S500]: '#E91E63',
    [ColorShade.S600]: '#D81B60',
    [ColorShade.S700]: '#C2185B',
    [ColorShade.S800]: '#AD1457',
    [ColorShade.S900]: '#880E4F',
    [ColorShade.SA100]: '#FF80AB',
    [ColorShade.SA200]: '#FF4081',
    [ColorShade.SA400]: '#F50057',
    [ColorShade.SA700]: '#C51162',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  PURPLE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#F3E5F5',
    [ColorShade.S100]: '#E1BEE7',
    [ColorShade.S200]: '#CE93D8',
    [ColorShade.S300]: '#BA68C8',
    [ColorShade.S400]: '#AB47BC',
    [ColorShade.S500]: '#9C27B0',
    [ColorShade.S600]: '#8E24AA',
    [ColorShade.S700]: '#7B1FA2',
    [ColorShade.S800]: '#6A1B9A',
    [ColorShade.S900]: '#4A148C',
    [ColorShade.SA100]: '#EA80FC',
    [ColorShade.SA200]: '#E040FB',
    [ColorShade.SA400]: '#D500F9',
    [ColorShade.SA700]: '#AA00FF',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  DEEP_PURPLE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#EDE7F6',
    [ColorShade.S100]: '#D1C4E9',
    [ColorShade.S200]: '#B39DDB',
    [ColorShade.S300]: '#9575CD',
    [ColorShade.S400]: '#7E57C2',
    [ColorShade.S500]: '#673AB7',
    [ColorShade.S600]: '#5E35B1',
    [ColorShade.S700]: '#512DA8',
    [ColorShade.S800]: '#4527A0',
    [ColorShade.S900]: '#311B92',
    [ColorShade.SA100]: '#B388FF',
    [ColorShade.SA200]: '#7C4DFF',
    [ColorShade.SA400]: '#651FFF',
    [ColorShade.SA700]: '#6200EA',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  INDIGO: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E8EAF6',
    [ColorShade.S100]: '#C5CAE9',
    [ColorShade.S200]: '#9FA8DA',
    [ColorShade.S300]: '#7986CB',
    [ColorShade.S400]: '#5C6BC0',
    [ColorShade.S500]: '#3F51B5',
    [ColorShade.S600]: '#3949AB',
    [ColorShade.S700]: '#303F9F',
    [ColorShade.S800]: '#283593',
    [ColorShade.S900]: '#1A237E',
    [ColorShade.SA100]: '#8C9EFF',
    [ColorShade.SA200]: '#536DFE',
    [ColorShade.SA400]: '#3D5AFE',
    [ColorShade.SA700]: '#304FFE',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  BLUE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E3F2FD',
    [ColorShade.S100]: '#BBDEFB',
    [ColorShade.S200]: '#90CAF9',
    [ColorShade.S300]: '#64B5F6',
    [ColorShade.S400]: '#42A5F5',
    [ColorShade.S500]: '#2196F3',
    [ColorShade.S600]: '#1E88E5',
    [ColorShade.S700]: '#1976D2',
    [ColorShade.S800]: '#1565C0',
    [ColorShade.S900]: '#0D47A1',
    [ColorShade.SA100]: '#82B1FF',
    [ColorShade.SA200]: '#448AFF',
    [ColorShade.SA400]: '#2979FF',
    [ColorShade.SA700]: '#2962FF',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  LIGHT_BLUE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E1F5FE',
    [ColorShade.S100]: '#B3E5FC',
    [ColorShade.S200]: '#81D4FA',
    [ColorShade.S300]: '#4FC3F7',
    [ColorShade.S400]: '#29B6F6',
    [ColorShade.S500]: '#03A9F4',
    [ColorShade.S600]: '#039BE5',
    [ColorShade.S700]: '#0288D1',
    [ColorShade.S800]: '#0277BD',
    [ColorShade.S900]: '#01579B',
    [ColorShade.SA100]: '#80D8FF',
    [ColorShade.SA200]: '#40C4FF',
    [ColorShade.SA400]: '#00B0FF',
    [ColorShade.SA700]: '#0091EA',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  CYAN: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E0F7FA',
    [ColorShade.S100]: '#B2EBF2',
    [ColorShade.S200]: '#80DEEA',
    [ColorShade.S300]: '#4DD0E1',
    [ColorShade.S400]: '#26C6DA',
    [ColorShade.S500]: '#00BCD4',
    [ColorShade.S600]: '#00ACC1',
    [ColorShade.S700]: '#0097A7',
    [ColorShade.S800]: '#00838F',
    [ColorShade.S900]: '#006064',
    [ColorShade.SA100]: '#84FFFF',
    [ColorShade.SA200]: '#18FFFF',
    [ColorShade.SA400]: '#00E5FF',
    [ColorShade.SA700]: '#00B8D4',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  TEAL: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E0F2F1',
    [ColorShade.S100]: '#B2DFDB',
    [ColorShade.S200]: '#80CBC4',
    [ColorShade.S300]: '#4DB6AC',
    [ColorShade.S400]: '#26A69A',
    [ColorShade.S500]: '#009688',
    [ColorShade.S600]: '#00897B',
    [ColorShade.S700]: '#00796B',
    [ColorShade.S800]: '#00695C',
    [ColorShade.S900]: '#004D40',
    [ColorShade.SA100]: '#A7FFEB',
    [ColorShade.SA200]: '#64FFDA',
    [ColorShade.SA400]: '#1DE9B6',
    [ColorShade.SA700]: '#00BFA5',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  GREEN: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#E8F5E9',
    [ColorShade.S100]: '#C8E6C9',
    [ColorShade.S200]: '#A5D6A7',
    [ColorShade.S300]: '#81C784',
    [ColorShade.S400]: '#66BB6A',
    [ColorShade.S500]: '#4CAF50',
    [ColorShade.S600]: '#43A047',
    [ColorShade.S700]: '#388E3C',
    [ColorShade.S800]: '#2E7D32',
    [ColorShade.S900]: '#1B5E20',
    [ColorShade.SA100]: '#B9F6CA',
    [ColorShade.SA200]: '#69F0AE',
    [ColorShade.SA400]: '#00E676',
    [ColorShade.SA700]: '#00C853',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  LIGHT_GREEN: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#F1F8E9',
    [ColorShade.S100]: '#DCEDC8',
    [ColorShade.S200]: '#C5E1A5',
    [ColorShade.S300]: '#AED581',
    [ColorShade.S400]: '#9CCC65',
    [ColorShade.S500]: '#8BC34A',
    [ColorShade.S600]: '#7CB342',
    [ColorShade.S700]: '#689F38',
    [ColorShade.S800]: '#558B2F',
    [ColorShade.S900]: '#33691E',
    [ColorShade.SA100]: '#CCFF90',
    [ColorShade.SA200]: '#B2FF59',
    [ColorShade.SA400]: '#76FF03',
    [ColorShade.SA700]: '#64DD17',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  LIME: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#F9FBE7',
    [ColorShade.S100]: '#F0F4C3',
    [ColorShade.S200]: '#E6EE9C',
    [ColorShade.S300]: '#DCE775',
    [ColorShade.S400]: '#D4E157',
    [ColorShade.S500]: '#CDDC39',
    [ColorShade.S600]: '#C0CA33',
    [ColorShade.S700]: '#AFB42B',
    [ColorShade.S800]: '#9E9D24',
    [ColorShade.S900]: '#827717',
    [ColorShade.SA100]: '#F4FF81',
    [ColorShade.SA200]: '#EEFF41',
    [ColorShade.SA400]: '#C6FF00',
    [ColorShade.SA700]: '#AEEA00',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  YELLOW: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FFFDE7',
    [ColorShade.S100]: '#FFF9C4',
    [ColorShade.S200]: '#FFF59D',
    [ColorShade.S300]: '#FFF176',
    [ColorShade.S400]: '#FFEE58',
    [ColorShade.S500]: '#FFEB3B',
    [ColorShade.S600]: '#FDD835',
    [ColorShade.S700]: '#FBC02D',
    [ColorShade.S800]: '#F9A825',
    [ColorShade.S900]: '#F57F17',
    [ColorShade.SA100]: '#FFFF8D',
    [ColorShade.SA200]: '#FFFF00',
    [ColorShade.SA400]: '#FFEA00',
    [ColorShade.SA700]: '#FFD600',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  AMBER: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FFF8E1',
    [ColorShade.S100]: '#FFECB3',
    [ColorShade.S200]: '#FFE082',
    [ColorShade.S300]: '#FFD54F',
    [ColorShade.S400]: '#FFCA28',
    [ColorShade.S500]: '#FFC107',
    [ColorShade.S600]: '#FFB300',
    [ColorShade.S700]: '#FFA000',
    [ColorShade.S800]: '#FF8F00',
    [ColorShade.S900]: '#FF6F00',
    [ColorShade.SA100]: '#FFE57F',
    [ColorShade.SA200]: '#FFD740',
    [ColorShade.SA400]: '#FFC400',
    [ColorShade.SA700]: '#FFAB00',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  ORANGE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FFF3E0',
    [ColorShade.S100]: '#FFE0B2',
    [ColorShade.S200]: '#FFCC80',
    [ColorShade.S300]: '#FFB74D',
    [ColorShade.S400]: '#FFA726',
    [ColorShade.S500]: '#FF9800',
    [ColorShade.S600]: '#FB8C00',
    [ColorShade.S700]: '#F57C00',
    [ColorShade.S800]: '#EF6C00',
    [ColorShade.S900]: '#E65100',
    [ColorShade.SA100]: '#FFD180',
    [ColorShade.SA200]: '#FFAB40',
    [ColorShade.SA400]: '#FF9100',
    [ColorShade.SA700]: '#FF6D00',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  DEEP_ORANGE: new Proxy<Record<ColorShade, string>>({
    [ColorShade.S50]: '#FBE9E7',
    [ColorShade.S100]: '#FFCCBC',
    [ColorShade.S200]: '#FFAB91',
    [ColorShade.S300]: '#FF8A65',
    [ColorShade.S400]: '#FF7043',
    [ColorShade.S500]: '#FF5722',
    [ColorShade.S600]: '#F4511E',
    [ColorShade.S700]: '#E64A19',
    [ColorShade.S800]: '#D84315',
    [ColorShade.S900]: '#BF360C',
    [ColorShade.SA100]: '#FF9E80',
    [ColorShade.SA200]: '#FF6E40',
    [ColorShade.SA400]: '#FF3D00',
    [ColorShade.SA700]: '#DD2C00',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  BROWN: new Proxy<Partial<Record<ColorShade, string>>>({
    [ColorShade.S50]: '#EFEBE9',
    [ColorShade.S100]: '#D7CCC8',
    [ColorShade.S200]: '#BCAAA4',
    [ColorShade.S300]: '#A1887F',
    [ColorShade.S400]: '#8D6E63',
    [ColorShade.S500]: '#795548',
    [ColorShade.S600]: '#6D4C41',
    [ColorShade.S700]: '#5D4037',
    [ColorShade.S800]: '#4E342E',
    [ColorShade.S900]: '#3E2723',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  GREY: new Proxy<Partial<Record<ColorShade, string>>>({
    [ColorShade.S50]: '#FAFAFA',
    [ColorShade.S100]: '#F5F5F5',
    [ColorShade.S200]: '#EEEEEE',
    [ColorShade.S300]: '#E0E0E0',
    [ColorShade.S400]: '#BDBDBD',
    [ColorShade.S500]: '#9E9E9E',
    [ColorShade.S600]: '#757575',
    [ColorShade.S700]: '#616161',
    [ColorShade.S800]: '#424242',
    [ColorShade.S900]: '#212121',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),

  BLUE_GREY: new Proxy<Partial<Record<ColorShade, string>>>({
    [ColorShade.S50]: '#ECEFF1',
    [ColorShade.S100]: '#CFD8DC',
    [ColorShade.S200]: '#B0BEC5',
    [ColorShade.S300]: '#90A4AE',
    [ColorShade.S400]: '#78909C',
    [ColorShade.S500]: '#607D8B',
    [ColorShade.S600]: '#546E7A',
    [ColorShade.S700]: '#455A64',
    [ColorShade.S800]: '#37474F',
    [ColorShade.S900]: '#263238',
  }, {
    get(target, prop: string | symbol) {
      if (isValidColorShade(prop)) {
        return target[ColorShade[prop]];
      }
      return target[ColorShade.S50];
    }
  }),
};
