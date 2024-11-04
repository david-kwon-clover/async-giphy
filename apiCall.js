require("dotenv").config();

async function getImages(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        const urls = await json.data.map((element) => {
            return element.url;
        })
        console.log(urls);
        return urls;
    } catch (error) {
        console.log(error);
        
    }
}

getImages("chickens");