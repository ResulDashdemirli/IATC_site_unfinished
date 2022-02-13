
import {db,ref,onValue} from '../firebase.js';
const branch=ref(db,'/Contact_Information');
var icons=['fas fa-home','fas fa-envelope','fas fa-mobile-alt']
var index=0;
 onValue(branch,function(snapshot){
    
    $("#inter_contact").empty();
    var obj=snapshot.val();
    
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
        
           

            console.log(name,key1);

            // To send front ends


   }

            
            // To send front starts
            const div1= $('<div>', {
                class: 'col-md-4 info'
               });
            
             const div2=  $('<div>', {
                class: 'icon'
               });
               
              const div3= $('<i>', {
                class: icons[index]
               });
               
              const div4= $('<div>', {
                class: 'contact-info'
               });
               
              const div5= $('<h5>', {
                   text:key1
               });
               
             const div6=  $('<p>', {
                text:name
            });
            
            $("#inter_contact").append(div1);
            div1.append(div2,div4);
            div2.append(div3);
            div4.append(div5,div6);

index++;
 

}






})
