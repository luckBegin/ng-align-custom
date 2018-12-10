interface column {
  title : string ;
  reflect : any ;
  type : "text" ;
  fn : any ;
  filter : any ;
}
export interface TableData{
    columns ?: column[] ,
    data ?: object[],
    showIndex ?: boolean,
    loading ?: boolean ,
    btn ?: object ,
};
