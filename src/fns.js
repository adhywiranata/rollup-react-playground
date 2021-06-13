export function noop() {}

export function heavyloop(callback = console.log) {
  for (let i = 0; i < 1e6; i++) {
    callback(i);
  }
}

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
