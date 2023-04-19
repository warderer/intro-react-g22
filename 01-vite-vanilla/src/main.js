import './styles/style.css'
import HolaMundo from './components/HolaMundo.js'
import Countries from './components/Countries.js'

document.querySelector('#app').innerHTML = `
  ${HolaMundo()}
  ${Countries()}
`
