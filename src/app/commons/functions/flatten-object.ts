export function flattenObject(obj: any, mainKey=''){
    let ans: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const currentKey = mainKey !== '' ? mainKey+'['+key+']' : key;
        if (typeof obj[key] === 'object'){
          ans = {...ans, ...flattenObject(obj[key], currentKey)}
        }else{
          ans[currentKey] = obj[key];
        }
      }
    }
    return ans;
  }