import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '58623f0abemsh0519eab60ce09dap1e614ajsn80c52339a08d'
    }
  };
  

export const getPlacesData = async(sw,ne) => {
    try{
        const { data: { data } } = await axios.get(URL, options);

        return data;

    } catch(error){
        console.log(error);
    }
}