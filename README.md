
# Mat Design Colors

`mat-design-colors` is a TypeScript utility library that provides easy access to the Material Design color palette. It allows developers to use Material Design colors with a simple and intuitive API.

## Installation

Install the package via npm:

```bash
npm install mat-design-colors
```

or using yarn:

```bash
yarn add mat-design-colors
```

## Usage

Import the `MaterialColor` object and `ColorShade` enum from the library:

```typescript
import { MaterialColor, ColorShade } from 'mat-design-colors';

// Example usage
const red500 = MaterialColor.RED[ColorShade.S500];
console.log(red500); // Outputs: #F44336

const pinkA200 = MaterialColor.PINK[ColorShade.SA200];
console.log(pinkA200); // Outputs: #FF4081
```

### Available Colors

- **RED**
- **PINK**
- **PURPLE**
- **DEEP_PURPLE**
- **INDIGO**
- **BLUE**
- **LIGHT_BLUE**
- **CYAN**
- **TEAL**
- **GREEN**
- **LIGHT_GREEN**
- **LIME**
- **YELLOW**
- **AMBER**
- **ORANGE**
- **DEEP_ORANGE**
- **BROWN**
- **GREY**
- **BLUE_GREY**

### Available Shades

Each color includes the following shades:

- `S50`, `S100`, `S200`, `S300`, `S400`, `S500`, `S600`, `S700`, `S800`, `S900`
- `SA100`, `SA200`, `SA400`, `SA700` (for colors with accent shades)

## API

### `MaterialColor`

The `MaterialColor` object contains all the colors from the Material Design palette. Each color is accessible through a property on this object.

### `ColorShade`

The `ColorShade` enum provides all the possible shades for a color, including standard and accent shades.

## Example

```typescript
import { MaterialColor, ColorShade } from 'mat-design-colors';

// Accessing a color
const indigo500 = MaterialColor.INDIGO[ColorShade.S500];
console.log(indigo500); // Outputs: #3F51B5

// Accessing an accent color
const redA200 = MaterialColor.RED[ColorShade.SA200];
console.log(redA200); // Outputs: #FF5252

// Fallback to default shade if invalid shade is accessed
const invalidShade = MaterialColor.RED['999' as ColorShade];
console.log(invalidShade); // Outputs: #FFEBEE (S50)
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Author

**Sitharaj Seenivasan**

- GitHub: [@sitharaj88](https://github.com/sitharaj88)
