const checkType = function(target : any , type :string ) : boolean {
  return Object.prototype.toString.call(target) === `[object ${type}]` ;
};

export const AdaptorUtils = {
  reflect(target : object[]  , map : object ) : object[] {
    if(checkType(target , 'Array')){
      let _arr = [] ;

      (target as Object[] ).forEach( item => {
        let _obj = {} ;

        Object.keys( map ).forEach( keys => {
          if(item[keys])
          _obj[map[keys]] = item[keys] ;
        });
        _arr.push(_obj) ;
      });
      return _arr
    };
    return target ;
  }
};
