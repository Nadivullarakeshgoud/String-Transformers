const input=document.querySelector('input')

const lowerCaseOutput=document.querySelector('#lowercase span')
const upperCaseOutput=document.querySelector('#uppercase span')
const camelCaseOutput=document.querySelector('#camelcase span')
const pascalCaseOutput=document.querySelector('#pascalcase span')
const snakeCaseOutput=document.querySelector('#snakecase span')
const kebabCaseOutput=document.querySelector('#kebabcase span')
const trimOutput=document.querySelector('#trim span')

//to conver first letter capital and all same

function capitilizeString(str){
    //geting undefined in pascal case for space

    if(!str) return str
    return str[0].toUpperCase()+str.slice(1,str.length)
}

//tocamelcase

function camelCase(string){
    const lowerCase=string.toLowerCase()
    const wordsArray=string.split(' ')
    const finalArray=wordsArray.map((word,i)=>{
        if(i===0)return word
        return capitilizeString(word)
    })
    return finalArray.join(' ')
}

//to pascalcase
function pascalCase(string){
    const lowerCase=string.toLowerCase()
    const wordsArray=string.split(' ')
    const finalArray=wordsArray.map((word)=>{
        return capitilizeString(word)
    })
    return finalArray.join(' ')
}
//snakecase

function snakeCase(string){
    const wordsArray=string.split(' ')
    return wordsArray.join('_')
}
//kebabcase
function kebabCase(string){
    const wordsArray=string.split(' ')
    return wordsArray.join('-')
}

function trimCase(string){
    const wordsArray=string.split(' ')
    return wordsArray.join('')
}


//we have to use trim that space count and get undefiend
//first taking input trim first and use for work

function updateScreen(){
    lowerCaseOutput.innerText=input.value.trim().toLowerCase()
    upperCaseOutput.innerText=input.value.trim().toUpperCase()
    camelCaseOutput.innerText=camelCase(input.value.trim())
    pascalCaseOutput.innerText=pascalCase(input.value.trim())
    snakeCaseOutput.innerText=snakeCase(input.value.trim())
    kebabCaseOutput.innerText=kebabCase(input.value.trim())
    trimOutput.innerText=trimCase(input.value.trim())
}

updateScreen()

input.addEventListener('input',()=>{
    updateScreen()
})
