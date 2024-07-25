
function generateRandomString(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function randNum() {
    const randomThreeDigitNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    return randomThreeDigitNumber;
}

export function generateRef() {
    var st = generateRandomString(6)
    var nm = randNum();

var result = st+ nm;

console.log(result);
return result;

}
export function format(params:string) {
    var tolist = params.split("");
    var newList: string[]=[];
    tolist.map((item, i)=> {
      
      if(i == 2 || i ==5){
        newList.push(item);
        newList.push("-")
      }else{
        newList.push(item)
      }
      
    })
    return newList.join("")
  }