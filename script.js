let buttons =document.querySelectorAll('button')


let b1=document.getElementById('b1')
let b2=document.getElementById('b2')
let b3=document.getElementById('b3')
let b4=document.getElementById('b4')
let b5=document.getElementById('b5')
let b6=document.getElementById('b6')
let b7=document.getElementById('b7')
let b8=document.getElementById('b8')
let b9=document.getElementById('b9')

let bclick=true
let turns = 0




let reset=()=>{
      buttons.forEach((button)=>button.innerText=' ')
      turns=0
      bclick=true
      
}

let posibilities=()=>{
     
    if(b1.innerText=='x' && b2.innerText=='x' && b3.innerText=='x' ||
       b4.innerText=='x' && b5.innerText=='x' && b6.innerText=='x' ||
       b7.innerText=='x' && b8.innerText=='x' && b9.innerText=='x' ||
       b1.innerText=='x' && b4.innerText=='x' && b7.innerText=='x' ||
       b2.innerText=='x' && b5.innerText=='x' && b8.innerText=='x' ||
       b3.innerText=='x' && b6.innerText=='x' && b9.innerText=='x' ||
       b1.innerText=='x' && b5.innerText=='x' && b9.innerText=='x' ||
       b3.innerText=='x' && b5.innerText=='x' && b7.innerText=='x'
    ){
        setTimeout(()=>{
            alert('X wins')
            reset()
        },1000)
    }else if(b1.innerText=='o' && b2.innerText=='o' && b3.innerText=='o' ||
        b4.innerText=='o' && b5.innerText=='o' && b6.innerText=='o' ||
        b7.innerText=='o' && b8.innerText=='o' && b9.innerText=='o' ||
        b1.innerText=='o' && b4.innerText=='o' && b7.innerText=='o' ||
        b2.innerText=='o' && b5.innerText=='o' && b8.innerText=='o' ||
        b3.innerText=='o' && b6.innerText=='o' && b9.innerText=='o' ||
        b1.innerText=='o' && b5.innerText=='o' && b9.innerText=='o' ||
        b3.innerText=='o' && b5.innerText=='o' && b7.innerText=='o'
    ){
        setTimeout(()=>{
            alert('O wins')
            reset()
        },1000)
    }else if(turns==8){
        setTimeout(()=>{
            alert('Match Draw')
            reset()
        },1000)
    }
     
}

let btnClick=(buttons)=>{
    
    if(buttons.innerText=='' && bclick==true){
        buttons.innerText='x'
        bclick=false
        posibilities()
        turns +=1
    }
    else if(buttons.innerText=='' && bclick==false){
        buttons.innerText='o'
        bclick=true
        posibilities()
        turns +=1
    }
 
}




buttons.forEach((button)=>{
    button.addEventListener('click', ()=>btnClick(button))
})


// b1.addEventListener('click',()=>{
//      btnClick(b1)
// })
// b2.addEventListener('click',()=>{
//     btnClick(b2)
// })

// b3.addEventListener('click',()=>{
//     btnClick(b3)
// })

// b4.addEventListener('click',()=>{
//     btnClick(b4)
// })
// b5.addEventListener('click',()=>{
//     btnClick(b5)
// })
// b6.addEventListener('click',()=>{
//    btnClick(b6)
// })

// b7.addEventListener('click',()=>{
//    btnClick(b7)
// })

// b8.addEventListener('click',()=>{
//    btnClick(b8)
// })
// b9.addEventListener('click',()=>{
//     btnClick(b9)
//  })
 



