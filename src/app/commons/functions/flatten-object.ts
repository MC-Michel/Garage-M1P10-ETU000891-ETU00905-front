export function flattenObject(obj: any, mainKey=''){
    let ans: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        
        const currentKey = mainKey !== '' ? mainKey+'['+key+']' : key;
        if (typeof obj[key] === 'object' && ! (obj[key] instanceof Date)){
          ans = {...ans, ...flattenObject(obj[key], currentKey)}
        }else{
          ans[currentKey] = obj[key];
          console.log(key)
          console.log(ans[currentKey]);
          console.log(obj[key]);
          
          
        }
      }
    }
    return ans;
  }