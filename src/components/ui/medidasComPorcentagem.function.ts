export default (estilo: string | number | undefined) => {
  if (typeof estilo === 'string' && estilo.includes('/')) {
    const [numerator, denominator] = estilo.split('/').map(Number)
    if (!isNaN(numerator) && !isNaN(denominator)) {
      return `${(numerator / denominator) * 100}%`
    }
  }
  if (estilo === 'full') {
    return '100%'
  }
  if (typeof estilo === 'number') {
    return `${estilo * 4}px`
  }
  return 'auto'
}
