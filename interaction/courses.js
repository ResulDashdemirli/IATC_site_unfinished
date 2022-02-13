
import {db,ref,onValue} from '../firebase.js';
const branch_courses=ref(db,'/Courses');

var images=['../mainPage/img/8.png','../mainPage/img/41.png','../mainPage/img/k1.png','../mainPage/img/k2.png','../mainPage/img/k4.png','../mainPage/img/k5.png']
var index=0;


 onValue(branch_courses,function(snapshot){
    
    let obj=snapshot.val();
    let member_info=[]
    
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
            

            member_info.push(name);

   }
   
//             // To send front starts
            const div1= $('<div>', {
                class: 'shadow-sm courses-card col-md-5 d-flex bg-light m-4 p-3 rounded border-1'
               });

               $("#inter_courses").append(div1);


             const div2=  $('<img>', {
                class: "img-fluid  mr-3 rounded",
                src:images[index]
               });

               div1.append(div2);
               
              const div3= $('<div>', {
                class: "courses-info",
                });
               
               div1.append(div3);

              const div4= $('<h4>', {
                text:member_info[3]
               });
               
               div3.append(div4);


               
               const muellim=$('<p>', {
                text:"Müəllim:"
               });

               div3.append(muellim)


              const div5= $('<strong>', {
                
                text:member_info[0]
            });
               

            div3.append(div5)


            // link facebook
             const div6=  $('<div>', {
                 class:"time",
                 text:"15 həftə",
                 
            });

            div3.append(div6)

            const elave=  $('<div>', {
            
                text:"30 nefer",
                
           });

           div3.append(elave)
            
            const div7=  $('<i>', {
                class:"fas fa-desktop",
                });
            
            
            div6.append(div7);



            // link twitter


            const div8=  $('<i>', {
                class:"fas fa-users ml-5"
            });
            
            
            div6.append(div8);


            // link linkedin

            const div9=  $('<div>', {
                class:"float-right mt-4"
            });

            div3.append(div9)



            const div10=  $('<a>', {
                class:"detailed",
                href:"mainBackend.html"
            });
            
            
            div9.append(div10);


            // name profession
            const div11=  $('<strong>', {
                class:"my-auto",
                text:"Ətraflı"
            });




            div10.append(div11);



            const div12= $('<i>', {
                class:"fas fa-arrow-circle-right ml-2 ",
            });

            div10.append(div12)
        


        


                while(member_info.length>0)
                member_info.pop();            
                index++;    
}


})
