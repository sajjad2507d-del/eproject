



// temperature javascrip
function gottotempage() {

    window.location.href = "temperature.html";
}
function convertTemp() {
    const temperature = document.getElementById("t1").value.trim();

    let v = parseFloat(document.getElementById("t1").value);
    let t = document.getElementById("ttype").value;
    let r = 0;

    if (t === "f-c") r = (v - 32) * 5 / 9;
    if (t === "c-f") r = (v * 9 / 5) + 32;

    document.getElementById("tresult").value = r;

    if (temperature === "") {
        message.style.color = "red";
        message.style.padding = "10px 5px"
        message.style.width = " 100%"
        message.textContent = "⚠️ Please Enter the   value!";
        return;
    }
    else {
        message.textContent = "";
            message.style.padding = " 0px"
    }
}





// LENGTH

function gottolegpage() {

    window.location.href = "length.html";
}
function convertLength() {
    const length = document.getElementById("l1").value.trim();
    let v = parseFloat(document.getElementById("l1").value);
    let t = document.getElementById("ltype").value;
    let r = 0;

    if (t === "in-mm") r = v * 25.4;
    if (t === "ft-m") r = v * 0.3048;
    if (t === "yd-m") r = v * 0.9144;
    if (t === "mi-km") r = v * 1.60934;

    document.getElementById("lresult").value = r;

    if (length === "") {
        message.style.color = "red";
        message.style.padding = "10px 5px"
        message.style.width = " 100%"
        message.textContent = "⚠️ Please Enter the   value!";
        return;
    }
    else {
        message.textContent = "";
            message.style.padding = " 0px"
    }
}

// MASS javascrip

function gottomasspage() {

    window.location.href = " mass.html";
}
function convertMass() {
    const mass = document.getElementById("m1").value.trim();
    let v = parseFloat(document.getElementById("m1").value);
    let t = document.getElementById("mtype").value;
    let r = 0;

    if (t === "oz-g") r = v * 28.3495;
    if (t === "lb-kg") r = v * 0.453592;
    if (t === "ton-mt") r = v * 0.907185;

    document.getElementById("mresult").value = r;


    if (mass === "") {
        message.style.color = "red";
        message.style.padding = "10px 5px"
        message.style.width = " 100%"
        message.textContent = "⚠️ Please Enter the   value!";
        return;
    }
    else {
        message.textContent = "";
            message.style.padding = " 0px"
    }
}


// volme javascripe
function gottovolumepage() {

    window.location.href = " volume.html";
}
function convertVolume() {
    const volume = document.getElementById("v1").value.trim();
    let v = parseFloat(document.getElementById("v1").value);
    let t = document.getElementById("vtype").value;
    let r = 0;

    if (t === "oz-ml") r = v * 29.5735;
    if (t === "gal-l") r = v * 3.78541;
    if (t === "cuft-cum") r = v * 0.0283168;
    if (t === "cuyd-cum") r = v * 0.764555;

    document.getElementById("vresult").value = r;
     if (volume === "") {
        message.style.color = "red";
        message.style.padding = "10px 5px"
        message.style.width = " 100%"
        message.textContent = "⚠️ Please Enter the   value!";
        return;
    }
    else {
        message.textContent = "";
            message.style.padding = " 0px"
    }
}




// speed javascrip
function gottospeedpage() {

    window.location.href = " speed.html";
}
function convertspeed(){
     const speed = document.getElementById("S1").value.trim();
    let v = parseFloat(document.getElementById("S1").value);
    let t = document.getElementById("Stype").value;
    let r = 0;

    if(t === "in-mm") r = v * 25.4;      // Inches to Millimeters
    if(t === "ft-m") r = v * 0.3048;     // Feet to Meters
    if(t === "yd-m") r = v * 0.9144;     // Yards to Meters
    if(t === "mi-km") r = v * 1.60934;   // Miles to Kilometers

    document.getElementById("Sresult").value = r;


     if (speed === "") {
        message.style.color = "red";
        message.style.padding = "10px 5px"
        message.style.width = " 100%"
        message.textContent = "⚠️ Please Enter the   value!";
        return;
    }
    else {
        message.textContent = "";
        message.style.padding = " 0px"
    }
}


// AREA js q
function gottoareapage() {

    window.location.href = " area.html";
}
function convertarea() {
    let v = parseFloat(document.getElementById("a1").value);
    let t = document.getElementById("atype").value;
    let r = 0;

    if(t === "sqin-sqmm") r = v * 645.16;
    if(t === "sqft-sqm") r = v * 0.092903;
    if(t === "sqyd-sqm") r = v * 0.836127;
    if(t === "acre-hec") r = v * 0.404686;
    if(t === "sqmi-sqkm") r = v * 2.58999;

    document.getElementById("aresult").value = r;
}




