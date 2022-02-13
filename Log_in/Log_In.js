
import {db,set,ref,onValue,push,remove} from '../firebase.js';
const branch=ref(db,'/namePassword');

$("#button_login").click(function(){
    
    var login_name=$("#name_login").val();
    var login_password=$("#password_login").val();
    console.log(login_name,login_password);
    
onValue(branch,function(snapshot){

    var obj=snapshot.val();

    for (var [key_of_admin,values] of Object.entries(obj)){
    
        for (var [key1,name] of Object.entries(values)){
            
        }
    }


    if(login_name==key1 && login_password==name){
        sessionStorage.setItem('key',[key_of_admin]);
        location.href = '../index.html';

    }

    else{
        alert("Please use the correct name or password");
        $("#name_login").val("");
        $("#password_login").val("");
    }

})
})
