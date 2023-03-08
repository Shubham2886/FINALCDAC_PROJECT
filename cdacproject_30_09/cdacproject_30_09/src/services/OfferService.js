import axios from 'axios';

const OFFER_API_BASE_URL = "http://localhost:8181/api"

class OfferService {
    setOffer(offer){
        console.log(offer)
        return axios.post(OFFER_API_BASE_URL+'/offer', offer);
    
    }
    
    getOffer(lender_id){
        console.log(lender_id)
        return axios.get(OFFER_API_BASE_URL+"/offers/"+lender_id);
    
    }
    
    deactiveOfferById(id){
        return axios.put(OFFER_API_BASE_URL+'/offers/'+id)
    }
   
}

export default new OfferService()