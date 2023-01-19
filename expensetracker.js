var form=document.getElementById("myform");
var button=document.getElementById('btn');
var itemList=document.getElementById("items");
var amount=document.getElementById("amount");
var description=document.getElementById("description");
var select=document.getElementById("category");
      form.addEventListener('submit',onAddExpense);
      function onAddExpense(e){
        e.preventDefault();
        var res1=document.getElementById("amount").value;
        var res2=document.getElementById("description").value;
        var res3=document.getElementById("category").value;
        obj={res1,res2,res3};
        localStorage.setItem(res2,JSON.stringify(obj))
        showUserOnScreen(obj);
    }
     function showUserOnScreen(obj){
        const parentElem=document.getElementById("items");
        var li=document.createElement('li');
        li.textContent=obj.res1 +' - ' + obj.res2 +' - ' +obj.res3;
        var delbtn=document.createElement('input');
          delbtn.type='button';
          delbtn.value='DeleteExpense';
          delbtn.onclick=()=>{
            localStorage.removeItem(obj.res2);
            parentElem.removeChild(li);
          }
          const Editbtn=document.createElement('input');
          Editbtn.type='button';
          Editbtn.value='EditExpense';
          Editbtn.onclick= () => {
            localStorage.removeItem(obj.res2);
            parentElem.removeChild(li);
            document.getElementById('amount').value= obj.res1;
            document.getElementById('description').value= obj.res2;
            document.getElementById('category').value= obj.res3;
          }
          li.appendChild(delbtn);
          li.appendChild(Editbtn);
          parentElem.appendChild(li);
          
          
     }
     