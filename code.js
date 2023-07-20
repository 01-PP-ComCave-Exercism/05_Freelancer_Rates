/**
 * const BILLABLE_DAYS: billable days per month
 * const WORKING_HRS_PER_DAY: working hours per day
 *
 */

export const BILLABLE_DAYS = 22;
export const WORKING_HRS_PER_DAY = 8;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * WORKING_HRS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
   return Math.floor(budget/dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const DISCOUNTABLE_TIME = Math.floor(numDays/BILLABLE_DAYS)*BILLABLE_DAYS;
  const DISCOUNTED_TIME = DISCOUNTABLE_TIME * discount;
  const FULL_TIME = numDays%BILLABLE_DAYS;
  return Math.ceil(((DISCOUNTABLE_TIME - DISCOUNTED_TIME ) + FULL_TIME )* dayRate(ratePerHour));
}
