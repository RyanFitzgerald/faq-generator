# FAQ Generator

FAQ Generator is a jQuery-based plugin that allows you to easily generate a user-friendly method to display FAQs.

## Installation & Setup

All the installation that is required is simply including the compiled CSS and JS files in your document:

```html
<link rel="stylesheet" type="text/css" href="path/to/faq-generator.css">
...
<script src="text/css" href="path/to/faq-generator.min.js"></script>
```

FAQ Generator will now be available on every page it is included on.

The HTML structure is to have an unordered list with a list element for every question / answer pair. Inside each list element, there are 2 divs, the first for the question and the second for the answer. An example structure is as follows:

```HTML
<ul id="faq-list">
	<li>
		<div>
			This is a question
		</div>
		<div>
			This is an answer
		</div>
	</li>
	<li>
		<div>
			This is a question
		</div>
		<div>
			This is an answer
		</div>
	</li>
</ul>
```

## Demo

A demo can be found [here](http://ryanfitzgerald.github.io/faq-generator/demo.html).

## Configuration

The follow properties are available for FAQ Generator upon initialization:

 Property | Description | Default
 -------- | ----------- | -------
 theme | selects a theme for the generator; 'basic' or 'material' are currently available themes | none
 limitOne | whether or not only one FAQ answer can be open at once | false
 startOpen | whether or not all answers start open | false
 icon | whether or not you want the generated icon to show | false

Example usage:

```HTML
<ul id="faq-list">
	<li>
		<div>
			This is a question
		</div>
		<div>
			This is an answer
		</div>
	</li>
	<li>
		<div>
			This is a question
		</div>
		<div>
			This is an answer
		</div>
	</li>
</ul>
```

```js
$("#faq-list").faqGenerator({
	theme: "basic",
	limitOne: true,
	startOpen: false,
	icon: true
});
```

## Customization

The base styling that comes with the plugin can be easily customized.

The followed classes are available:

 Class Name | Description
 ---------- | -----------
 .faqgen | Wraps the entire FAQ list (applied to ul element)
 .faqgen-item | Wraps each question / answer pair (applied to li elements)
 .faqgen-question | Wraps each question (applies to first div within each li)
 .faqgen-answer | Wraps each answer (applies to second div within each li)
 .facgen-icon | Genereated icon in each Question header if icon = true on initialization
 
## Adding Themes

Themes can be easily added by defining new CSS rules with a theme name. The theme is applied directly to the ul element, so define any themes in relation to that element and the elements listed in the table above.

To get an idea of how a theme could be generated, take a look at the sass file for this project.

## License

MIT License (see LICENSE.md)
