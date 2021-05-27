function Validate() {

    var name = document.forms['myform']['name'].value;
    if (name == "" || name == null) {
        alert("name field can't be Empty");
        return false;
    }

    var email = document.forms['myform']['email'].value;
    if (email == "" || email == null) {
        alert("email field can't be Empty");
        return false;
    }

    var subject = document.forms['myform']['subject'].value;
    if (subject == "" || subject == null) {
        alert("subject field can't be Empty");
        return false;
    }

    var message = document.forms['myform']['message'].value;
    if (message == "" || message == null) {
        alert("message  field can't be Empty");
        return false;
    }



}