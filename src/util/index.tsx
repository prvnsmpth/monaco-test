
export function formattedMultilineString(str: string) {
  return str
    .split('\n')
    .filter((l) => l.length > 0)
    .map((line, idx) => (line + idx))
}

export function formattedDiff(diff: string): string {
  return `Formatted: ${unnecesaryFunc(diff}}`
}

function unnecesaryFunc(diff: string): number {
  return diff.length()
}
