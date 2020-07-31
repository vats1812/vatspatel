let baxa1 = document.getElementById('baxa1'),
    baxa2 = document.getElementById('baxa2'),
    baxa3 = document.getElementById('baxa3'),
    baxa4 = document.getElementById('baxa4'),
    baxa6 = document.getElementById('baxa6'),
    baxa8 = document.getElementById('baxa8'),
    box1 = document.getElementById('box1'),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9"),
    box10 = document.getElementById("box10");



baxa1.addEventListener('click', function disp() {
    if (box1.style.visibility != 'hidden') {
        box1.style.visibility = 'hidden';
        box1.style.transition = "visibility 0.8s ease-in-out";
    } else {
        box1.style.visibility = 'visible';
        box1.style.transition = "visibility 0.8s ease-in-out";
    }

    if (box2.style.visibility != 'visible') {
        box2.style.visibility = 'visible';
    } else {
        box2.style.visibility = 'hidden';
    }

});


baxa2.addEventListener('click', function disp() {
    if (box2.style.visibility != 'hidden') {
        box2.style.visibility = 'hidden';
        box2.style.transition = "visibility 0.8s ease-in-out";
    } else {
        box2.style.visibility = 'visible';
        box2.style.transition = "visibility 0.8s ease-in-out";
    }
    if (box3.style.visibility != 'visible') {
        box3.style.visibility = 'visible';

    } else {
        box3.style.visibility = 'hidden';
    }

});


baxa3.addEventListener('click', function disp() {
    if (box3.style.visibility != 'visible') {
        box3.style.visibility = 'visible';
        box3.style.transition = "visibility 0.8s ease-in-out";
    } else {
        box3.style.visibility = 'hidden';
        box3.style.transition = "visibility 0.8s ease-in-out";
    }
    if (box4.style.visibility != 'visible') {
        box4.style.visibility = 'visible';

    } else {
        box4.style.visibility = 'hidden';
    }

});


let yes1 = document.getElementById('yes1'),
    no1 = document.getElementById('no1');

yes1.addEventListener('click', function yes1() {
    swal({
        text: "Do You Still Want To Continue !!! OHK! Click Below to Continue !!",
        icon: "success"
    });
});

no1.addEventListener('click', function no1() {
    swal({
        text: "I know You said NO, But now you have to continue. Click Below to Continue!!",
        icon: "warning"
    });
});


let district = document.getElementById('district');
baxa4.addEventListener('click', function disp() {

    if (district.selectedIndex == 0) {
        swal({
            text: "First enter your Place",
            icon: "warning"
        });
        document.getElementById('district').focus();
        return false;
    }

    if (box4.style.visibility != 'visible') {
        box4.style.visibility = 'visible';
        box4.style.transition = "visibility 0.8s ease-in-out";
    } else {
        box4.style.visibility = 'hidden';
        box4.style.transition = "visibility 0.8s ease-in-out";
    }
    if (box5.style.visibility != 'visible') {
        box5.style.visibility = 'visible';

    } else {
        box5.style.visibility = 'hidden';
    }

    let result = district.options[district.selectedIndex].text;
    document.getElementById("result").innerText = result + "  !!";

});


let yes2 = document.getElementById('yes2'),
    no2 = document.getElementById('no2');
yes2.addEventListener('click', function yes2() {
    swal({
        text: "Acha Ji !! Pata hai Juth bol rahe ho Lekin koi baat ni chalega !!",
        icon: "warning"
    });
    if (box5.style.visibility != 'visible') {
        box5.style.visibility = 'visible';
        box5.style.transition = "visibility 3.5s ease-in-out";
    } else {
        box5.style.visibility = 'hidden';
        box5.style.transition = "visibility 3.5s ease-in-out";
    }
    if (box6.style.visibility != 'visible') {
        box6.style.visibility = 'visible';

    } else {
        box6.style.visibility = 'hidden';
    }
    return false;
});

no2.addEventListener('click', function no2() {
    swal({
        text: "Thik Hai BETA is baar chala leta hu lekin agli baar ni chalaunga !!",
        icon: "success"
    });
    if (box5.style.visibility != 'visible') {
        box5.style.visibility = 'visible';
        box5.style.transition = "visibility 3.5s ease-in-out";
    } else {
        box5.style.visibility = 'hidden';
        box5.style.transition = "visibility 3.5s ease-in-out";
    }
    if (box6.style.visibility != 'visible') {
        box6.style.visibility = 'visible';

    } else {
        box6.style.visibility = 'hidden';
    }
    return false;
});


let garam = document.getElementById('garam');
baxa6.addEventListener('click', function chai() {
    if (garam.selectedIndex == 0) {
        swal({
            text: "Ka Pina hai Batao to Sahi",
            icon: "warning"
        });
        document.getElementById('garam').focus();
        return false;

    }
    if (box6.style.visibility != 'visible') {
        box6.style.visibility = 'visible';
        box6.style.transition = "visibility 0.8s ease-in-out";
    } else {
        box6.style.visibility = 'hidden';
        box6.style.transition = "visibility 0.8s ease-in-out";
    }
    if (box7.style.visibility != 'visible') {
        box7.style.visibility = 'visible';

    } else {
        box7.style.visibility = 'hidden';
    }
});

let yes3 = document.getElementById('yes3'),
    no3 = document.getElementById('no3');
yes3.addEventListener('click', function yes3() {
    swal("Rehne do !! Jooth mat bolo pata hai nahi nah ke aye ho !!");

    if (box7.style.visibility != 'visible') {
        box7.style.visibility = 'visible';
        box7.style.transition = "visibility 3.5s ease-in-out";
    } else {
        box7.style.visibility = 'hidden';
        box7.style.transition = "visibility 3.5s ease-in-out";
    }
    if (box8.style.visibility != 'visible') {
        box8.style.visibility = 'visible';

    } else {
        box8.style.visibility = 'hidden';
    }
    return false;
});

no3.addEventListener('click', function no3() {
    swal("Malum Hi tha mereko ki nahi hi aye hoge nah ke !!");

    if (box7.style.visibility != 'visible') {
        box7.style.visibility = 'visible';
        box7.style.transition = "visibility 3.5s ease-in-out";
    } else {
        box7.style.visibility = 'hidden';
        box7.style.transition = "visibility 3.5s ease-in-out";
    }
    if (box8.style.visibility != 'visible') {
        box8.style.visibility = 'visible';

    } else {
        box8.style.visibility = 'hidden';
    }
    return false;
});

baxa8.addEventListener('click', function disp() {
    swal({
        text: "Pata hai kuch Nahi kiya hai Lekin chalega ab or kya !!",
        icon: "warning"
    });

    if (box8.style.visibility != 'visible') {
        box8.style.visibility = 'visible';
        box8.style.transition = "visibility 3.5s ease-in-out";
    } else {
        box8.style.visibility = 'hidden';
        box8.style.transition = "visibility 3.5s ease-in-out";
    }
    if (box9.style.visibility != 'visible') {
        box9.style.visibility = 'visible';

    } else {
        box9.style.visibility = 'hidden';
    }
    return false;
});

let hurray = document.getElementById('hurray');
hurray.addEventListener('click', function disp() {
    swal({
        text: "Abhi toh Yh pehla level tha Beta age dekh kya hota hai !!!",
        icon: "warning"
    });
});