import Repository from "../mixins/Repository";

import {PurchasesInterface} from "../model/purchasesInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body:PurchasesInterface, key: string|null){
        return Repository.post(urlEnums.purchases + `/${key}`, body);
    },
    get(key: string|null){
        return Repository.get(urlEnums.purchases+ `/${key}`);
    },
    delete(id: string){
        return Repository.delete(urlEnums.purchases + `/${id}`);
    }
}
