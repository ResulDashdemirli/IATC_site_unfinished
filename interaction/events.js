
import {db,ref,onValue} from '../firebase.js';
const branch_event=ref(db,'/Events');

var images=['../mainPage/img/11111.png','../mainPage/img/ff5f7da7749bd713957f0c23b505a55c.jpg'];
var index=0;
 onValue(branch_event,function(snapshot){
    
    var obj=snapshot.val();
    $("#inter_events").empty();
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
        
           

   }
     
//    <div class="col-lg-4 col-md-4 col-sm-12 mb-4 events">
//    <div class="articles">
//        <div class="articles_grid_thumb">
//            <a href="mainEventsIATC.html"><img src="./img/11111.png" class="img-fluid" alt="" /></a>
//        </div>

//        <div class="articles_grid_caption event-name">
//            <h4>İsrail Azərbaycan Təlim Mərkəzi fəaliyyətə başladı</h4>
//        </div>
//    </div>
// </div>
   
            // To send front starts
            const div1= $('<div>', {
                class: 'col-lg-4 col-md-4 col-sm-12 mb-4 events'
               });
            
             const div2=  $('<div>', {
                class: "articles"
               });
               
              const div3= $('<div>', {
                class: 'articles_grid_thumb'
               });
               
              const div4= $('<a>', {
                href:"mainEventsIATC.html"
                });
               
              const div5= $('<img>', {
                src:images[index],
                class:"img-fluid"
            });
               
             const div6=  $('<div>', {
                class:"articles_grid_caption event-name"
            });
            const div7=  $('<h4>', {
                text:key1
            });
            
            
            $("#inter_events").append(div1);
            div1.append(div2);
            div2.append(div3,div6);
            div4.append(div5);
            div3.append(div4)
            div6.append(div7)

            index++;

            
          }


          // $(".passing_page").click(function(){
          //   location.href="mainEventsIATC.html";
          //   $(".breadcrumb-title").text(name);
          // })





})
