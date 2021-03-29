
export function isEmail(email:string) {
    const regexp = new RegExp(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/);	
    const isok = regexp.test(email);
    console.log(isok);
    return isok;
}
