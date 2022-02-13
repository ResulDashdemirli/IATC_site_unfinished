
import {db,ref,onValue} from '../firebase.js';
const branch_members=ref(db,'/Team_Members');

var images=['../mainPage/img/t1.jpg','../mainPage/img/t2.jpg','../mainPage/img/t3.jpg','../mainPage/img/t4.jpg','../mainPage/img/t6.jpg','../mainPage/img/t7.jpg']
var index=0;
 onValue(branch_members,function(snapshot){
    
    let obj=snapshot.val();
    let member_info=[]
    // $("#inter_teamMembers").empty()
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
            

            member_info.push(name);

   }


// <div class="swiper-slide team-card">
//    <div class="card-content">
//        <div class="image">
//            <img src="./img/t7.jpg" alt="">
//        </div>

//        <div class="media-icons">
//            <a href=""><i class="fab fa-facebook"></i></a>
//            <a><i class="fab fa-twitter"></i></a>
//            <a><i class="fab fa-linkedin-in"></i></a>
//        </div>

//        <div class="name-profession">
//            <span class="name">Rasim Abdullayev</span>
//            <span class="profession">Baş menecer</span>
//        </div>

//        <div class="experience">
//            <span class="name">Experience: 4 Year</span>
//        </div>

//        <div class="card-button">
//            <button class="aboutMe">Haqqında</button>
//        </div>
//    </div>
// </div>

   
//             // To send front starts
            const div1= $('<div>', {
                class: 'swiper-slide team-card'
               });

            $("#inter_teamMembers").append(div1)

             const div2=  $('<div>', {
                class: "card-content"
               });

               div1.append(div2);
               
              const div3= $('<div>', {
                class: 'image'
               });
               
               div2.append(div3);


              const div4= $('<img>', {
                src: images[index]
               });
               
               div3.append(div4);


              const div5= $('<div>', {
                
                class:"media-icons"
            });
               

            div2.append(div5)


            // link facebook
             const div6=  $('<a>', {
            });

            div5.append(div6)

            const div7=  $('<i>', {
                class:"fab fa-facebook"
            });
            
            
            div6.append(div7);


            // link twitter

            const div8=  $('<a>', {
            });

            div5.append(div8)

            const div9=  $('<i>', {
                class:"fab fa-twitter"
            });
            
            
            div8.append(div9);


            // link linkedin

            const div10=  $('<a>', {
            });

            div5.append(div10)

            const div11=  $('<i>', {
                class:"fab fa-twitter"
            });
            
            
            div10.append(div11);


            // name profession
            const div12=  $('<div>', {
                class:"name-profession"
            });

            div2.append(div12);

            const div13= $('<span>', {
                class:"name",
                text:member_info[1]+" "+ member_info[3]
            });

            
            const div14= $('<span>', {
                class:"profession",
                text:member_info[2]
            });

            div12.append(div13,div14);


        //experience
        
        const div15=  $('<div>', {
            class:"experience"
        });

        div2.append(div15);
        
        const div16= $('<span>', {
            class:"name",
            text:"Experience: 4 Year"
        });

        div15.append(div16);



        // button
       

                const div17=  $('<div>', {
                    class:"card-button"
                });

                div2.append(div17);

                const div18= $('<button>', {
                    class:"aboutMe",
                    text:"Haqqında"
                });

                div17.append(div18);



                while(member_info.length>0)
                member_info.pop();            
                index++;    
}


})
