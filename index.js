
import {db,set,ref,onValue,push,remove} from './firebase.js';
const branch=ref(db,'/Contact_Information');
const check=ref(db,'/namePassword');

document.querySelector("#connection_submit").addEventListener("click",function(){

    var connection_type=$("#connection_type").val();
    var connection_link=$("#connection_link").val();

    var obj=push(branch);
    set(obj,{
                [connection_type]:connection_link
            })
            $("#connection_type").val("");
            $("#connection_link").val("");
 })


 onValue(check,function(snapshot){
    var obj_check=snapshot.val();
    let data = sessionStorage.getItem('key');

    for (let [check_key,check_values] of Object.entries(obj_check)){
        if(check_key!=data){
            location.href = '/Log_in/Log_In.html';

        }
    }
 })


 onValue(branch,function(snapshot){

    var obj=snapshot.val();
    // Identify the exact row
    var row_number=1; 
  
    $('tbody').empty();

// Getting data from database
    for (let [key,values] of Object.entries(obj)){

         for (let [key1,name] of Object.entries(values)){
        
           const tr = $('<tr>');
           const td1 = $('<td>').html(row_number);
        
           const td2 = $('<td>').html(key1);
           const td3 = $('<td>').html(name);
           const td4 = $('<td>');


           tr.append(td1, td2, td3,td4);
           $('tbody').append(tr);


        // button remove
        const button1 = $('<button>',{
            class:"btn btn-danger",
            text:"Delete",

        });

        // button update
        const button2 = $('<button>',{
            class:"btn btn-warning",
            text:"Update"
        });

        td4.append(button1, button2);

       row_number++;

       button1.click(function(){

            remove(ref(db,'/Contact_Information/'+key));
            // location.reload();

        });

// Update functionality
        button2.click(function(){

            $("#connection_type").val([key1]);
            $("#connection_link").val([name]);

        remove(ref(db,'/Contact_Information/'+key));
        
    });
    


   }
}






})
