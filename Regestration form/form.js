// click event 
function formValid() {
    let fn = document.getElementById("fname");
    if (fn.value == "" || fn.value == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        fn.classList.add("highlight");
        fn.focus()
        return false;
    }
    let ln = document.getElementById("lname");
    if (ln.value == "" || ln.value == null){
        document.getElementById(msg2).innerHTML = "Enter lastname";
        ln.classList.add("highlight");
        fn.focus()
        return false;
    }
    let mail = document.getElementById("mail").value;
    if (mail == "" || mail == null) {
        document.getElementById("msg3").innerHTML = "Enter mail"
        return false
    }
    let mobileno = document.getElementById("mobileno").value;
    if (mobileno == "" || mobileno == null) {
        document.getElementById("msg4").innerHTML = "Enter Number no"
        return false
    }
    let m = document.getElementById("male").checked;
    let f = document.getElementById("female").checked;
        if (m == false && f == false) {
            document.getElementById("msg5").innerHTML = "Select Gender"
            return false
        }
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
        document.getElementById("msg6").innerHTML = "Enter Address"
        return false
    }
    let cy = document.getElementById("citylist").value;
    if (cy == "-1") {
        document.getElementById("msg7").innerHTML = "Select city"
        return false
    }
    let pno = document.getElementById("Pincd").value;
    if (no == "" || no == null) {
        document.getElementById("msg8").innerHTML = "Enter pincode"
        return false
    }
    let qu = document.getElementById("copsci").value;
    if (qu == "-1") {
        document.getElementById("msg9").innerHTML = "Select Qualification "
        return false
    }
    let e1 = document.getElementById("copsci").checked;
    let e2 = document.getElementById("info").checked;
    let e3 = document.getElementById("comat").checked;
    if (e1 == false && e2 == false && e3 == false) {
        document.getElementById("msg10").innerHTML = "Select Experiance"
        return false;
    }
        let ps = document.getElementById("pass").value;
        if ((ps == "" || ps == null)) {
            document.getElementById("msg11").innerHTML = "Enter Password"
            return false;
        }
}
// blur event (parameterized function)
function blankCheck(blank, msg) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(msg).innerHTML = "Please, Enter value!!!"
        blank.classList.add("highlight");
        return false
    }
}
function selectOption(chkval, msg) {
    if (chkval.checked == false) {
        document.getElementById(msg5).innerHTML = "Please, Select value!!!"
        return false
    } else {
        document.getElementById(msg5).innerHTML = ""
        return false
    }
}
function dropdwn(selectval, msg) {
    if (selectval.value == "-1") {
        document.getElementById(msg).innerHTML = "Please, Select value!!!"
        selectval.classList.add("highlight");
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        selectval.classList.remove("highlight");
        return false
    }
}
function selectOption(chasp, msg) {
    if (chasp.value == "-1") {
        document.getElementById(msg).innerHTML = "Please, Select value!!!"
        selectval.classList.add("highlight");
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        selectval.classList.remove("highlight");
        return false
    }
}
function selectOption(opti, msg) {
    if (opti.checked == false) {
        document.getElementById(msg).innerHTML = "Please, Select value!!!"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
    function Selectcheck(spe , msg){
        if(spe.checked == false){
            document.getElementById(msg).innerHTML = "please, select value !!"
            return false
        }else{
            document.getElementById(msg).innerHTML=""
        }
    }
}
// keybord function
function nameEx(namecheck, msg) {
    let exp = /^[a-zA-Z]*$/
    if (!(exp.test(namecheck.value))) {
        document.getElementById(msg).innerHTML = "Invalid name!!"
        namecheck.classList.add("highlight");
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        namecheck.classList.remove("highlight");
        return false
    }
}
function checkMailEx() {
    let mail = document.getElementById("mail").value;
    let mailEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if (mailEx.test(mail)) {
        document.getElementById("msg3").innerHTML = ""
        return false
    } else {
        document.getElementById("msg3").innerHTML = "Invalid mail!!!"
        return false
    }
}
function mobileEx(mobile,msg) {
    let no = document.getElementById("mobileno").value;
    let startnum = /^[6-9]/
    let mobex = /^[0-9]*$/
    if (!(mobex.test(mobile.value)) || !(startnum.test(mobile.value))) {
        document.getElementById("msg4").innerHTML = "invalid number!!!"
      mobile.classList.add("highlight");
        return false;
    } else {
        document.getElementById("msg4").innerHTML = ""
        mobile.classList.remove("highlight");
        return false;
    }
}
function addressLength(addr, msg) {
    if (addr.value.length < 35) {
        document.getElementById(msg).innerHTML = "Address must be in between 35 to 200 letters"
        addr.classList.add("highlight");
        return false;
    } else {
        document.getElementById(msg).innerHTML = ""
        addr.classList.remove("highlight");
        return false;
    }
}
function checkpinEx(pin,msg) {
    let no = document.getElementById("Pincd").value;
    let start = /^[1-9]/
    let numex = /^[0-9]*$/
    if (!(numex.test(no)) || !(start.test(no)) || no.length < 6 ) {
        document.getElementById("msg8").innerHTML = "invalid number!!!"
       pin.classList.add("highlight");
        return false;
     } else {
        document.getElementById("msg8").innerHTML = ""
        pin.classList.remove("highlight");
        return false;
    }
}
function passRegEx() {
    let ps = document.getElementById("pass").value;
    let psEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (psEx.test(ps)) {
        document.getElementById("msg11").innerHTML = ""
        ps.classList.add("highlight");
        return false
    } else {
        document.getElementById("msg11").innerHTML = "Enter Proper Password"
        return false
    }
}