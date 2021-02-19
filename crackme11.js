// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''

const crackme11 = (password) => {
  let tmp1 = password.split('').slice(0, 4).reverse().join('')
  let tmp2 = password.split('').slice(-4).reverse().join('')
  if (tmp1 + tmp2 === 'password' && password.length > 8) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme11(password)