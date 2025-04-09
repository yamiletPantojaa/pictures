import axios from "axios";

const searchImages = async(term) => { 
    const url = 'https://api.unsplash.com/search/photos/?client_id=35mbR9MQyOm__zlGd3N65SG1qgfJJuJbPc-0e-aEWHo'
    
    const response = await axios.get(url, {
        params:{ 
            query: 'cars'
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages