export interface PartnersInterface {
    surname: string;
    name: string;
    parentname: string;
    phone: string;
    mail: string;
    type: string;
    address?: string;
    inn?:string;
    bank?: string;
    paynumber?: string;
    bik?: string;
    pricerule?: string;
    kpp?: string;
}


// export interface ipPartner extends PartnersInterface{
//     address: string;
//     inn:string;
//     bank: string;
//     paynumber: string;
//     bik: string;
//     pricerule: string;
//
// }
//
// export  interface  lawPartner extends ipPartner{
//     kpp: string;
// }
