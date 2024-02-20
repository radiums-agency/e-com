export interface CreateAnnouncceForm {
  productBrand:string,
  productCategory:string
  guaranteeNumber: number,
  guaranteeTime: string,
}


export interface SmartphoneForm {
  name: string,
  stokage:number,
  ram:number,
  color:string,
  price: number
  description: string
}

export interface PcForm extends SmartphoneForm {
  cpu: string,
  gpu: string,
  keyword:string
}

export interface ConsoleForm {
  name:string,
  color: string,
  description: string
  
}


export interface ComponentsForm {
  name:string,
  description: string
  

}

export interface AccessoryForm extends ComponentsForm {

}

