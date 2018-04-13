
# Install & basic usage

Install the package

```bash
npm install --save-dev @studyportals/stylelint-config
```

Add beneath code to your `package.json`

```json
"stylelint": {
  "extends": "@studyportals/stylelint-config"
}
```

# Guidelines

## Syntax

* Use tabs for indentation.
* Try to limit your character length per line to 80 characters, we have a absolute limit of 120 characters.
* Do not include a space before the opening brace of declaration blocks (e.g. `.Foo{ .. }`).
* Place closing braces of declaration blocks on a new line.
* Include one space after `:` for each declaration.
* Each declaration should appear on its own line for more accurate error reporting.
* End all declarations with a semi-colon. The last declaration's is optional, but your code is more error prone without it.
* Prefix property values or color parameters with a leading zero (e.g., `0.5` instead of `.5` and `-0.5px` instead of `-.5px`).
* Uppercase all hex values, e.g., `#FFFFFF`.
* Use long hex values, e.g., `#FFFFFF` instead of `#FFF`.
* Quote attribute values in selectors, e.g., `input[type="text"]`. They’re only optional in some cases, and it’s a good practice for consistency.
* Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.

```scss
/* Bad example */
.Selector, .SelectorSecondary, .Selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  box-shadow:.5px 1px 2px #cccccc,inset 0 1px 0 #FFF
}

/* Good example */
.Selector, .SelectorSecondary, .Selector[type=text] {
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0.5px 1px 2px #CCCCCC, inset 0 1px 0 #FFFFFF;
}
```

## Nesting

Avoid unnecessary nesting. Consider nesting only when you must scope.

* We allow a nesting depth of 4 deep, to prevent a too deeply nested elements.
* Keep a empty line between after each nested selectors, for better readability.
* Keep a empty line between each declaration and the nested selector.

```scss
/* Bad example */
.Selector {
  padding:15px;
  .Nested{
    ...
  }
  .AnotherNested{
    .To{
      .Deep{
        .NestedChild{
          ...
        }
      }
    }
  }
}

/* Good example */
.Selector {
  padding:15px;

  .Nested{
    ...
  }

  .NestedChild{
    ...
  }
}
```

## Class names

* Write classes in [PascalCase](https://en.wikipedia.org/wiki/Pascal_case), don't use lowercase, dashes or underscores. (e.g. `.SomeExample`).
* Do not use shorthand notation, so use `.Button` instead of `.Btn`.
* Keep classes as short and succinct as possible.
* Use meaningful names, use structural or purposeful names over presentational.
* Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS.
* Use `.is-*` classes to describe a certain style within an current state.

```scss
/* Bad example */
.T{ ... }
.Red{ ... }
.Header{ ... }
.js-Header{ ... }

/* Good example */
.Tweet{ ... }
.Important{ ... }
.TweetHeader{ ... }
.is-Collapsed{ ... }
```

## `$Variable` names

* Write classes in [PascalCase](https://en.wikipedia.org/wiki/Pascal_case), don't use lowercase, dashes or underscores. (e.g. `.SomeExample`).
* Do not use shorthand notation, so use `.Button` instead of `.Btn`.

Apply these rules also to `@function` and `@import` names.

```scss
/* Bad example */
$colorGrey: lightgrey;
$color-grey: lightgrey;
$_SomeOtherColor: firebrick;

/* Good example */
$GreyL: lightgrey;
```

## `@import`

* Do **not** import `.css` files!
* Do **not** forget the underscore if the file has one.
* Add the extension to the filename.

```scss
/* Bad example */
@import "../path/to/some/stylesheet.css"; // Don't import css files
@import "../path/to/file"; // Define the file extension

/* Good example */
@import "../path/to/_file.scss";
```

## Comments

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

* Preferable use block comments above single-line comments.
* If you add reminder add a `TODO` before you start the comment (e.g. `/* TODO: Add styling for invalid state. */`).

