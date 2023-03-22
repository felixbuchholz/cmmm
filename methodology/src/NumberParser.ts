/* eslint-disable no-cond-assign */

export class NumberParser {
  _group: RegExp
  _decimal: RegExp
  _numeral: RegExp
  _index: (d: string) => number | undefined
  constructor (locale) {
    const parts = new Intl.NumberFormat(locale).formatToParts(
      testNumberSeparators
    )
    const numerals = [
      ...new Intl.NumberFormat(locale, { useGrouping: false }).format(
        testNumberNumerals
      ),
    ].reverse()
    const index = new Map(numerals.map((d, i) => [d, i]))
    this._group = new RegExp(
      `[${parts.find(d => d.type === 'group')?.value}]`,
      'g'
    )
    this._decimal = new RegExp(
      `[${parts.find(d => d.type === 'decimal')?.value}]`
    )
    this._numeral = new RegExp(`[${numerals.join('')}]`, 'g')
    this._index = d => index.get(d)
  }
  parse (string): number {
    return (string = string
      .trim()
      .replace(this._group, '')
      .replace(this._decimal, '.')
      .replace(this._numeral, this._index))
      ? +string
      : NaN
  }
}
const testNumberSeparators = 12345.6
const testNumberNumerals = 9876543210
