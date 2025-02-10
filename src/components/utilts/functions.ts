/**
 *
 * @param {string} text - the text to be sliced
 * @param {number} length - the length of the sliced text
 * @returns - the sliced text with "..." at the end
 */

export function sliceText(text: string, length: number = 50) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}
