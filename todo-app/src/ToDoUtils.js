export function echoFirstLine(text) {
  const firstLine = text.split(/\r\n|\n|\r/)[0];

  return firstLine;
}
