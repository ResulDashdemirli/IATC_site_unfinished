import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_event=ref(db,'/Events');
const check=ref(db,'/namePassword');

document.querySelector("#event_submit").addEventListener("click",function(e){
    e.preventDefault();

    var connection_type=$("#event_name").val();
    var connection_link=$("#event_description").val();

    var obj=push(branch_event);
    set(obj,{
                [connection_type]:connection_link
            })
            $("#event_name").val("");
            $("#event_description").val("");
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


 onValue(branch_event,function(snapshot){
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

            remove(ref(db,'/Events/'+key));
            // location.reload();

        });

// Update functionality
        button2.click(function(){

            $("#event_name").val([key1]);
            $("#event_description").val([name]);

        remove(ref(db,'/Events/'+key));
        
    });
    


   }
}})
