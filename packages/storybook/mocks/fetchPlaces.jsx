const ENDPOINT = 'https://ajax.bestday.com/v1/searchservices/getSearchJson.aspx'

const buildQueryString = (obj) => Object.keys(obj)
  .map(key => `${key}=${obj[key]}`)
  .join('&')

export default async (searchText) => {
  const params = {
    Lenguaje: 'ESP',
    ItemTypes: 'H:5,D:5,C:5',
    ItemTypesOrder: 'D,C,H',
    Filters: '',
    Af: 'bestday',
    PalabraBuscada: searchText
  }

  const qs = buildQueryString(params)
  const url = `${ENDPOINT}?${qs}`
  const res = await fetch(url)
  const data = await res.json()

  return data
}
