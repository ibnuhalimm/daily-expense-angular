export class NumberHelper {
  /**
   * Format number with a thousand separator
   * @param numb
   * @param separator
   */
  static currencyFormat(numb: number, separator: '.' | ',' = '.'): string {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
}
