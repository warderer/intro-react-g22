import getCountryList from '../services'

const app = document.getElementById('app')
const p = document.createElement('p')

const Countries = () => {
  getCountryList().then(data => {
    p.textContent = data[0].name.official
    app.appendChild(p)
  })

  getCountryList()

  return ''
}

export default Countries
