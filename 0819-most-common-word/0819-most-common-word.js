/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/[^a-z]+/)
const bannedword = new Set(banned)
const data = new Map()
    for ( let word of words){
     if(word=="" || bannedword.has(word))continue
    //  let count = data.ge
     if(data.has(word)){
        data.set(word , data.get(word)+1) 
     }else{
        data.set(word,1)
     }
    }

     let result = ""
     let max = 0
     for(let [ word , count]of data){
        if(count>max){
            max= count
            result = word
        }
     }

    return result

};