import Cookies from 'js-cookie'

/**
 * js-scroll-behavior 紀錄窗口滾動位置 v1.0.0
 */

/**
 * 設定
 */
let config = {
  _el: null,
  _baseUrl: location.origin
}

const jsScrollBehavior = options => {

  if (typeof options.el === 'string') {
    config._el = options.el
  }

  if (typeof options.baseUrl === 'string') {
    config._baseUrl = options.baseUrl
  }

  const getEl = () => document.querySelector(config._el)

  const getScrollPosition = () => {
    const el = getEl()
    return {
      x: el ? el.scrollLeft : window.pageXOffset,
      y: el ? el.scrollTop : window.pageYOffset
    }
  }

  const setScrollPosition = (position = { x: 0, y: 0 }) => {
    const el = getEl()
    if (el) {
      el.scrollLeft = position.x
      el.scrollTop = position.y
    } else {
      window.scrollTo(position.x, position.y)
    }
  }

  const setPosCookies = () => {
    let positon = getScrollPosition()
    const url = document.location.href
    const name = url.substr(url.lastIndexOf(config._baseUrl) + config._baseUrl.length)
    Cookies.set(name, positon)
  }

  const checkCookie = () => {
    const url = document.location.href
    const name = url.substr(url.lastIndexOf(config._baseUrl) + config._baseUrl.length)
    const positon = Cookies.getJSON(name)
    setScrollPosition(positon)
  }

  this.init = (onwindowload = false) => {
    if (onwindowload) {
      window.onload = checkCookie
    } else {
      checkCookie()
    }
    window.onbeforeunload = setPosCookies
  }

  return this

}

export default jsScrollBehavior
