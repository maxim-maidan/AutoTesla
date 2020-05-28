var colorOutside, colorInsideS, battery, fullDrive, sport, autoPilot, skin, firstName, lastName, phone, email, cost;
var counterDrive = 0;
var counterSport = 0;
var counterPilot = 0;
var counterSkin = 0;

function makeOrder() {
    firstName = document.getElementById('firstName').textContent;
    lastName = document.getElementById('lastName').textContent;
    phone = document.getElementById('phone').textContent;
    email = document.getElementById('email').textContent;
}
function color(value) {
    document.getElementById('CarPhoto').src = "app."+value;
    colorOutside = value;
}
function colorInside(value) {
    document.getElementById('IntPhoto').src = "app."+value;
    colorInsideS = value;
}
function batterySelector(size) {
    battery = size;
    updateBattery()
}
function fullSelector() {
    counterDrive++;
    fullDrive = counterDrive%2;
    updateFullDrive();
}
function sportSelector() {
    counterSport++;
    sport = counterSport%2;
    updateSport()
}
function autoPilotSelector() {
    counterPilot++;
    autoPilot = counterPilot%2;
    updateAuto()
}
function skinSelector(a) {
    counterSkin++;
    skin = counterSkin%2;
    updateSkin()
}
function updateSkin(){
    let cost;
    if(skin === 1){
        cost= parseInt(document.getElementById('cost').textContent);
        cost = cost + 3000;
        document.getElementById('cost').innerText = cost;
    }
    if(skin === 0){
        cost= parseInt(document.getElementById('cost').textContent);
        cost = cost - 3000;
        document.getElementById('cost').innerText = cost;
    }
    update();
}
function updateSport(){
    let cost,speed;
    if(sport === 1){
        cost= parseInt(document.getElementById('cost').textContent);
        speed= parseFloat(document.getElementById('speed').textContent);
        cost = cost + 3000;
        speed = speed - 2.5;
        document.getElementById('cost').innerText = cost;
        document.getElementById('speed').innerText = speed;
    }
    if(sport === 0){
        cost= parseInt(document.getElementById('cost').textContent);
        speed= parseFloat(document.getElementById('speed').textContent);
        cost = cost - 3000;
        speed = speed + 2.5;
        document.getElementById('cost').innerText = cost;
        document.getElementById('speed').innerText = speed;
    }
    update();
}
function updateAuto(){
    let cost;
    if(autoPilot === 1){
        cost= parseInt(document.getElementById('cost').textContent);
        cost = cost + 5000;
        document.getElementById('cost').innerText = cost;
    }
    if(autoPilot === 0){
        cost = parseInt(document.getElementById('cost').textContent);
        cost = cost - 5000;
        document.getElementById('cost').innerText = cost;
    }
    update();
}
function updateFullDrive(){
    let cost;
    if(fullDrive === 1){
        cost= parseInt(document.getElementById('cost').textContent);
        cost = cost + 5000;
        document.getElementById('cost').innerText = cost;
    }
    if(fullDrive === 0){
        cost= parseInt(document.getElementById('cost').textContent);
        cost = cost - 5000;
        document.getElementById('cost').innerText = cost;
    }
    update();
}
function updateBattery() {
    if(battery === 75)document.getElementById('range').innerText = '300';

    if(battery === 85)document.getElementById('range').innerText = '400';

    if(battery === 95)document.getElementById('range').innerText = '500';

    if(battery === 100)document.getElementById('range').innerText = '550';
    update();
}
function update(){
    document.getElementById('cost1').innerText = document.getElementById('cost').textContent;
    document.getElementById('speed1').innerText = document.getElementById('speed').textContent;
    document.getElementById('range1').innerText = document.getElementById('range').textContent;
    cost = document.getElementById('cost').textContent;
}