import Repository from "../mixins/Repository";
import {PriceRulesInterface} from "../model/priceRulesInterface";
import {urlEnums} from "../mixins/urlEnums";


// const url = 'price-rules'

export default {
    post(body:PriceRulesInterface ) {
        return Repository.post(urlEnums.priceRules, body);
    },
    get() {
      return Repository.get(urlEnums.priceRules);
    },
    delete(id: string){
        return Repository.delete(urlEnums.priceRules + `/${id}`);
    },
    patch(id: string, body: PriceRulesInterface){
        return Repository.patch(urlEnums.priceRules + `/${id}`, body);
    }

}
