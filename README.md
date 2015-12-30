# brp-template
> `thanks {president}` + `{president: 'Obama'}` = `thanks Obama`

[![circle-ci](https://img.shields.io/circleci/project/w00tmast3r/brp-template.svg?style=flat-square)](https://circleci.com/gh/w00tmast3r/brp-template) [![dependencies](https://img.shields.io/david/w00tmast3r/brp-template.svg?style=flat-square)](https://david-dm.org/w00tmast3r/brp-template) [![dev-dependencies](https://img.shields.io/david/dev/w00tmast3r/brp-template.svg?style=flat-square)](https://david-dm.org/w00tmast3r/brp-template) [![code-climate](https://img.shields.io/codeclimate/github/w00tmast3r/brp-template.svg?style=flat-square)](https://codeclimate.com/github/w00tmast3r/brp-template) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

---

Applies [string-template](https://www.npmjs.com/package/string-template) to the files in your pipeline.

## Install

Make sure you have the latest version of [Node](https://nodejs.org) installed first!

```sh
npm install brp-template --save
```

Then you can add brp-template to your build pipeline.

```js
const Template = require('brp-template')
...
let template = new Template()
template.supply({
  foo: '{foo} value'
})
brp.buildWith(template)
```

## Documentation

### constructor(opts)

| Option            | Description                                                  | Default                   |
| ----------------- | ------------------------------------------------------------ | ------------------------- |
| `glob`            | the glob used to match streamed files                        | `'*.@(json|mcmeta|info)'` |
| `processUnmarked` | `true` if files not included in the pack should be processed | `false`                   |

### Template.supply(obj)

Appends a map of substitutions to the template.