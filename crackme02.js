// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'x'

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme2(password)