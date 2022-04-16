let selectedMap = {mapName: "Blood In The Snow", templatesIndex:0};
let selectedObjectMap = {};
const elements = {
    textField: document.getElementsByClassName('textArea-1')[0],
    processBtn: document.querySelectorAll(".btn")[1],
    waves: document.querySelectorAll(".zone"),
    bonusObjectives: document.querySelectorAll(".bonus-objective"),
    bossModifiers: document.querySelectorAll(".boss-modifier"),
    clearBtn: document.querySelectorAll(".btn")[2],
    templateButton: document.querySelectorAll(".btn")[0],
    amounts: document.querySelectorAll(".amount"),
    mapSelection: document.querySelectorAll("#mapSelection")[0],
    appContainer: document.querySelectorAll("#app-container")[0],
    body: document.body,
    sectionOneContainer: document.querySelectorAll(".one")[0],
    sectionTwoContainer: document.querySelectorAll(".two")[0],
    currentWeek: document.querySelectorAll(".week")[0],
    weeklyModifiers: document.querySelectorAll(".w-modifier"),
    previousAlert: document.querySelectorAll(".error-alert")[0],
    credits: document.querySelectorAll(".credits")[0],
    date: document.querySelectorAll(".date")[0],
    version: document.querySelectorAll(".version")[0],
    title: document.querySelectorAll(".title")[0]
}

let rawData = "";
let processed = [];
let template_1 = {
    week:2,
    map: "blood in the snow",
    modifiers:["Immunity", "Hwachas"],
    zones:[
        "Camp", "Mine", "Outpost",
        "Camp", "Outpost", "Mine",
        "Outpost", "Camp", "Mine",
        "Outpost-T#2", "Mine", "Outpost",
        "Camp", "Outpost", "Camp",
        "Mine", "Camp", "Outpost",
        "Mine", "Mine", "Outpost",
        "Mine", "Mine-T#2", "Outpost",
        "Camp", "Mine", "Outpost",
        "Outpost", "Mine", "Outpost",
        "Outpost", "Mine", "Outpost", 
        "Camp", "Camp", "Mine",
        "Mine", "Outpost", "Camp",
        "Mine", "Camp", "Camp",
        "Camp", "Camp", "Mine"
    ],
    bonus: [
        {objective: "Headshots", amount:25}
        , {objective: "Kill Inside Def. Area", amount:25}
        , {objective: "Ghost Weapon Kills", amount:5}
        , {objective: "Fire DMG Kills", amount: 15}
        , {objective: "Kill Outside Def. Area", amount:25}
    ],
    bossWave: ["Wildfire", "Eruption", "Fighting Blind", "Burning Blades", "Eruption"],
    credits:["player#1", "player#2", "player#n"],
    tengu:[4,8]
}

