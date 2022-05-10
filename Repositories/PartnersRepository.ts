import Repository from "../mixins/Repository";
import {PartnersInterface} from "../model/partnersInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: PartnersInterface){
        return Repository.post(urlEnums.partners, body);
    },
    get(){
        return Repository.get(urlEnums.partners);
    },
    delete(id: string){
        return Repository.delete(urlEnums.partners + `/${id}`);
    },
    update(id: string, body: PartnersInterface){
        return Repository.patch(urlEnums.partners + `/${id}`, body);
    }
}
