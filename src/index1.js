'use strict'

function list(names) {
  //your code here
  let length = names.length

  if (length === 0) {
    return ''
  }
  return (
    names
      .slice(0, length - 1)
      .map((p) => p.name)
      .join(', ') +
    (length > 1 ? ' & ' : '') +
    names[length - 1].name
  )
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
// returns 'Bart, Lisa & Maggie'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
// returns 'Bart & Lisa'
console.log(list([{ name: 'Bart' }]))
// returns 'Bart'
console.log(list([]))
