/* eslint-disable no-param-reassign */
// @ts-nocheck
let timerId: number = 0
export function debounce(func: Function | Promise<any>, wait: number) {
  return function debouncedFunction(...args: Array<any>) {
    return new Promise(resolve => {
      if (timerId) {
        window.clearTimeout(timerId)
      }

      timerId = window.setTimeout(
        () => (func.then ? func.apply(this, args).then(resolve) : resolve(func.apply(this, args))),
        wait
      )
    })
  }
}

export function groupBy<T, K>(list: T[], getKey: (item: T) => K) {
  const map = new Map<K, T[]>()
  list.forEach(item => {
    const key = getKey(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })

  const result: Array<{key: K, options: T[]}> = []
  map.forEach((options: T[], key: K) => {
    result.push({ key, options })
  })

  return result
}

const isObject = (obj: any) => obj && typeof obj === 'object'

/** objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export function mergeDeep(...objects) {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key]
      const oVal = obj[key]
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export function combineStyles(...styles) {
  return function CombineStyles(theme) {
    const outStyles = styles.map((arg = {}) => {
      // Apply the "theme" object for style functions.
      if (typeof arg === 'function') {
        return arg(theme)
      }
      // Objects need no change.
      return arg
    })

    return outStyles.reduce((acc, val) => mergeDeep(acc, val))
  }
}
