import Repository from "../mixins/Repository";
import {DealsInterface} from "../model/dealsInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body:DealsInterface, key: string|null) {
        return Repository.post(urlEnums.deals +`/${key}`, body);
    },
    get(key: string|null) {
        return Repository.get(urlEnums.deals + `/${key}`);
    },
    delete(id: string){
        return Repository.delete(urlEnums.deals + `/${id}`);
    }

}
