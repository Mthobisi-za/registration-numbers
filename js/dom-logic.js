
//DEFAULT VALUES
function removedata(){
    //name remove
    function removeNameInput(){
         document.querySelector("#regN").value = ""
    }
    removeNameInput()
    //name remove
    function removeRadio(){
        document.querySelector("#capetown").checked = false;
        document.querySelector("#paarl").checked = false;
        document.querySelector("#stelle").checked = false;
        document.querySelector("#all").checked = false;
    }
    removeRadio()
}
//DEFAULT VALUES
var btn = document.querySelector("#btn");
var showw = document.querySelector(".show");
var state = 0;
if(0 === state){
    var local = localStorage.getItem("regNumber");
    if(local !== null){
    var locall = localStorage.getItem("regNumber").split(",");
    var div = document.querySelector(".ul_append");
    
    locall.forEach(ele =>{
        var li = document.createElement("li");
        li.textContent = ele;
        div.append(li)
    });
    state = state + 1;
}else{

}
} else{

}
function addElements(){

    var regNum = document.querySelector("#regN").value.toUpperCase();
    var data = businessLogic(regNum).validateData();
    function storeValue(){
        if(data === "please enter valid 'Reg Number'"){
            var errSpan = document.querySelector(".span");
            errSpan.innerHTML = data
            setTimeout(function(){
                document.querySelector(".span").innerHTML =""
            },2000)
        } else{
            var local = localStorage.getItem("regNumber")
            if(local !== null){
                var arrg = local.split(",");
                if(arrg.indexOf(data) === -1){
                    arrg.push(data);
                    localStorage.setItem("regNumber", arrg);
                    var div = document.querySelector(".ul_append")
                    var li = document.createElement("li");
                    li.textContent = data;
                    div.append(li);
                 } else{

                 }
                
            } else{
                var temp = [data]
                localStorage.setItem("regNumber", temp);
                var div = document.querySelector(".ul_append")
                var li = document.createElement("li");
                li.textContent = data;
                div.append(li);
            }
        }
    }; storeValue();
    //loop through the array
 /*   
    */
    removedata()
}
function ShowValue(){
    function collect(){
        var li = document.getElementsByTagName("li")
        var radio = document.querySelector("input[name='group']:checked");
        var fun = businessLogic("", radio).ValidateRadio();
        console.log(fun)
        if(fun !=="Please select town"){
            for(var i = 0; i < li.length; i++){
                li[i].remove();
            }
            try{ 
                li[0].remove();
            }catch{
                console.log("undefined")
            }
           
            
            var div = document.querySelector(".ul_append");
            
            if(fun==="all"){
                ///REMOVE ELEMENTS
                for(var i = 0; i < li.length; i++){
                    li[i].remove();
                }
                try{ 
                    li[0].remove();
                }catch{
                    console.log("undefined")
                }
                //REMOVE ELEMENTS
                var localS = localStorage.getItem("regNumber").split(",")
                localS.forEach(val=>{
                    var li = document.createElement("li");
                    li.textContent = val;
                    div.append(li);
                })
            } else if(fun === "CA"){
                ///REMOVE ELEMENTS
                for(var i = 0; i < li.length; i++){
                    li[i].remove();
                }
                try{ 
                    li[0].remove();
                }catch{
                    console.log("undefined")
                }
                //REMOVE ELEMENTS
                var localS = localStorage.getItem("regNumber").split(",")
                localS.forEach(val=>{
                    if(val.startsWith(fun)){
                        var li = document.createElement("li");
                        li.textContent = val;
                        div.append(li);
                    }  else{
                        
                    }
                })
            }else if(fun === "CJ"){
                ///REMOVE ELEMENTS
                for(var i = 0; i < li.length; i++){
                    li[i].remove();
                }
                try{ 
                    li[0].remove();
                }catch{
                    console.log("undefined")
                }
                //REMOVE ELEMENTS
                var localS = localStorage.getItem("regNumber").split(",")
                localS.forEach(val=>{
                    if(val.startsWith(fun)){
                        var li = document.createElement("li");
                        li.textContent = val;
                        div.append(li);
                    }  else{
                        
                    }
                })
            } else if(fun === "CL"){
                ///REMOVE ELEMENTS
                for(var i = 0; i < li.length; i++){
                    li[i].remove();
                }
                try{ 
                    li[0].remove();
                }catch{
                    console.log("undefined")
                }
                //REMOVE ELEMENTS
                var localS = localStorage.getItem("regNumber").split(",")
                localS.forEach(val=>{
                    if(val.startsWith(fun)){
                        var li = document.createElement("li");
                        li.textContent = val;
                        div.append(li);
                    }  else{
                        
                    }
                })
            } else{}
        }else{
            document.querySelector(".sp").innerHTML = fun;
            setTimeout(function(){
                document.querySelector(".sp").innerHTML = "";
            },2000)
        }
    }
    collect();
}
btn.addEventListener("click", addElements);
///show info

showw.addEventListener("click", ShowValue)