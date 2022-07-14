import Repository from "../mixins/Repository";
import {PartnersInterface} from "../model/partnersInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: PartnersInterface, key: string|null){
        return Repository.post(urlEnums.partners +  `/${key}`, body);
    },
    get(key: string|null){
        return Repository.get(urlEnums.partners + `/${key}`);
    },
    getOne(id:string){
        return Repository.get(urlEnums.partners + `/${id}`);
    },
    delete(id: string){
        return Repository.delete(urlEnums.partners + `/${id}`);
    },
    update(id: string, body: PartnersInterface){
        return Repository.patch(urlEnums.partners + `/${id}`, body);
    }
}
