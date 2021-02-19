// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''

let tmp = ''
const crackme12 = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (i % 2 === 0) {
      tmp += String.fromCharCode(((password.charCodeAt(i) + 29 - 65) % 26) + 97)
    } else {
      tmp += String.fromCharCode(((password.charCodeAt(i) + 55 - 65) % 26) + 65)
    }
    tmp = tmp.trim()
  }
  password = password.toUpperCase()
  if (tmp.includes('rQgL') && password.includes('AHIS') && password.indexOf('ISGRA') && password.split('').slice(0, -13).reverse().join('') === 'ART' && tmp.search('uDfH') && password.length === 16) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme12(password)