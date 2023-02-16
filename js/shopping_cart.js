
let serial=0;
//for first card..using html id
document.getElementById('first-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const productName=document.getElementById('first-name').innerText;
    const productPrice=document.getElementById('first-price').innerText;
    const productQuantity=document.getElementById('first-quantity').innerText;
    // console.log(productName,productPrice,productQuantity);

    const priceTotal= parseInt(productPrice*productQuantity);//total price 
    // console.log(priceTotal,typeof priceTotal);


    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);//function call
   
})

//for second card..using event object fom browser
    document.getElementById('second-card').addEventListener('click',function(e){
        // console.log(e.target.parentNode.parentNode.children[0].innerText);
        serial +=1;
        const productName=e.target.parentNode.parentNode.children[0].innerText;
        const productPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
        const productQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
        //
        const sumTotal=parseInt(productPrice) + parseInt(productQuantity);//..total...add
        
        displayData(productName,productPrice,productQuantity,sumTotal);
        
    })

 //for third card...using html id
 document.getElementById('third-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const productName=document.getElementById('third-name').innerText;
    const productPrice=document.getElementById('third-price').innerText;
    const productQuantity=document.getElementById('third-quantity').innerText;
    // console.log(productName,productPrice,productQuantity);

    const priceTotal= parseInt(productPrice) - parseInt(productQuantity);//total price ...minus
    // console.log(priceTotal,typeof priceTotal);


    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);//function call
   
})

 //for 4th card...using html id
 document.getElementById('fourth-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const productName=document.getElementById('fourth-name').innerText;
    const productPrice=document.getElementById('fourth-price').innerText;
    const productQuantity=document.getElementById('fourth-quantity').innerText;
    // console.log(productName,productPrice,productQuantity);


    const priceTotal= parseInt(productPrice) / parseInt(productQuantity);//total price ...division
    // console.log(priceTotal,typeof priceTotal);


    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);//function call
   
})

 //for 5th card...using html id
 document.getElementById('fifth-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const productName=document.getElementById('fifth-name').innerText;
    const productPrice=document.getElementById('fifth-price').innerText;
    const productQuantity=document.getElementById('fifth-quantity').innerText;
    // console.log(productName,productPrice,productQuantity);


    const priceTotal= parseInt(productPrice) % parseInt(productQuantity);//total price ...reminder(vagshes)
    // console.log(priceTotal,typeof priceTotal);


    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);//function call
   
})

 //for 6th card...using html id
 document.getElementById('six-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const productName=document.getElementById('six-name').innerText;
    const productPrice=document.getElementById('six-price').value;
    const productQuantity=document.getElementById('six-quantity').value;
    // console.log(productName,productPrice,productQuantity);

    //input field empty
    document.getElementById('six-price').value="";
    document.getElementById('six-quantity').value="";

    //validation
    if(productPrice == '' || productQuantity =='' || productPrice <= 0 || productQuantity <=0 ){
        return alert ("please enter any valid number");
    }

    const priceTotal= parseInt(productPrice) * parseInt(productQuantity);//total price ...multiply
    // console.log(priceTotal,typeof priceTotal);


    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);//function call
   //button disabled function call
   disabledButton('six-card');
})



//common function...getData


//common function to display data
function displayData(productName,productPrice,productQuantity,priceTotal){
     // create table row
     const container=document.getElementById('table-container');//get parent using id
     const tr= document.createElement('tr');//create tr
     tr.innerHTML = `
       <td>${serial}</td>
       <td>${productName}</td>
       <td>${productPrice}</td>
       <td>${productQuantity}</td>
       <td>${priceTotal}</td>
      

     `;
     container.appendChild(tr);//append tr...into parent
}

//button disable
 function disabledButton(id){
    document.getElementById(id).setAttribute("disables", true);
 }