// Import stylesheets
import './style.css';

// Write Javascript code!
let inpnum1=document.getElementById("num1")
let inpnum2=document.getElementById("num2")

let addbtn = document.getElementById('add')
let subbtn = document.getElementById('sub')
let mulbtn = document.getElementById('mul')
let divbtn = document.getElementById('div')
let Modulusbtn = document.getElementById('modulus')
let powerbtn = document.getElementById('power')


let showdata = document.getElementById("showdata")



    addbtn.addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let addition = parseInt(inpnum1.value) + parseInt(inpnum2.value)
            let p =`<p>Addition : ${addition}</p>`
            showdata.innerHTML=p
        }
        
    
    })
    subbtn.addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let subtraction = parseInt(inpnum1.value) - parseInt(inpnum2.value)
            let p =`<p>Subtraction : ${subtraction}</p>`
            showdata.innerHTML=p
        }
        
    
    })
    mulbtn.addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let multipy = parseInt(inpnum1.value) * parseInt(inpnum2.value)
            let p =`<p>Multiplication : ${multipy}</p>`
            showdata.innerHTML=p

        }
        
    
    })
    divbtn.addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let division = parseInt(inpnum1.value) / parseInt(inpnum2.value)
            let p =`<p>Division : ${division}</p>`
            showdata.innerHTML=p

        }
       
    
    })
    Modulusbtn.addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let modulus = parseInt(inpnum1.value) % parseInt(inpnum2.value)
            let p =`<p>Modulus : ${modulus}</p>`
            showdata.innerHTML=p 
        }
        
    
    })
    powerbtn .addEventListener('click',()=>{
        if(inpnum1.value.length===0 || inpnum2.value.length===0 ){
            let p = `<p>Enter the numbers</p>`
            showdata.innerHTML=p
        }else{
            let power = parseInt(inpnum1.value) ** parseInt(inpnum2.value)
            let p =`<p>Power : ${ power}</p>`
            showdata.innerHTML=p}
        
    
    })