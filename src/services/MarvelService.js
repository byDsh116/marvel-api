class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public'
    _apiKey = '&apikey=b5139033aeaf3af0779f20abaf3115dd'

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}.Status: ${res.status}`)
        }
        return await res.json()
    }
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}/characters?limit=9&offset=200${this._apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}/characters/${id}/?${this._apiKey}`)
    }
}

export default MarvelService

// index
// const marvelService = new MarvelService()

// marvelService.geCharacter(1011052).then(res => res.data.results.forEach(item => console.log(item.name)))
