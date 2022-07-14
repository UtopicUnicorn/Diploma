import Repository from "../mixins/Repository";
import {ItemsInterface} from "../model/itemsInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: ItemsInterface, key: string|null) {
        return Repository.post(urlEnums.items+`/${key}`, body);
    },
    get(key : string|null){
        return Repository.get(urlEnums.items+`/${key}`);
    },
    delete(id : string){
        return Repository.delete(urlEnums.items + `/${id}`);
    }
}
