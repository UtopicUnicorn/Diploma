import Repository from "../mixins/Repository";
import {NomenclatureInterface} from "../model/nomenclatureInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: NomenclatureInterface){
        return Repository.post(urlEnums.nomenclature, body);
    },
    get(){
        return Repository.get(urlEnums.nomenclature);
    },
    delete(id: string){
        return Repository.delete(urlEnums.nomenclature + `/${id}`);
    }
}
