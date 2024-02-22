export const isEmptyField = (value: string) => {
  let str = String(value).match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm)
  return str !== null ? true : false
}
