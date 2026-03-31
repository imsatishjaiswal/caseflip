/**
 * capify
 * A robust string case transformation library.
 */

/**
 * Converts a string to Sentence case.
 * Capitalizes the first letter of each sentence (after . ! ?) and lowers the rest.
 * @param {string} str - The string to convert.
 * @returns {string} - The sentence-cased string.
 */
export function toSentenceCase(str) {
  if (typeof str !== "string") return "";
  if (!str.trim()) return str;

  return str
    .toLowerCase()
    .replace(/(^\s*|[\.!\?]\s+)(.)/g, (match) => match.toUpperCase());
}

/**
 * Converts a string to lowercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The lowercased string.
 */
export function toLowerCase(str) {
  if (typeof str !== "string") return "";
  return str.toLowerCase();
}

/**
 * Converts a string to UPPERCASE.
 * @param {string} str - The string to convert.
 * @returns {string} - The uppercased string.
 */
export function toUpperCase(str) {
  if (typeof str !== "string") return "";
  return str.toUpperCase();
}

/**
 * Converts a string to Capitalize Case (Title Case).
 * Capitalizes the first letter of each word.
 * @param {string} str - The string to convert.
 * @returns {string} - The capitalized string.
 */
export function toCapitalizeCase(str) {
  if (typeof str !== "string") return "";
  if (!str.trim()) return str;

  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Converts a string to aLtErNaTiNg cAsE.
 * @param {string} str - The string to convert.
 * @returns {string} - The alternating-cased string.
 */
export function toAlternatingCase(str) {
  if (typeof str !== "string") return "";
  if (!str.trim()) return str;

  return str
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

export default {
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toCapitalizeCase,
  toAlternatingCase,
};
