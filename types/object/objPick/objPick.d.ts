/**
 * Pick specific keys from an object.
 * @example
 * ```ts
 * const obj = {
 *   "one": true,
 *   "two": false,
 *   "foo": "bar"
 * };
 *
 * objPick(obj, ['two', 'foo']);
 *
 * =>
 * {
 *   "two": false,
 *   "foo": "bar"
 * }
 * ```
 *
 * @typedef {Object} Options
 * @property {Boolean} [upsert=false] Create new properties for missing keys.
 * @property {any} [defaultValue] Default value to use for upsert.
 *
 * @param {Object} obj Source object.
 * @param {any[]} keys Array of keys to objPick.
 * @param {Options} options Object objPick options.
 *
 * @returns {Object} Object with specified keys.
 */
declare const objPick: <Type extends Record<any, any>, Key extends keyof Type>(obj: Type, keys: Key[] | string[], options?: {
    defaultValue?: any;
    upsert?: boolean;
} | undefined) => Record<string | Key, Type[keyof Type]>;
export default objPick;
//# sourceMappingURL=objPick.d.ts.map