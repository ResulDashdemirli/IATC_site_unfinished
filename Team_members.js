import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_members=ref(db,'/Team_Members');
const check=ref(db,'/namePassword');

document.querySelector("#team_member_submit").addEventListener("click",function(){

        var team_member_info=$("#team_member_info").val();
    var team_member_name=$("#team_member_name").val();
    var team_member_position=$("#team_member_position").val();
    var team_member_surname=$("#team_member_surname").val();

    var obj=push(branch_members);
    set(obj,{
        team_member_info,
        team_member_name,
        team_member_position,
        team_member_surname

        
            })

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


 onValue(branch_members,function(snapshot){
    var obj=snapshot.val();
    // Identify the exact row
    var row_number=1; 
    
    $('tbody').empty();

// Getting data from database
    for (let [key,values] of Object.entries(obj)){
        let identify_class=1;

        const tr = $('<tr>');
        const td1 = $('<td>').html(row_number);

        tr.append(td1)
         for (var [key1,name] of Object.entries(values)){
           
             const td2 = $('<td>',{
               class:identify_class
           }).html(name);
          

           tr.append(td2);
           $('tbody').append(tr);
           identify_class++;
           }
   const td5 = $('<td>');
   tr.append(td5);
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

    td5.append(button1, button2);

   row_number++;

   button1.click(function(){

        remove(ref(db,'/Team_Members/'+key));
        // location.reload();

    });

// Update functionality
    button2.click(function(){

        $("#team_member_info").val($('.1').html());
        $("#team_member_name").val($('.2').html());
        $("#team_member_position").val($('.3').html());
        $("#team_member_surname").val($('.4').html());
       
    remove(ref(db,'/Team_Members/'+key));
    
});
}

})




