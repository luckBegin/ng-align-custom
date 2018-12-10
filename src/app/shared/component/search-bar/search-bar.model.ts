interface classifyModel {
  fn : Function ,
  data : { id : any, name : string }[] ;
}

interface btnModel{
  name : string ;
  type : "search" | "reset"
  fn : Function
}

interface sectionModel {
  name ?: string ,
  names ?: string[] ,
  type : "input" | "select" | "date" | "dateRange" ,
  data? : any ,
  placeHolder? : string ,
  placeHolders? : string[],
  change : any
}
export interface SearchBarModel {
  classify : classifyModel ;
  btn : btnModel ,
  sections : sectionModel[]
}
