/**
 * Returns an array of values of an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false,
 * };
 *
 * objValues(obj);
 * => [true, false]
 * ```
 * @param {Object} obj Source object.
 *
 * @returns {Array} Values of the object.
 */
declare const objValues: <Type extends Record<any, any>, Key extends keyof Type, Value extends Type[Key]>(obj: Type) => Value[];
export default objValues;
//# sourceMappingURL=objValues.d.ts.map