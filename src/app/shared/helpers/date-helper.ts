export class DateHelper {

  /**
   * Check if the given data is valid date or not
   * @param dateObj
   * @return boolean
   */
  static isDate(dateObj: any): boolean {
    if (typeof dateObj !== 'undefined' || dateObj !== null) {
      return new Date(dateObj) instanceof Date && isNaN(dateObj);
    }

    return false;
  }
}
