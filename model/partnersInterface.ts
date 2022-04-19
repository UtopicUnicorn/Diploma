export interface PartnersInterface {
    surname: string;
    name: string;
    parentname: string;
    phone: string;
    mail: string;
    price: number;
    type: string;
}


export interface ipPartner extends PartnersInterface{
    address: string;
    inn:string;
    bank: string;
    pay_number: string;
    bik: string;
    price_rule: string;

}

export  interface  lawPartner extends   ipPartner{
    kpp: string;
}