const templates = {
    bloodInTheSnow:{
        week:2,
        map: "Blood In The Snow",
        modifiers:["Immunity", "Hwachas"],
        zones:[
            "Camp", "Mine", "Outpost",
            "Camp", "Outpost", "Mine",
            "Outpost", "Camp", "Mine",
            "Outpost-T#2", "Mine", "Outpost",
            "Camp", "Outpost", "Camp",
            "Mine", "Camp", "Outpost",
            "Mine", "Mine", "Outpost",
            "Mine", "Mine-T#2", "Outpost",
            "Camp", "Mine", "Outpost",
            "Outpost", "Mine", "Outpost",
            "Outpost", "Mine", "Outpost", 
            "Camp", "Camp", "Mine",
            "Mine", "Outpost", "Camp",
            "Mine", "Camp", "Camp",
            "Camp", "Camp", "Mine"
        ],
        bonus: [
            {objective: "Headshots", amount:25}
            , {objective: "Kill Inside Def. Area", amount:25}
            , {objective: "Ghost Weapon Kills", amount:5}
            , {objective: "Fire DMG Kills", amount: 15}
            , {objective: "Kill Outside Def. Area", amount:25}
        ],
        bossWave: ["Wildfire", "Eruption", "Fighting Blind", "Burning Blades", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["4-1","8-2","9-1#1, 9-2#2, 9-3#3"],
        background: "Blood In The Snow.png",
    },
    shadowsOfWar:{
        week:6,
        map: "The Shadows Of War",
        modifiers:["Empowered Foes", "Eyes Of Iyo"],
        zones:[
            "Barracks", "Barracks", "Dojo",
            "Dojo", "Stable", "Stable",
            "Dojo", "Barracks", "Stable",
            "Stable", "Dojo", "Barracks",
            "Stable", "Dojo", "Barracks",
            "Stable", "Dojo", "Barracks",
            "Stable", "Dojo", "Barracks",
            "Barracks", "Stable", "Stable",
            "Dojo", "Barracks", "Stable",
            "Barracks", "Stable", "Barracks",
            "Dojo", "Stable", "Stable",
            "Stable", "Barracks", "Barracks", 
            "Barracks", "Dojo", "Stable",
            "Dojo", "Barracks", "Barracks",
            "Barracks", "Dojo", "Stable"
        ],
        bonus: [
            {objective: "Headshots", amount:25}
            , {objective: "Kill Inside Def. Area", amount:25}
            , {objective: "Ghost Weapon Kills", amount:5}
            , {objective: "Fire DMG Kills", amount: 15}
            , {objective: "Kill Outside Def. Area", amount:25}
        ],
        bossWave: ["Fighting Blind", "Burning Blades", "Toxic Clouds", "Wildfire", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["5-3","7-1"],
        background:"The Shadows Of War.png"
    },
    defenseOfAoiVillage:{
        week:5,
        map: "The Defense Of Aoi Village",
        modifiers:["Reduced Healing", "Hwachas"],
        zones:[ 
            "Villa", "Farm-Right", "Side",
            "Beach", "Farm-Right", "Villa",
            "Villa", "Side", "Farm-Left",
            "Farm-Right", "Farm-Left", "Beach",
            "Beach", "Villa", "Side",
            "Beach", "Villa", "Farm-Right",
            "Villa", "Beach", "Farm-Right",
            "Farm-Left", "Villa", "Beach",
            "Villa", "Side", "Side",
            "Farm-Right", "Beach", "Villa",
            "Villa", "Villa", "Farm-Left", 
            "Side", "Villa", "Villa",
            "Beach", "Beach", "Farm-Left",
            "Villa", "Farm-Left", "Beach",
            "Farm-Right", "Villa", "Farm-Left"
        ],
        bonus: [
            {objective: "P.Parry Counter ATK", amount:15}
            , {objective: "Kill Outside Def. Area", amount:25}
            , {objective: "Assassinate From Above", amount:5}
            , {objective: "Ranged Kills", amount:20}
            , {objective: "Fire DMG Kills", amount: 15}
        ],
        bossWave: ["Toxic Clouds", "Eruption", "Fighting Blind", "Slowed Revives", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["4-1","8-2"],
        background: "The Defense Of Aoi Village.png"
    },
    shoresOfVengeance:{
        week:1,
        map: "The Shores Of Vengeance",
        modifiers:["Tool Shortage", "Eyes Of Iyo"],
        zones:[
            "Beach", "Boat", "Cliff-Hut",
            "Beach", "Beach", "Boat",
            "Beach", "Cliff-Hut", "Beach",
            "Beach", "Cliff-Forest", "Boat",
            "Boat", "Cliff-Forest", "Beach",
            "Beach", "Beach", "Cliff-Forest",
            "Beach", "Cliff-Forest", "Beach",
            "Boat", "Cliff-Forest", "Cliff-Hut",
            "Boat", "Beach", "Boat",
            "Boat", "Beach", "Beach",
            "Beach", "Beach", "Boat", 
            "Cliff-Forest", "Beach", "Boat",
            "Beach", "Beach", "Cliff-Hut",
            "Boat", "Beach", "Cliff-Forest",
            "Cliff-Forest", "Boat", "Beach"
        ],
        bonus: [
            {objective: "Ranged Kills", amount:20}
            , {objective: "Kill Inside Def. Area", amount:25}
            , {objective: "Ghost Weapon Kills", amount:5}
            , {objective: "Assassinate | Crits", amount: 10}
            , {objective: "Headshots", amount:25}
        ],
        bossWave: ["Eruption", "Toxic Clouds", "Burning Blades", "Wildfire", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["5-3","7-1"],
        background:"The Shores Of Vengeance.png"
    },
    twilightAndAshes:{
        week:7,
        map: "Twilight And Ashes",
        modifiers:["Incapacitated", "Hwachas"],
        zones:[
            "Boulder-Ledge", "Obelisk", "Cliff-Ledge",
            "Side-LH", "Side-LH", "Boulder-Ledge",
            "Side-LH", "Obelisk", "Cliff-Ledge",
            "Cliff-Ledge", "Boulder-LH", "Boulder-Ledge",
            "Side-LH", "Side-LH", "Cliff-Ledge",
            "Side-LH", "Boulder-Ledge", "Obelisk",
            "Cliff-LH", "Obelisk", "Cliff-Ledge",
            "Side-LH", "Side-LH", "Obelisk",
            "Obelisk", "Obelisk", "Cliff-Ledge",
            "Cliff-LH", "Cliff-Ledge", "Obelisk",
            "Obelisk", "Cliff-LH", "Obelisk", 
            "Side-LH", "Side-LH", "Obelisk",
            "Obelisk", "Obelisk", "Cliff-LH",
            "Boulder-LH", "Obelisk", "Boulder-Ledge",
            "Obelisk", "Obelisk", "Boulder-LH"
        ],
        bonus: [
            {objective: "Headshots", amount:25}
            , {objective: "Assassinate From Above", amount:5}
            , {objective: "Fire DMG Kills", amount: 15}
            , {objective: "Kill Outside Def. Area", amount:25}
            , {objective: "Ghost Weapon Kills", amount:5}
        ],
        bossWave: ["Toxic Clouds", "Wildfire", "Fighting Blind", "Immunity", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["5-3","7-1"],
        disciple:["3#2","12-1#1"],
        background: "Twilight And Ashes.png"
    },
    bloodAndSteel:{
        week:4,
        map: "Blood And Steel",
        modifiers:["Barbed Arrows", "Disciples"],
        zones:[
            "Cliff-Cart", "Island-Cart", "Camp-Right",
            "Island-Left", "Island-Cart", "Camp-Right",
            "Cliff-Cart", "Cliff-Top", "Camp-Right",
            "Island-Left", "Island-Cart", "Camp-Left",
            "Island-Left", "Camp-Right", "Isalnd-Cart",
            "Cliff-Cart", "Camp-Left", "Isalnd-Cart",
            "Camp-Right", "Cliff-Top", "Cliff-Top",
            "Camp-Left", "Isalnd-Cart", "Isalnd-Cart",
            "Camp-Right", "Island-Left", "Isalnd-Cart",
            "Cliff-Top", "Island-Left", "Cliff-Top",
            "Island-Left", "Camp-Left", "Cliff-Cart", 
            "Cliff-Top", "Island-Left", "Camp-Right",
            "Isalnd-Cart", "Cliff-Top", "Island-Left",
            "Camp-Right", "Island-Cart", "Camp-Right",
            "Isalnd-Left", "Camp-Right", "Camp-Right"
        ],
        bonus: [
             {objective: "Assassinate|Crits", amount:10}
            ,{objective: "Kill Inside Def. Area", amount:25}
            ,{objective: "Headshots", amount:25}
            , {objective: "Assassinate From Above", amount: 5}
            , {objective: "P.Parry Counter ATK", amount:15}
        ],
        bossWave: ["Fighting Blind", "Slowed Revives", "Burning Blades", "Toxic Clouds", "Eruption"],
        credits:["player#1", "player#2", "player#n"],
        tengu:["5-3","7-1"],
        background: "Blood And Steel.png"
    }
}
let legend = {

};
elements.mapSelection.addEventListener("change", selectMapTemplate);
elements.templateButton.addEventListener("click", addTemplateToTextArea);
elements.clearBtn.addEventListener("click",clear)
elements.processBtn.addEventListener("click",processData)
function processData(){
    if(elements.textField.value.length == 0){
        showAlert("error","No data were provided!")
        return 
    }
    let selectedTemplate = templates[Object.keys(templates)[selectedMap.templatesIndex]];
    rawData = elements.textField.value;
    processed = rawData.split("\n").filter((element)=> element != "");
    if(processed.length < 20){
        showAlert("error", "Insuffecient Data, please use the template and modfiy it as needed.");
        return
    }
    processedWaves = {};
    const check = isMapAvailable(processed[1]);
    if(processed[1].toLowerCase() != selectedMap.mapName && check.isAvailable){
        selectedTemplate = templates[Object.keys(templates)[check.id]];
        elements.mapSelection.value = selectedTemplate.map; 
        selectedMap.mapName = processed[1];
        selectedMap.templatesIndex = check.id;
    }
    for(i = 0; i < 15; i++){
        processedWaves["w".concat(i+1)] = processed[i+4].split(",");
    }
    let counter = 0;
    for(i = 1; i < 16; i++){
        for(j = 0; j<3; j++){
            if(processedWaves["w".concat(i)][j].trim().length > 13){
                showAlert("error", "Zone maximum (13) characters exceeded!\n Cause:\""+processedWaves["w".concat(i)][j]+"\"");
                return
            }
            elements.waves[counter].innerText = processedWaves["w".concat(i)][j];
            counter++;
        }
    }
    for(i = 0; i < elements.bonusObjectives.length; i++){
        if(selectedTemplate.bonus[i].objective.length >= 13 && selectedTemplate.bonus[i].objective.length < 20){
            elements.bonusObjectives[i].classList.add("tooLong");
        }
        if(selectedTemplate.bonus[i].objective.length >= 20){
            elements.bonusObjectives[i].classList.add("toooLong");
        }
        elements.bonusObjectives[i].innerText = selectedTemplate.bonus[i].objective;
    }
    for(i = 0; i < elements.bossModifiers.length; i++){
        if(selectedTemplate.bossWave[i].length > 13){
            elements.bossModifiers[i].classList.add("tooLong");
        }
        elements.bossModifiers[i].innerText =  selectedTemplate.bossWave[i];
    }

    for(i = 0; i < elements.amounts.length; i++ ){
        elements.amounts[i].innerText =  selectedTemplate.bonus[i].amount;
    }
    if (processed[2].trim().length > 16 || processed[3].trim().length > 16 ) {
        showAlert("error","Weekly modifiers (16) characters exceeded!");
        return
    } else {
        elements.weeklyModifiers[0].innerText = processed[2];
        elements.weeklyModifiers[1].innerText = processed[3];
    }

    if(processed[19].trim().length > 54){
        showAlert("error","Credits maximum (54) characters exceeded!");
        return
    }else{
        elements.credits.innerHTML = "<span class=\"credits-label\">Credits </span>".concat(processed[19]);
    }
    if(isNaN(processed[0])){
        showAlert("error","Week number is not a number! Provided \""+processed[0]+"\"");
        return
    }else{
        elements.currentWeek.innerText = "Week #".concat(processed[0]);
    }
   if (processed[20].trim().length > 11) {
       showAlert("error","Maximum version (11) characters exceeded!");
       return
   } else {
       elements.version.innerText = processed[20] || "ver2.18";
   }
    const currentDate = new Date();
    elements.date.innerText = "".concat(currentDate.getDate()+" "+(getAlphaMonth(currentDate.getMonth()))+" "+currentDate.getFullYear());
    const image = document.createElement("img");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    image.src = "img/".concat(selectedTemplate.background);
    image.classList.add("back-drop");
    if(typeof document.querySelectorAll(".back-drop")[0] == "undefined"){
        elements.sectionTwoContainer.insertBefore(image, document.querySelectorAll(".list-container")[0]);
        elements.sectionTwoContainer.insertBefore(overlay, image);
    }else{
        document.querySelectorAll(".back-drop")[0].remove();
        elements.sectionTwoContainer.insertBefore(image, document.querySelectorAll(".list-container")[0]);
    }
    elements.title.classList.remove("fade-out");
    elements.title.classList.add("setVisible","slide-in");
    elements.sectionTwoContainer.classList.remove("fade-out");
    elements.sectionTwoContainer.classList.add("setVisible","slide-in");
    
}

function selectMapTemplate(){
    selectedMap.mapName = this.value;
    const check = isMapAvailable(selectedMap.mapName);
    if(check.isAvailable){
        selectedMap.templatesIndex = check.id;
    }
    addTemplateToTextArea();
}
function addTemplateToTextArea(){
    const check =  isMapAvailable(selectedMap.mapName);
       if(check.isAvailable){
        elements.textField.value = templateToString(templates[Object.keys(templates)[check.id]]).concat("ver2.18");
        }
}

function clear(){
    elements.textField.value = "";
    elements.title.classList.replace("slide-in","fade-out");
    elements.sectionTwoContainer.classList.replace("slide-in", "fade-out");
}

function displayTemplate(){
    document.querySelectorAll(".textArea-1")[0].innerHTML = templateToString(templates.twilightAndAshes);
}

function templateToString(template){
    text=template.week+"\n"+template.map+"\n"+template.modifiers[0]+"\n"+template.modifiers[1]+"\n";
    for(i=0; i<template.zones.length; i++){
      text = text.concat(template.zones[i]+(((i+1) % 3 == 0 && i != 0)? "\n": ", "));
    }

    text = text.concat(template.credits[0]+", "+template.credits[1]+","+template.credits[2]+"\n");
    return text;
    
}

function showAlert(type, message){
    if(typeof elements.previousAlert != "undefined"){
        elements.previousAlert.remove();
    }
    window.scroll(0,0);
    const alert = document.createElement("p");
    alert.innerText = message;
    elements.appContainer.insertBefore(alert,elements.sectionOneContainer);
    if(type="error"){
        alert.classList.add("error-alert", "slide-in");
    }
    elements.previousAlert = document.querySelectorAll(".error-alert")[0];
    if(typeof elements.previousAlert != "undefined"){
        setTimeout(function(){
            alert.classList.replace("slide-in", "fade-out");
            setTimeout(()=>elements.previousAlert.remove(),500);
        },3000);
    }
}

function isMapAvailable(otherMap){
    if(typeof otherMap == "undefined"){
        showAlert("error", "Insuffecient Data, please use the template and modfiy it as needed.");
        return
    }else{
        const maps = Object.entries(templates).map(element => element[1].map);
        let isAvailable = false;
        let id= -1;
        maps.forEach((element,index) => {
            if(typeof otherMap != undefined && otherMap.toLowerCase() == element.toLowerCase()){
                isAvailable =true;
                id = index; 
            }
        });
        return {isAvailable,id};
    }
}

function getAlphaMonth(monthNumber){
    const months = ["Jan", "Feb", "March", "April", "May"
    , "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    switch(monthNumber){
        case 0: return months[0];
        break;
        case 1: return months[1];
        break;
        case 2: return months[2];
        break;
        case 3: return months[3];
        break;
        case 4: return months[4];
        break;
        case 5: return months[5];
        break;
        case 6: return months[6];
        break;
        case 7: return months[7];
        break;
        case 8: return months[8];
        break;
        case 9: return months[9];
        break;
        case 10: return months[10];
        break;
        case 11: return months[11];
        break;
    }
}

