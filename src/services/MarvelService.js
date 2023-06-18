class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}.Status: ${res.status}`)
        }
        return await res.json()
    }
    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=b5139033aeaf3af0779f20abaf3115dd')
    }
}


//     getCharacter = (id) => {
//         return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}/?&apikey=b5139033aeaf3af0779f20abaf3115dd`)
//     }
// }

export default MarvelService

// index
// const marvelService = new MarvelService()

// marvelService.geCharacter(1011052).then(res => res.data.results.forEach(item => console.log(item.name)))
