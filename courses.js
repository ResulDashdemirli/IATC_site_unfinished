import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_courses=ref(db,'/Courses');
const check=ref(db,'/namePassword');

document.querySelector("#course_submit").addEventListener("click",function(){

    var course_name=$("#course_name").val();
    var course_duration=$("#course_duration").val();
    var course_seats=$("#course_seats").val();
    var course_information=$("#course_information").val();
    var course_participants=$("#course_participants").val();
    var course_program=$("#course_program").val();
    
    var course_skills=$("#course_skills").val();
    var course_assigned_instructors=$("#course_assigned_instructors").val();
    
    var obj=push(branch_courses);
    set(obj,{
        course_assigned_instructors:[course_assigned_instructors],
        course_duration:[course_duration],
        course_information:[course_information],
        course_name:[course_name],
       course_participants:[course_participants],
        course_program:[course_program],
        course_seats:[course_seats],

        course_skills:[course_skills]
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

 onValue(branch_courses,function(snapshot){
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
   const td9 = $('<td>');
   tr.append(td9);
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

    td9.append(button1, button2);

   row_number++;

   button1.click(function(){

        remove(ref(db,'/Courses/'+key));
        // location.reload();

    });

// Update functionality
    button2.click(function(){

        $("#course_name").val($('.1').html());
        $("#course_duration").val($('.2').html());
        $("#course_seats").val($('.3').html());
        $("#course_information").val($('.4').html());
        $("#course_participants").val($('.5').html());
        $("#course_program").val($('.6').html());
        $("#course_skills").val($('.7').html());
        $("#course_assigned_instructors").val($('.8').html());
    remove(ref(db,'/Courses/'+key));
    
});
}

})


