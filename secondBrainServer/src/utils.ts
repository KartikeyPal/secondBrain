export function random(length: number){
    let option = "abcdefghijklmnopqrstuvwxyz123456789-";
    let ans = "";
    let len = option.length;

    for(let i = 0;i<length;i++){
        ans+= option[(Math.floor(Math.random()* len))];
    }
    return ans;
}