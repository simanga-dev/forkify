import axios from 'axios'

export default class Seach {
  query: string;
  rusults: any;

  constructor (query: string){
    this.query = query;
  }



  
  async getResults() {
   try {

     const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
     this.rusults = res.data;
     console.log(this.rusults);
  
    } catch (error){
      alert(error);
    }
    return 0;
  }
  
}
