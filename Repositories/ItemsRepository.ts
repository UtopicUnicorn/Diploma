import Repository from "../mixins/Repository";
import {ItemsInterface} from "../model/itemsInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: ItemsInterface) {
        return Repository.post(urlEnums.items, body);
    },
    get(){
        return Repository.get(urlEnums.items);
    },
    delete(id : string){
        return Repository.delete(urlEnums.items + `/${id}`);
    }
}
