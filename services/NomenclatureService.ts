import Repository from "../mixins/Repository";
import {NomenclatureInterface} from "../model/nomenclatureInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(key: string|null, body: NomenclatureInterface){
        console.log(body);
        return Repository.post(urlEnums.nomenclature + `/${key}`, body);
    },
    get(key: string|null){
        return Repository.get(urlEnums.nomenclature+ `/${key}`);
    },
    delete(id: string){
        return Repository.delete(urlEnums.nomenclature + `/${id}`);
    }
}
