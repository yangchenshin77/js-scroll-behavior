# js-scroll-behavior

Record window (or element) scroll posiotion.

紀錄窗口滾動位置

## Use

```js
import jsScrollBehavior from './js-scroll-behavior'

const scrollBehavior = jsScrollBehavior({
  el: '.md-app-scroller', // Set scroller element, no set is use window
  baseUrl: window.baseUrl // Cookie name
})

scrollBehavior.init()
```
