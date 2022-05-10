import Repository from "../mixins/Repository";

import {PurchasesInterface} from "../model/purchasesInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body:PurchasesInterface){
        return Repository.post(urlEnums.purchases, body);
    },
    get(){
        return Repository.get(urlEnums.purchases);
    },
    delete(id: string){
        return Repository.delete(urlEnums.purchases + `/${id}`);
    }
}
