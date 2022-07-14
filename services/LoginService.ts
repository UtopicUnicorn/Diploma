import Repository from "../mixins/Repository";
import {LoginInterface} from "../model/loginInterface";
import {urlEnums} from "../mixins/urlEnums";

export default {
    post(body: LoginInterface){
        return Repository.post(urlEnums.login, body);
    },
    checkPass(body: LoginInterface){
        // console.log(urlEnums.login+'/check');
        return Repository.post(urlEnums.login+ '/check', body);
    }
}
