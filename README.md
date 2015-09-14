# postxml-markdown
[![npm version][npm-image]][npm-url]

> [PostXML] plugin adds classes to markdown html elemnts.

## Installation
`npm i postxml-markdown --save-dev`

## Usage
[Postxml]

## Example

### Input
```html
<p></p>
```

### Output
```html
<p class="markdown__p"></p>
```

##Options

### block
	Type: Object

#### name
	Type: String<br>
	Default: `markdown`

#### separator
	Type: String<br>
	Default: `___`

### tags
	Type: Array of Objects (tags)

#### tag
	Type: Object<br>
	Example:
		```js
		{
			name: 'p', // Default name of tag
			element: 'paragraph', // Name of element (block__paragraph)
			tag: 'div' // Output tag
		}
		```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-markdown
[npm-image]: http://img.shields.io/npm/v/postxml-markdown.svg?style=flat-square
