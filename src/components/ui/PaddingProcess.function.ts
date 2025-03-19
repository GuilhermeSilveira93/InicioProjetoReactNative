export default (p: number | number[] | undefined) => {
  if (p === undefined || p === null) {
    return '12px'
  }

  if (typeof p === 'number') {
    return `${p * 4}px`
  }

  if (Array.isArray(p)) {
    return p.map((value) => `${value * 4}px`).join(' ')
  }

  return '12px'
}
