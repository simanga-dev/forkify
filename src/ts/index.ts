import axios from 'axios'

console.log('are we good')

async function getResults(query: string){


    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
    console.log(res)
    console.log('testing 123');
}

getResults('pizza')

console.log("this is test")


