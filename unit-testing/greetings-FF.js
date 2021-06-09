function makeChanges() {
    function validateNumber(str) {
        if (str === "" || str === " ") {
            return "Please insert registration number"

        } else if (str.startsWith(" ")) {
            return "Please insert registration number"
        } else {
            return str.toUpperCase()
        }

    }

    function validateRadio(val) {
        if (val.startsWith("cape") || val.startsWith("Cape")) {
            return "CA"
        } else if (val.startsWith("paarl") || val.startsWith("Paarl")) {
            return "CJ"
        } else if (val.startsWith("Stelle") || val.startsWith("stelle")) {
            return "CL"
        } else {
            return "All"
        }

    }
    return {
        validateNumber,
        validateRadio
    }
}