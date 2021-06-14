function businessLogic(str, tag) {
    function validateData() {
        ///starts of strng
        var tes = /CL \d+.\d+|CA \d+.\d+|CJ \d+.\d+/g;
        //       var two = str.charAt(2);
        //       var dash = str.charAt(6);
        //       var check = /([A-Z])\w+\s\d+.\d+/g;
        if (tes.test(str) && str.charAt(0) !== " ") {
            //CHECK FOR FORMAT
            if (str.startsWith("CA") || str.startsWith("CL") || str.startsWith("CJ")) {
                return str
            } else {
                return "We only accept registration numbers for CA, CL and CJ"
            }

        } else {
            return "please enter valid Reg Number e.g 'CA 123-897' OR 'CJ 7865466' OR 'CL 098 879'"
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