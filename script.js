const input=document.querySelector('input');
const btn=document.querySelector('.btn');
const ul=document.querySelector('ul');
const result=document.querySelector('.result')


btn.addEventListener('click', ()=>{

    if(input.value===" ")
    {
        alert("Please Enter Something in Your todo");
        disablebtn();
        
    }
    else{
       let li=document.createElement('li');
    li.innerText=input.value;
    
    

    let delbtn= document.createElement('button');
    delbtn.classList.add('delbtn');
    delbtn.innerText="Delete";
    li.appendChild(delbtn)
    li.classList.add('font-size');
     ul.appendChild(li);
    input.value=" "; 
    }
    
      
})

ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON')
    {
        let listItem=event.target.parentElement;
        listItem.remove();
    }
   
})

function disablebtn (){
    btn.disabled= ture;
}













    
    







