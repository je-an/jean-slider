## Description

Provides functionality for a slider mechanism

## Support
Supports AMD eco system. If there is no loader, Slider is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var slider = new Slider({
    isExpanded: false,
    width: 300,
    height: 300,
    placementType: Slider.placementType.LEFT
});
// Append ui element to the slider
slider.add("1", "<div>ui-element</div>");

// Remove ui element from slider
slider.remove("1");

```
- Use it with require.js
```js
require(["path/to/Slider"], function(Slider){
    // Work with Slider
});
```
## Installation

`npm install jean-slider --save --legacy-bundling`

## API Reference

### Slider Constructor

**Options**

- **isExpanded**: `Boolean` - `optional` - True if slider is expanded, false otherwise
- **width**: `Number` - `optional` - width of the slider - needed if slider is placed left or right
- **height**: `Number` - `optional` - height of the slider - needed if slider is placed top or botton
- **placementType**: `Slider.placementType` - `optional` - side of the screen, where the slider will be placed

### Slider.add(id, name, details) 

Adds an element to the slider

**Parameters**
- **id**: `String` - id of the element
- **element**: `HTMLElement` - the html element which shall be added

**Returns**
- `Boolean` - True, if the element is added, exception otherwise

### Slider.remove(id) 

Removes an element from the slider

**Parameters**
- **id**: `String` - id of the element to be removed

**Returns**
- `Boolean` - True, if the element is removed, false otherwise

## Tests

- Open spec/spec-runner.html in browser to see the test cases.
- Open example/index.html in browser to see the playground.

## License

MIT