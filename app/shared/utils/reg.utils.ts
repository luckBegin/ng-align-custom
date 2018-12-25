export const RegUtils = {
  mailValid : ( val : string ) => {
    let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g ;

    return reg.test(val) ;
  },
  isNumber : (val : string) => {
    let reg = /^\d+$/g ;
    return reg.test(val) ;
  },
  isPhone : ( val :string ) => {
    let reg = /^1[346578]\d{9}$/ ;
    return reg.test(val) ;
  }
};
