function businessLogic(str, tag) {
    function validateData() {
        var two = str.charAt(2);
        var dash = str.charAt(6);
        var check = /([A-Z])\w+\s\d+.\d+/g;
        if (str !== "" && str !== " " && str.length == 10 && two == " " && dash == "-" && check.test(str)) {
            //length of string
            //CHECK FOR FORMAT
            if (str.startsWith("CA") || str.startsWith("CL") || str.startsWith("CJ")) {
                return str
            } else {
                return "We only accept registration numbers for CA, CL and CJ"
            }

        } else {
            return "please enter valid Reg Number e.g 'CA 123-897'"
        }
    };

    function ValidateRadio() {
        try {
            var value = tag.value
            if (value == "capetown") {
                return "CA"
            } else if (value == "paarl") {
                return "CJ"
            } else if (value == "stellenbosch") {
                return "CL"
            } else if (value == "All") {
                return "all"
            }

        } catch {
            return "Please select town"
        }
    }
    return {
        validateData,
        ValidateRadio
    }
}