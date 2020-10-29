const init = function() {
   document.getElementById('button-cancel').addEventListener('click', reset);
   document.getElementById('button-send').addEventListener('click', send);
   
}

const reset = function(ev) {
 //HTML will automatically put the form back to the initial state
 // unless we do that
 ev.preventDefault();
 document.getElementById('form-user').reset();
 
}

const validate = function() {
   let valid = false;
   let failures=[];
   

   const first = document.getElementById('input-first');
   const password = document.getElementById('input-password');
   const email = document.getElementById('input-email');
   const select = document.getElementById('input-age');
   const chk = document.getElementById('input-alive');
   
   // logic for first (element)
if (first.value ===''){
    failures.push ({input:'input-first', msg:'Required fieild'});
}

if (password.value===""||! email.value.includes('@')){
    failures.push ({input:'input-password', msg:'Required fieild'});
}

if (password.value===""||password.value.length < 8){
    failures.push ({input:'input-email', msg:'Must be at least 8 characters'});
}
if (select.selectedIndex===0){
    failures.push({input: 'input-age', msg:"Too young..."});
}

if(!chk.checked){
    failures.push({ input: 'input-alive', msg: "Must be alive to submit form"});
}
console.log(failures)
return failures;
}


const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    
    let fails=validate();
    if (fails.length === 0){

    

    document.getElementById('form-user').submit();
}else{
    fails.forEach(obj => {
        const field = docmument.getElementById()
        field.parentElement.classList.add('error');
        field.parentELement.setAttribute('data-errormsg', obj.msg);
    })
}

document.addEventListener('DOMContentLoaded', init);


