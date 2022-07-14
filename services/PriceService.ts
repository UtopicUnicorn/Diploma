import Repository from "../mixins/Repository";
import {PriceRulesInterface} from "../model/priceRulesInterface";
import {urlEnums} from "../mixins/urlEnums";


// const url = 'price-rules'

export default {
    post(body:PriceRulesInterface, user: string | null ) {
        return Repository.post(urlEnums.priceRules + `/${user}`, body);
    },
    get(user: string | null) {
      return Repository.get(urlEnums.priceRules + `/${user}`);
    },
    delete(id: string){
        return Repository.delete(urlEnums.priceRules + `/${id}`);
    },
    patch(id: string, body: PriceRulesInterface){
        return Repository.patch(urlEnums.priceRules + `/${id}`, body);
    },
    getOne(id: string){
        return Repository.get(urlEnums.priceRules + `/${id}`);
    }
}
