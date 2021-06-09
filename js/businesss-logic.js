
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
                if(value == "capetown"){
                     return "CA"
                } else if(value== "paarl"){
                     return "CJ"
                }else if(value == "stellenbosch"){
                     return "CL"
                } else if(value == "All"){
                    return "all"
                }
            
        } catch{
            return "Please select town"
        }
    }
    return{
        validateData,
        ValidateRadio
    }
}
