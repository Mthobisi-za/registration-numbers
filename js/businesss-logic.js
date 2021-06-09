
function businessLogic(str, tag){
    function validateData(){
        if(str !== "" && str !== " "){
            console.log(str)
            return str
        }else{
            console.log("please")
            return "please enter valid 'Reg Number'"
        }
    };
    function ValidateRadio(){
        try{
            var value = tag.value
            return value;
        } catch{
            return "Please select town"
        }
    }
    return{
        validateData,
        ValidateRadio
    }
}
