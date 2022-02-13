
import {db,ref,onValue} from '../firebase.js';
const branch_about=ref(db,'/About_us');


 onValue(branch_about,function(snapshot){
    $(".aboutParagraph").empty();

    $("#about_title").empty

    var obj=snapshot.val();
  
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
        
           

            console.log(name,key1);

            // To send front ends


   }

            $(".aboutParagraph").text(name);

            $("#about_title").text(key1);
            // To send front starts
  
 

}






})
