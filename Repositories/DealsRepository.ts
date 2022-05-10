import Repository from "../mixins/Repository";
import {DealsInterface} from "../model/dealsInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body:DealsInterface) {
        return Repository.post(urlEnums.deals, body);
    },
    get() {
        return Repository.get(urlEnums.deals);
    },
    delete(id: string){
        return Repository.delete(urlEnums.deals + `/${id}`);
    }

}
