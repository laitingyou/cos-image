# &lt;cos-image&gt; image component.

Tencent cloud image loading optimization control.
## DEMO
![loading](./asset/loading.gif "loading")
![loading2](./asset/loading2.gif "loading2")
## Installation

```
$ npm install cos-image
```

## Usage

```js
import { CosImage } from 'cos-image'

or

import CosImage from 'cos-image'
Vue.use(CosImage)
```

```html
// simple
<cos-image  src="xxx.png"></cos-image>

// senior
<cos-image
      alt="load fail"
	  thumbnail="thumbnail.png"
	  :thumbnailClarity="1"
      error-image="error.png"
      src="source.png"
	  :clarity="70"
      ></cos-image
```

### Optional props

- `cos-image[thumbnail]` Thumbnail, the default thumbnail of the original image.
- `cos-image[thumbnailClarity]` The definition of thumbnail is 1-100, and the default is 1.
- `cos-image[src]` Picture display address.
- `cos-image[clarity]` The definition of the original image is 1-100, and the default is 100.
- `cos-image[type]` The definition of thumbnail is 1-100, and the default is 1.
- `cos-image[loading]` Loading before the end of the loading of the original image, which is self-contained by default.
- `cos-image[errorImage]` Failed bitmap, empty by default.


### Attributes

Supports attributes and events for all native img elements.

### Events

- `error` – Image loading failure event.
- `load` – Image loading success event.

```
<cos-image
	 @load="successEvent"
	 @error="failEvent"
      src="source.png"
      ></cos-image
```

## Browser support

- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## Development

```
npm install
npm run serve
```

## License

Distributed under the MIT license. See LICENSE for details.
