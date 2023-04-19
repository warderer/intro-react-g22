const getCountryList = async () => {
  const req = await fetch('https://restcountries.com/v3.1/all')
  const data = req.json()
  return data
}

export default getCountryList
