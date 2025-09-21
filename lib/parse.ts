/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

export const parseJSON = (str: string) => {
  // Find the first occurrence of '{' or '['
  const firstBracket = str.indexOf('{');
  const firstSquare = str.indexOf('[');
  let start = -1;

  if (firstBracket === -1) {
    start = firstSquare;
  } else if (firstSquare === -1) {
    start = firstBracket;
  } else {
    start = Math.min(firstBracket, firstSquare);
  }

  if (start === -1) {
    // If no brackets, try parsing the whole string directly
    try {
      return JSON.parse(str);
    } catch (e) {
      throw new Error("No JSON object or array found in the string.");
    }
  }

  // Determine the closing bracket
  const opener = str[start];
  const closer = opener === '{' ? '}' : ']';

  // Find the last occurrence of the closing bracket
  const end = str.lastIndexOf(closer) + 1;

  if (end === 0) { // lastIndexOf returns -1 if not found, +1 makes it 0
      throw new Error("JSON closing bracket not found.");
  }
  
  return JSON.parse(str.substring(start, end));
};

export const parseHTML = (str: string, opener: string, closer: string) => {
  const start = str.indexOf('<!DOCTYPE html>');
  const end = str.lastIndexOf(closer);
  return str.substring(start, end);
};