// Holds bonus objective info
let bonusObjectives = [
    {objective: "Headshots", amount:25,svg:"b-headshots.svg",png:"b-headshots.png"},
    {objective: "Kill Inside Def. Area", amount:25,svg:"b-killsIn.svg",png:"b-killsIn.png"},
    {objective: "Ghost Weapon Kills", amount:5,svg:"b-ghostWeaponKills.svg",png:"b-ghostWeaponKills.png"},
    {objective: "Fire DMG Kills", amount: 15,svg:"b-fireKills.svg",png:"b-fireKills.png"},
    {objective: "Kill Outside Def. Area", amount:25,svg:"b-killsOut.svg",png:"b-killsOut.png"},
    {objective: "P.Parry Counter ATK", amount:15,svg:"b-parries.svg",png:"b-parries.png"},
    {objective: "Assassinate From Above", amount:5,svg:"b-assassinateFromAbove.svg",png:"b-assassinateFromAbove.png"},
    {objective: "Ranged Kills", amount:20,svg:"b-rangedKills.svg",png:"b-rangedKills.png"},
    {objective: "Assassinate | Crits", amount: 10,svg:"b-crits.svg",png:"b-crits.png"},
];
// Holds boss wave modifiers info
let bossWaveModifiers = [
    {modifier:"Wildfire",svg:"v-wildFire.svg",png:"v-wildFire.png"},
    {modifier:"Eruption",svg:"v-eruption.svg",png:"v-eruption.png"},
    {modifier:"Fighting Blind",svg:"v-fightingBlind.svg",png:"v-fightingBlind.png"},
    {modifier:"Burning Blades",svg:"v-burningBlades.svg",png:"v-burningBlades.png"},
    {modifier:"Toxic Clouds",svg:"v-toxicClouds.svg",png:"v-toxicClouds.png"},
    {modifier:"Slowed Revives",svg:"v-slowedRevives.svg",png:"v-slowedRevives.png"},
    {modifier:"Immunity",svg:"v-immunity.svg",png:"v-immunity.png"},
    {modifier:"Tool Shortage",svg:"v-toolShortage.svg",png:"v-toolShortage.png"},
];
//  Holds weekly modifiers info
const w_modifiers_1 = [
    {modifier:"Barbed Arrows", svg:"w-barbedArrows.svg", png:"w-barbedArrows.png"},
    {modifier:"Empowered Foes", svg:"w-empoweredFoes.svg", png:"w-empoweredFoes.png"},
    {modifier:"Immunity", svg:"w-immunity.svg", png:"w-immunity.png"},
    {modifier:"Incapacitated", svg:"w-incapacitated.svg", png:"w-w-incapacitated.png"},
    {modifier:"Reduced Healing", svg:"w-reducedHealing.svg", png:"w-reducedHealing.png"},
    {modifier:"Slowed Revives", svg:"w-slowedRevives.svg", png:"w-slowedRevives.png"},
    {modifier:"Tool Shortage", svg:"w-toolShortage.svg", png:"w-toolShortage.png"},
];
const w_modifiers_2 = [
    {modifier:"Fire Spirits, Hwachas", svg:"w-hwachas.svg", png:"w-hwachas.png"},
    {modifier:"Eyes Of Iyo", svg:"w-eyesOfIyo.svg", png:"w-eyesOfIyo.png"},
    {modifier:"Disciples Of Iyo", svg:"w-disciple.svg", png:"w-disciple.png"},
];
// Holds the template info
const templates = {
    bloodInTheSnow:{
        week:2,
        map: "Blood In The Snow",
        modifiers:["Immunity", "Hwachas"],
        zones:[
            "Camp", "Mine", "Outpost",
            "Camp", "Outpost", "Mine",
            "Outpost", "Camp", "Mine",
            "Outpost*T#2", "Mine", "Outpost",
            "Camp", "Outpost", "Camp",
            "Mine", "Camp", "Outpost",
            "Mine", "Mine", "Outpost",
            "Mine", "Mine*T#2", "Outpost",
            "Camp*T#1", "Mine*T#2", "Outpost*T#3",
            "Outpost", "Mine", "Outpost",
            "Outpost", "Mine", "Outpost", 
            "Camp", "Camp", "Mine",
            "Mine", "Outpost", "Camp",
            "Mine", "Camp", "Camp",
            "Camp", "Camp", "Mine"
        ],
        bonus: [
            bonusObjectives[0],
            bonusObjectives[1],
            bonusObjectives[2],
            bonusObjectives[3],
            bonusObjectives[4]
        ],
        bossWave: [
            bossWaveModifiers[0],
            bossWaveModifiers[1],
            bossWaveModifiers[2],
            bossWaveModifiers[3],
            bossWaveModifiers[1],
        ],
        credits:["player#1", "player#2", "player#n"],
        tengu:["10*T#2","23*T#2","25*T#1", "26*T#2", "27*T#3"],
        dogs:[12],
        bears:[15],
        background: "Blood-In-The-Snow.webp",
        key: "bloodInTheSnow",
        selected:false,
        latestUpdate:"8/04/2022",
    },
    shadowsOfWar:{
        week:4,
        map: "The Shadows Of War",
        modifiers:["Reduced Healing", "Eyes Of Iyo"],
        zones:[
            "Dojo Middle", "Stable", "Barracks Left",
            "Dojo Right", "Stable", "Barracks Right",
            "Stable", "Dojo Deep", "Barracks Middle",
            "Stable", "Dojo Middle", "Barracks Right",
            "Barracks Right", "Stable", "Dojo Right*T#2",
            "Dojo Deep", "Stable", "Barracks Left",
            "Barracks Right*T#2", "Dojo Deep", "Barracks Middle",
            "Barracks Middle", "Dojo Deep", "Stable",
            "Stable", "Barracks Left", "Barracks Right",
            "Dojo Right", "Dojo Middle", "Stable",
            "Dojo Right", "Stable", "Stable",
            "Stable", "Barracks Right", "Barracks Left", 
            "Barracks Middle", "Dojo Middle", "Stable",
            "Dojo Deep", "Stable", "Stable",
            "Stable", "Dojo Deep", "Dojo Middle"
        ],
        bonus: [
            bonusObjectives[0],
            bonusObjectives[1],
            bonusObjectives[2],
            bonusObjectives[3],
            bonusObjectives[4]
        ],
        bossWave: [
            bossWaveModifiers[2],
            bossWaveModifiers[3],
            bossWaveModifiers[4],
            bossWaveModifiers[0],
            bossWaveModifiers[1],
            "Fighting Blind", "Burning Blades", "Toxic Clouds", "Wildfire", "Eruption"
        ],
        credits:["player#1", "player#2", "player#n"],
        tengu:["15*T#2","19*T#2"],
        dogs:[12],
        bears:[15],
        background:"The-Shadows-Of-War.webp",
        key: "shadowsOfWar",
        selected:false,
        latestUpdate:"8/04/2022",
    },
    defenseOfAoiVillage:{
        week:5,
        map: "The Defense Of Aoi Village",
        modifiers:["Reduced Healing", "Hwachas"],
        zones:[ 
            "Villa", "Farm-Right", "Side",
            "Beach", "Farm-Right", "Villa",
            "Villa", "Side", "Farm-Left",
            "Farm-Right*T#2", "Farm-Left", "Beach",
            "Beach", "Villa", "Side",
            "Beach", "Villa", "Farm-Right",
            "Villa", "Beach", "Farm-Right",
            "Farm-Left", "Villa*T#2", "Beach",
            "Villa", "Side", "Side",
            "Farm-Right", "Beach", "Villa",
            "Villa", "Villa", "Farm-Left", 
            "Side", "Villa", "Villa",
            "Beach", "Beach", "Farm-Left",
            "Villa", "Farm-Left", "Beach",
            "Farm-Right", "Villa", "Farm-Left"
        ],
        bonus: [
            bonusObjectives[5],
            bonusObjectives[4],
            bonusObjectives[6],
            bonusObjectives[7],
            bonusObjectives[3]
        ],
        bossWave: [
            bossWaveModifiers[4],
            bossWaveModifiers[1],
            bossWaveModifiers[2],
            bossWaveModifiers[5],
            bossWaveModifiers[1],
            "Toxic Clouds", "Eruption", "Fighting Blind", "Slowed Revives", "Eruption"
        ],
        credits:["player#1", "player#2", "player#n"],
        tengu:["10*T#2","23*T#2"],
        dogs:[9,12],
        bears:[9,15],
        background: "The-Defense-Of-Aoi-Village.webp",
        key: "defenseOfAoiVillage",
        selected:false,
        latestUpdate:"8/04/2022",
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
            "Boat", "Cliff-Forest", "Beach*T#2",
            "Beach", "Beach", "Cliff-Forest",
            "Beach*T#2", "Cliff-Forest", "Beach",
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
            bonusObjectives[7],
            bonusObjectives[1],
            bonusObjectives[2],
            bonusObjectives[8],
            bonusObjectives[0]
        ],
        bossWave: [
            bossWaveModifiers[1],
            bossWaveModifiers[4],
            bossWaveModifiers[3],
            bossWaveModifiers[0],
            bossWaveModifiers[1],
            "Eruption", "Toxic Clouds", "Burning Blades", "Wildfire", "Eruption"
        ],
        credits:["player#1", "player#2", "player#n"],
        tengu:["15*T#2","19*T#2"],
        dogs:[12],
        bears:[12,15],
        background:"The-Shores-Of-Vengeance.webp",
        key:"shoresOfVengeance",
        selected:false,
        latestUpdate:"8/04/2022",
    },
    twilightAndAshes:{
        week: 5,
        map: "Twilight And Ashes",
        modifiers:["Incapacitated","Disciples of Iyo"],
        zones:[
            "Obelisk", "Boulder L", "Side LH",
            "Cliff L", "Side LH", "Side LH",
            "Boulder L*D#2", "Obelisk*D#2", "Cliff L*D#2",
            "Cliff L", "Boulder L", "Side LH",
            "Obelisk", "Side LH", "Boulder LH*T#2",
            "Cliff L", "Obelisk", "Boulder L",
            "Side LH*T#2", "Obelisk", "Obelisk",
            "Obelisk", "Boulder LH", "Obelisk",
            "Obelisk", "Cliff L", "Side LH",
            "Cliff LH", "Obelisk", "Obelisk",
            "Side LH", "Boulder L", "Side LH",
            "Obelisk*D#1", "Boulder LH", "Boulder L",
            "Boulder LH", "Obelisk", "Boulder L",
            "Cliff L", "Cliff LH", "Obelisk",
            "Cliff L", "Side LH", "Obelisk",
        ],
        bonus: [
            bonusObjectives[0],
            bonusObjectives[6],
            bonusObjectives[3],
            bonusObjectives[4],
            bonusObjectives[2]
        ],
        bossWave: [
            bossWaveModifiers[4],
            bossWaveModifiers[0],
            bossWaveModifiers[2],
            bossWaveModifiers[6],
            bossWaveModifiers[1],
            "Toxic Clouds", "Wildfire", "Fighting Blind", "Immunity", "Eruption"
        ],
        credits:["darkenix8895", "jin_sakai2021", "CB9ITOLLIA10RUS" , "MyXaMaToS"],
        tengu:["15*T#2","19*T#2"],
        disciple:["7*D#2","8*D#2","9*D#2","34*D#1"],
        dogs:[12],
        bears:[12,15],
        background: "Twilight-And-Ashes.webp",
        key:"twilightAndAshes",
        selected: true,
        latestUpdate:"1/05/2022",
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
            "Island-Left", "Camp-Right", "Island-Cart*T#2",
            "Cliff-Cart", "Camp-Left", "Island-Cart",
            "Camp-Right*T#2", "Cliff-Top", "Cliff-Top",
            "Camp-Left", "Island-Cart", "Island-Cart",
            "Camp-Right", "Island-Left", "Island-Cart",
            "Cliff-Top", "Island-Left", "Cliff-Top",
            "Island-Left", "Camp-Left", "Cliff-Cart", 
            "Cliff-Top*T#2", "Island-Left*T#2", "Camp-Right*T#2",
            "Island-Cart", "Cliff-Top", "Island-Left",
            "Camp-Right", "Island-Cart", "Camp-Right",
            "Island-Left", "Camp-Right", "Camp-Right"
        ],
        bonus: [
            bonusObjectives[8],
            bonusObjectives[1],
            bonusObjectives[0],
            bonusObjectives[6],
            bonusObjectives[5]
        ],
        bossWave: [
            bossWaveModifiers[2],
            bossWaveModifiers[5],
            bossWaveModifiers[3],
            bossWaveModifiers[4],
            bossWaveModifiers[1],
            "Fighting Blind", "Slowed Revives", "Burning Blades", "Toxic Clouds", "Eruption"
        ],
        credits:["player#1", "player#2", "player#n"],
        tengu:["15*T#2","19*T#2","34*T#2", "35*T#2", "36*T#2"],
        dogs:[12],
        bears:[12,15],
        background: "Blood-And-Steel.webp",
        key:"bloodAndSteel",
        selected:false,
        latestUpdate:"8/04/2022",
    }
}
let previousMap = "";
let updatedTemplates = templates;

// Interactive elements
const elements = {
    textField: document.getElementsByClassName('textArea-1')[0],
    processBtn: document.querySelectorAll(".btn")[1],
    zones: document.querySelectorAll(".zone"),
    bonusObjectives: document.querySelectorAll(".bonus-objective"),
    bossModifiers: document.querySelectorAll(".boss-modifier"),
    clearBtn: document.querySelectorAll(".btn")[2],
    templateButton: document.querySelectorAll(".btn")[0],
    amounts: document.querySelectorAll(".amount"),
    mapSelection: document.querySelectorAll("#mapSelection")[0],
    mapSelection_2: document.querySelectorAll("#mapSelection-2")[0],
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
    title: document.querySelectorAll(".title")[0],
    latestTitle: document.querySelectorAll(".latestUpdate")[0],
    headingContainer: document.querySelectorAll(".heading-container")[0],
    wave_9: document.querySelectorAll(".wave")[8],
    wave_12: document.querySelectorAll(".wave")[11],
    wave_15:document.querySelectorAll(".wave")[14],
    btnsContainer_2: document.querySelectorAll(".button-container-2")[0],
    methodBtns: document.querySelectorAll(".input-method"),
    form: document.querySelectorAll(".form")[0],
    subform_1: document.querySelectorAll(".subform-1")[0],
    subform_2: document.querySelectorAll(".subform-2")[0],
    subform_3: document.querySelectorAll(".subform-3")[0],
    subform_4: document.querySelectorAll(".subform-4")[0],
    nextBtns: document.querySelectorAll(".next"),
    previousBtns: document.querySelectorAll(".previous"),
    donateBtn: document.querySelectorAll(".donateBtn"),
    // legendBtn: document.querySelectorAll(".btn")[3],
    // legend: document.querySelectorAll(".legend")[0],
}

const formElements = {
    currentWeek: document.getElementById("currentWeek"),
    weeklyModifier: document.getElementById("weeklyModifier"),
    weeklyHazard: document.getElementById("weeklyHazard"),
    version: document.getElementById("version"),
    credits: document.getElementById("credits"),
    wave_1: document.getElementById("wave-1"),
    wave_2: document.getElementById("wave-2"),
    wave_3: document.getElementById("wave-3"),
    wave_4: document.getElementById("wave-4"),
    wave_5: document.getElementById("wave-5"),
    wave_6: document.getElementById("wave-6"),
    wave_7: document.getElementById("wave-7"),
    wave_8: document.getElementById("wave-8"),
    wave_9: document.getElementById("wave-9"),
    wave_10: document.getElementById("wave-10"),
    wave_11: document.getElementById("wave-11"),
    wave_12: document.getElementById("wave-12"),
    wave_13: document.getElementById("wave-13"),
    wave_14: document.getElementById("wave-14"),
    wave_15: document.getElementById("wave-15"),
}
// Stores the selected map name and index within the templates array of objects
let initMap = "Blood And Steel";
// Properties
// Method mode
let mode = "latest";
let selected = {
    index: isMapAvailable(initMap).id,
    template: Object.entries(updatedTemplates)[isMapAvailable(initMap).id][1],
};
updateMapSelection(initMap);

// fetch("https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app/templates/-N0u1CLDaCNqIoo2OoH2.json",{
//     method:'PUT',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(updatedTemplates)
// });
fetch("https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app/templates.json")
    .then(
        (response) =>{
            if(response.ok){
               return response.json()
            }
        }
    )
    .then(
        (data) => {
            if(
                typeof data["-N0u1CLDaCNqIoo2OoH2"] == "undefined" ||
                Object.keys(data["-N0u1CLDaCNqIoo2OoH2"]).length > 6 ||
                Object.keys(data["-N0u1CLDaCNqIoo2OoH2"]).length > 6
                ){
                updatedTemplates = templates;
                elements.latestTitle.innerText = "Data missing and desynced!";
            }else{
                updatedTemplates = data["-N0u1CLDaCNqIoo2OoH2"];
                // Stores the selected map name and index within the templates array of objects
                selected = {
                    index: isMapAvailable(Object.entries(updatedTemplates).filter(element => element[1].selected == true)[0][1].map).id,
                    template: Object.entries(updatedTemplates).filter(element => element[1].selected == true)[0][1],
                }
                updateMapSelection(selected.template.map);
                const foundDate = new Date(selected.template.latestUpdate);
                elements.latestTitle.innerText = "Updated On ".concat(foundDate.getDate()+" "+getAlphaMonth(foundDate.getMonth())+" "+ foundDate.getFullYear());
                addTemplateToTextArea()
                processData()
            }
        }
        );

// Stores the text area raw value
let rawData = "";
// Will store the processed raw value line for each index
let processed = [];

// Will store the total 45 zones
let listOfZones = [];

// Adding Events to interactive elements
elements.mapSelection.addEventListener("change", selectMapTemplate);
elements.mapSelection_2.addEventListener("change", selectMapTemplate);
elements.templateButton.addEventListener("click", addTemplateToTextArea);
elements.clearBtn.addEventListener("click",clear);
elements.processBtn.addEventListener("click",processData);
elements.zones.forEach( element => element.addEventListener("click", editZone));
elements.methodBtns[0].addEventListener("click", toggleMethod);
elements.methodBtns[1].addEventListener("click", toggleMethod);
elements.methodBtns[2].addEventListener("click", toggleMethod);
elements.nextBtns.forEach(element => element.addEventListener("click", goNext));
elements.previousBtns.forEach(element => element.addEventListener("click", goBack));
// elements.legendBtn.addEventListener("click", toggleLegend);


// Selects a template then adds it to text area
function selectMapTemplate(e){
    selected.template = Object.entries(updatedTemplates).filter(element => element[1].map == this.value)[0][1]
    clear()
    addTemplateToTextArea();
    if(e.target == elements.mapSelection){
        elements.mapSelection_2.value = e.target.value;
        processData()
    }else{
        elements.mapSelection.value = e.target.value;
    }    
    const check = isMapAvailable(selected.template.map);
    if(check.isAvailable){
        selected.index = check.id;
    }
}

// Adds the template to text area
function addTemplateToTextArea(){
    const check =  isMapAvailable(selected.template.map);
       if(check.isAvailable){
            elements.textField.value = templateToString(updatedTemplates[Object.keys(updatedTemplates)[check.id]]).concat("ver2.18");
        }
}

// Processes the text area input, validates it then throw errors or populate the info-graph
function processData(){
    // Reset state of app on each click
    resetState();
    // Throw an alert when no data is available in text area
    if(elements.textField.value == 0){
        showAlert("error","No data were provided!");
        return
    }
    // Finds the selected templates object and stores it based on selectedMap index property
    let selectedTemplate = updatedTemplates[Object.keys(updatedTemplates)[selected.index]];
    // Add dogs and bears to the info-graph based on template info
    addSpecialEnemySideKick(selectedTemplate);
    // Storing the raw text area value
    if(mode == "form"){
        rawData = formElements.currentWeek.value.trim()+"\n"
                  +elements.mapSelection_2.value.trim()+"\n"
                  +formElements.weeklyModifier.value.trim()+"\n"
                  +formElements.weeklyHazard.value.trim()+"\n"
                  +formElements.wave_1.value.trim()+"\n"
                  +formElements.wave_2.value.trim()+"\n"
                  +formElements.wave_3.value.trim()+"\n"
                  +formElements.wave_4.value.trim()+"\n"
                  +formElements.wave_5.value.trim()+"\n"
                  +formElements.wave_6.value.trim()+"\n"
                  +formElements.wave_7.value.trim()+"\n"
                  +formElements.wave_8.value.trim()+"\n"
                  +formElements.wave_9.value.trim()+"\n"
                  +formElements.wave_10.value.trim()+"\n"
                  +formElements.wave_11.value.trim()+"\n"
                  +formElements.wave_12.value.trim()+"\n"
                  +formElements.wave_13.value.trim()+"\n"
                  +formElements.wave_14.value.trim()+"\n"
                  +formElements.wave_15.value.trim()+"\n"
                  +formElements.credits.value.trim()+"\n"
                  +formElements.version.value.trim();
        elements.textField.value = rawData;
    }else{
        rawData = elements.textField.value.trim();
        if(rawData.split("\n").length > 21 && rawData.split("\n")[21] != "updateTemplate" ){
            let matches = [];
            let uniqueZones = rawData.split("\n");
            let matchedWeek = uniqueZones[0].charAt(uniqueZones[0].length-2);
            let matchedMap = uniqueZones[0].substring(0,uniqueZones[0].indexOf("(")).trim();
            let matchedModifier = uniqueZones[1].substring(uniqueZones[1].indexOf(":")+1, uniqueZones[1].length).trim();
            let matchedHazard = 
                uniqueZones[2].substring(
                    uniqueZones[2].indexOf(":")+1, 
                    (
                        uniqueZones[2].indexOf("/") == -1? uniqueZones[2].length:
                        uniqueZones[2].indexOf("/")
                        )
                    ).trim();
            let matchedCredits = uniqueZones[uniqueZones.length-1];
            matches = [...rawData.matchAll(/(?![\w\s]*[\)])\b[^0-9.(,]+\b/g)];
            // let matches = rawData.matchAll(/(?<!\()(?![\w\s]*[\)])\b[^0-9.(,]+\b/g);
            if(matches.length > 45){
                matches.shift();
                matches.shift();
                matches.shift();
                matches.shift();
                matches.shift();
                matches.pop();
                if(matches.length  == 46)
                    matches.pop();
            }
            if(!rawData.includes("*")){
                let matchedTemplate = Object.entries(updatedTemplates).filter(element => element[1].map.toLowerCase() == matchedMap.toLowerCase())[0][1];
                let tcounter = 0;
                let dcounter = 0;
                for(i = 0; i < matches.length; i++){
                    if(tcounter < matchedTemplate.tengu.length){
                        if(matches.length == 45 && i == parseInt(matchedTemplate.tengu[tcounter].split("*")[0])-1){
                            matches[i][0] = matches[i][0].trim().concat("*"+matchedTemplate.tengu[tcounter].split("*")[1]);
                            tcounter++;
                        }
                    }
                    if(typeof matchedTemplate.disciple != "undefined" && dcounter < matchedTemplate.disciple.length){
                        if(matches.length == 45 && i == parseInt(matchedTemplate.disciple[dcounter].split("*")[0])-1){
                            matches[i][0] = matches[i][0].trim().concat("*"+matchedTemplate.disciple[dcounter].split("*")[1]);
                            dcounter++;
                        }
                    }
                }
            }
            rawData = "";
            rawData = matchedWeek+"\n"
                    +matchedMap+"\n"
                    +matchedModifier+"\n"
                    +matchedHazard+"\n";
            for(i = 0; i < matches.length; i++){
                if((i+1)%3 == 0){
                    rawData = rawData.concat(matches[i][0].trim()+"\n");
                }else{
                    rawData = rawData.concat(matches[i][0].trim()+", ");
                }
            }
            rawData  = rawData.concat(matchedCredits+"\n"+"ver2.18");
            elements.textField.value = rawData;
        }
        
        lines = rawData.split("\n").filter((element)=> element != "");
        formElements.currentWeek.value = lines[0];
        formElements.wave_1.value = lines[4]; 
        formElements.wave_2.value = lines[5];
        formElements.wave_3.value = lines[6];
        formElements.wave_4.value = lines[7];
        formElements.wave_5.value = lines[8];
        formElements.wave_6.value = lines[9];
        formElements.wave_7.value = lines[10];
        formElements.wave_8.value = lines[11];
        formElements.wave_9.value = lines[12];
        formElements.wave_10.value = lines[13];
        formElements.wave_11.value = lines[14];
        formElements.wave_12.value = lines[15];
        formElements.wave_13.value = lines[16];
        formElements.wave_14.value = lines[17];
        formElements.wave_15.value = lines[18];
        formElements.credits.value = lines[19];
        formElements.version.value = lines[20];
    }
    
    // Storing raw value line by line in an array
    processed = rawData.split("\n").filter((element)=> element != "");
    // Select map from text area 
    const check = isMapAvailable(processed[1]);
    if(processed[1].toLowerCase() != selectedTemplate.map.toLowerCase() && check.isAvailable){
        selectedTemplate = updatedTemplates[Object.keys(updatedTemplates)[check.id]];
        selected.template.map = selectedTemplate.map;
        selected.index = check.id;
        updateMapSelection(selectedTemplate.map);
    }
    //Validations
    // Validate and show alert if insufficent lines are available does all other validations 
    if(processed.length < 18){
        showAlert("error", "Insuffecient Data, please use the template and modfiy it as needed.");
        return
    }
    // Validate required lines not empty
    for(k=0; k < processed.length; k++){
        if((k <= 3 || (k >=18 && k <20)) && processed[k].trim().length == 0){
            showAlert("error", "Missing information. (Possibly: week number, map name, weekly modifiers)");
            return
        }else{
            for(i = 4; i < processed.length-2; i++){
                // Validate zones separation character
                if(!processed[i].includes(",")){
                    showAlert("error", "Zones must be separated with \",\" except for the last zone.")
                    return
                }
                for(j=0; j < 3; j++){
                    let waveZones = processed[i].split(",");
                    if(waveZones[j].trim().length == 0 || waveZones.length < 3){
                        showAlert("error", "Wave zone(s) are missing.");
                        return
                    }
                    if(waveZones[j].trim().length > 18){
                        showAlert("error",  "Zone maximum (17) characters exceeded!\n Cause:\""+waveZones[j]+"\"");
                        return
                    }
                }
            }
        }
    }
    if(typeof parseInt(processed[0].trim()) == "NaN" ){
        showAlert("error", "Week number provided is not valid, must be a digit.");
        return
    }else{
        elements.currentWeek.innerText = "Week #".concat(processed[0]);
    }
    tempValidaitonList = Object.entries(updatedTemplates).map(anotherElement => anotherElement[1].map);
    let isValid=false;
    for(i = 0; i < tempValidaitonList.length; i++){
        if(
            tempValidaitonList[i].toLowerCase() == processed[1].trim().toLowerCase() ||
            tempValidaitonList[i].toLowerCase().includes(processed[1].trim().toLowerCase().substring(0,10))){
            isValid = true;
            break;
        }
    }
    if(!isValid){
        showAlert("error", "Map name is not valid!");
        return
    }
    tempValidaitonList = Object.entries(w_modifiers_2).map(anotherElement => anotherElement[1].modifier);
    for(i = 0; i < tempValidaitonList.length; i++){
        let isValid = processed[3].trim().toLowerCase() != tempValidaitonList[i].toLowerCase()
        if(!isValid){
            showAlert("error", "Weekly modifier is not valid!");
            return
        }else{
            break;
        }
    }
    // validate version line
    if (typeof processed[20] == "undefined"){
        showAlert("error","Missing Modifier(s)");
        return
    }else if (processed[20].trim().length > 11) {
        showAlert("error","Maximum version (11) characters exceeded!");
        return
    } else {
        elements.version.innerText = processed[20] || "ver2.18";
    }
    // validates credits
    if(processed[19].trim().length > 66){
        showAlert("error","Credits maximum (66) characters exceeded!");
        return
    }else{
        elements.credits.innerHTML = "<span class=\"credits-label\">Credits </span>".concat(processed[19]);
    }
    // populate listOfZones
    let zonesEndIndex = 0;
    if(processed.length < 22){
        zonesEndIndex = 2
    }else{
        zonesEndIndex = 3
    }
    for(i = 4; i < processed.length-zonesEndIndex; i++){
        processed[i].split(",").forEach(element => listOfZones.push(element.trim()))
    }
    let intersectCounter =  0;

    // populate info-graph zones
    elements.zones.forEach((element,index) => {
        if((index+1)%3 == 0){
            intersectCounter = 0;
        }
        if(listOfZones[index].includes("*")){
            intersectCounter++;
            // store zone flag
            const flag = listOfZones[index].substring(listOfZones[index].indexOf("*")+1, listOfZones[index].length);
            const specialEnemy = document.createElement("img");
            specialEnemy.classList.add("se-"+(index+1));
            if(intersectCounter == 1){
                element.parentElement.parentElement.classList.add("intersectIconPath-"+findZonePlacement(index));
            }else{
                element.parentElement.parentElement.classList
                .replace(element.parentElement.parentElement.classList[element.parentElement.parentElement.classList.length-1]
                    ,"intersectIconPath-"+findTotalIntersects(intersectCounter));
                if(!element.parentElement.parentElement.classList.contains("wave")){
                    element.parentElement.parentElement.classList.add("wave");
                }
            }
            switch(flag){
                case "T#1":
                    specialEnemy.src = "img/svg/x-1-tengu.svg";
                    break;
                case "T#2":
                    specialEnemy.src = "img/svg/x-2-tengu.svg";
                    break;
                case "T#3":
                    specialEnemy.src = "img/svg/x-3-tengu.svg";
                    break;
                case "D#1":
                    specialEnemy.src = "img/svg/x-1-disciple.svg";
                    break;
                case "D#2":
                    specialEnemy.src = "img/svg/x-2-disciple.svg";
                    break;
            }
            element.innerText = listOfZones[index].substring(0, listOfZones[index].indexOf("*"));
            element.classList.add("specialEnemyRed");
            element.parentElement.parentElement.parentElement.appendChild(specialEnemy); 
        }else{
            element.innerText = listOfZones[index];
        }
        
    });
    //
    // populate info-graph with bonus objectives based on selected template
    for(i = 0; i < elements.bonusObjectives.length; i++){
        if(selectedTemplate.bonus[i].objective.length >= 13 && selectedTemplate.bonus[i].objective.length < 20){
            elements.bonusObjectives[i].classList.add("tooLong");
        }
        if(selectedTemplate.bonus[i].objective.length >= 20){
            elements.bonusObjectives[i].classList.add("toooLong");
        }
        elements.bonusObjectives[i].innerText = selectedTemplate.bonus[i].objective;
        elements.bonusObjectives[i].previousSibling.previousSibling.previousSibling.previousSibling.style="background:url(img/svg/"+selectedTemplate.bonus[i].svg+") no-repeat center center";
    }
    // populate info-graph with boss modifiers
    for(i = 0; i < elements.bossModifiers.length; i++){
        if(selectedTemplate.bossWave[i].length > 12){
            elements.bossModifiers[i].classList.add("tooLong");
        }
        elements.bossModifiers[i].innerText =  selectedTemplate.bossWave[i].modifier;
        elements.bossModifiers[i].previousSibling.previousSibling.previousSibling.previousSibling.style="background:url(img/svg/"+selectedTemplate.bossWave[i].svg+") no-repeat center center";
    }
    // populate info-graph with bonus objective kill amounts
    for(i = 0; i < elements.amounts.length; i++ ){
        elements.amounts[i].innerText =  selectedTemplate.bonus[i].amount;
    }
    // Validate/Populate w-modifiers
    if (processed[2].trim().length > 16 || processed[3].trim().length > 16 ) {
        showAlert("error","Weekly modifiers (16) characters exceeded!");
        return
    } else {
        const modifier_1 = document.createElement("img");
        modifier_1.classList.add("w-modifier-1");
        const modifier_2 = document.createElement("img");
        modifier_2.classList.add("w-modifier-2");
        
        w_modifiers_1.forEach((element=>{
            if(element.modifier.toLowerCase().includes(processed[2].trim().toLowerCase())){
                modifier_1.src = "img/svg/".concat(element.svg); 
            }
        }));
        w_modifiers_2.forEach((element=>{
            if(element.modifier.toLowerCase().includes(processed[3].trim().toLowerCase())){
                modifier_2.src = "img/svg/".concat(element.svg); 
            }
        }));

        elements.weeklyModifiers[0].append(modifier_1);
        elements.weeklyModifiers[1].append(modifier_2);
        const modifier = document.createElement("p");
        const hazard = document.createElement("p");
        modifier.innerText = processed[2];
        elements.weeklyModifiers[0].append(modifier);
        hazard.innerText = processed[3];
        elements.weeklyModifiers[1].append(hazard);
        previousMap = Object.keys(updatedTemplates)[selected.index];
        if(typeof processed[21] != "undefined" && processed[21] == "updateTemplate"){
            updatedTemplates[previousMap].credits = ["player#1", "player#2", "player#n"];
            let newTemplate = selectedTemplate;
            newTemplate.week = parseInt(processed[0]);
            newTemplate.zones = listOfZones;
            newTemplate.credits = processed[19].trim().split(",").map( element => element.trim());
            for( const template in updatedTemplates){
                updatedTemplates[template].selected = false;
            }
            newTemplate.selected = true;
            newTemplate.latestUpdate = new Date();
            updatedTemplates[newTemplate.key] = newTemplate;
            fetch("https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app/templates/-N0u1CLDaCNqIoo2OoH2.json",
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTemplates)
            })
            .then(
                response => {
                    if(response.ok){
                        showAlert("success", "Template updated successfully.");
                    }
                }
            );
            selected.template.map = newTemplate.map;
            selected.index = isMapAvailable(newTemplate.map).id;
        }
    }
    const currentDate = new Date(selectedTemplate.latestUpdate);
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
    elements.appContainer.style.marginTop = "5px";
    elements.title.classList.remove("fade-out");
    elements.title.classList.add("setVisible","slide-in");
    elements.sectionTwoContainer.classList.remove("fade-out");
    elements.sectionTwoContainer.classList.add("setVisible","slide-in");
}

// clears text area
function clear(){
    elements.appContainer.style.marginTop = "100px";
    elements.textField.value = "";
    elements.title.classList.replace("slide-in","fade-out");
    elements.sectionTwoContainer.classList.replace("slide-in", "fade-out");
    Object.entries(formElements).map(element => element[1]).forEach(element => element.value ="");
}

// Helper functions
// Convert provided template object and spit out a formatted string text
function templateToString(template){
    text=template.week+"\n"+template.map+"\n"+template.modifiers[0]+"\n"+template.modifiers[1]+"\n";
    for(i=0; i<template.zones.length; i++){
      text = text.concat(template.zones[i]+(((i+1) % 3 == 0 && i != 0)? "\n": ", "));
    }
    let credits = "";
    template.credits.forEach(element => credits = credits.concat(element+", "));
    credits = credits.substring(0, credits.length-2);
    text = text.concat(credits+"\n");
    return text;
}
// Convert provided string template to template
function logTemplateObject(input,zones){
    let stringZones = "";
    zones.forEach((zone,index)=>{ 
        if((index+1)%3 == 0){
            stringZones = stringZones.concat("\""+zone+"\",\n");
        }else{
            stringZones = stringZones.concat("\""+zone+"\", ");
        }
    });
    let result = "template: \{\n"
    + "week: "+parseInt(input[0])+",\n"
    + "map: \""+input[1]+"\",\n"
    + "modifiers:[\""+input[2]+"\",\""+input[3]+"\"],\n"
    + "zones: [\n"+stringZones
    +"],\n"
    +"\}";
    return result;
}
// resets app to original state
function resetState(){
    listOfZones = [];
    processed = [];
    document.querySelectorAll("img").forEach((element)=> {
        if(!element.classList.contains("bow")){
            element.remove()
        }
    });
    document.querySelectorAll(".w-modifier").forEach((element) => element.childNodes.forEach(child=> child.remove()));
    elements.zones.forEach(element=> element.classList.remove("specialEnemyRed"))
    if(typeof document.querySelectorAll(".overlay")[0] != "undefined"){
        document.querySelectorAll(".overlay")[0].remove();
    }
    revertToOGClasses(elements.zones);
}
// Standard alert function takes type of alert and a message
function showAlert(type, message){
    if(typeof elements.previousAlert != "undefined"){
        elements.previousAlert.remove();
    }
    window.scroll(0,0);
    const alert = document.createElement("p");
    alert.innerText = message;
    elements.appContainer.insertBefore(alert,elements.headingContainer);
    if(type=="error"){
        alert.classList.add("error-alert", "slide-in");
    }else if(type=="success"){
        alert.classList.add("success-alert", "slide-in");
    }
    elements.previousAlert = document.querySelectorAll(".error-alert")[0];
    elements.previousAlert_2 = document.querySelectorAll(".success-alert")[0];
    if(typeof elements.previousAlert != "undefined"){
        setTimeout(function(){
            alert.classList.replace("slide-in", "fade-out");
            setTimeout(()=>elements.previousAlert.remove(),500);
        },3000);
    }
    if(typeof elements.previousAlert_2 != "undefined"){
        setTimeout(function(){
            alert.classList.replace("slide-in", "fade-out");
            setTimeout(()=>elements.previousAlert_2.remove(),500);
        },3000);
    }
}
// adds dogs and bears to info-graph based on template object 
function addSpecialEnemySideKick(selected){
    for(i = 0; i < selected.dogs.length; i++){
        if(selected.dogs[i] == 9){
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-9");
            elements.wave_9.append(dog);
        }else if(selected.dogs[i] == 12){
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-12");
            elements.wave_12.append(dog);
        }else{
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-15");
            elements.wave_15.append(dog);
        }
    }
    for(i = 0; i < selected.bears.length; i++){
        if(selected.bears[i] == 9){
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-9");
            elements.wave_9.append(bear);
        }else if(selected.bears[i] == 12){
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-12");
            elements.wave_12.append(bear);
        }else{
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-15");
            elements.wave_15.append(bear);
        }
    }
}
// Check if map is available within provided tempaltes object
function isMapAvailable(otherMap){
    if(typeof otherMap == "undefined"){
        showAlert("error", "Insuffecient Data, please use the template and modfiy it as needed.");
        return
    }else{
        const maps = Object.entries(updatedTemplates).map(element => element[1].map);
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
// converts month digit to a String month
function getAlphaMonth(monthNumber){
    const months = ["Jan", "Feb", "March", "April", "May"
    , "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    let month = -1;
    switch(monthNumber){
        case 0: month = months[0];
            break;
        case 1: month = months[1];
            break;
        case 2: month = months[2];
            break;
        case 3: month = months[3];
            break;
        case 4: month = months[4];
            break;
        case 5: month = months[5];
            break;
        case 6: month = months[6];
            break;
        case 7: month = months[7];
            break;
        case 8: month = months[8];
            break;
        case 9: month = months[9];
            break;
        case 10: month = months[10];
            break;
        case 11: month = months[11];
            break;
    }
    return month;
}

// find total intersects and returns required post-class string
function findTotalIntersects(count){
    let intersect = "";
    switch(count+1){
        case 1: intersect = "1"
            break;
        case 2: intersect = "1-2"
            break;
        case 3: intersect = "1-2-3"
            break;
    }
    return intersect;
}
// Finds correct zone placement when working with 0-2 zone indexes
function findZonePlacement(zoneCount){
    let placement = 0;
    if((zoneCount+1)%3 == 0){
        placement = 3;
    }else if((zoneCount+1)%3==2){
        placement = 2;
    }else if((zoneCount+1)%3==1){
        placement = 1;
    }
    return placement;
}

// Reverts classes back to original classes
function revertToOGClasses(elements){
    let waveCount = 0;
    elements.forEach((element, index) => {
        if((index+1)%3 == 0){
            element.parentElement.parentElement.classList.value="";
            waveCount++;
            switch(waveCount){
                case 1:
                case 5:
                case 8:
                case 11:
                case 14:element.parentElement.parentElement.classList.add("normal","wave");
                    break;
                case 2:
                case 4:
                case 7:
                case 10:
                case 13:element.parentElement.parentElement.classList.add("bonus","wave");
                    break;
                case 3:
                case 6:
                case 9:
                case 12:
                case 15:element.parentElement.parentElement.classList.add("boss","wave");
                    break;
            }
        }
    });
}

function editZone(e){
    const container = document.createElement("div");
    container.classList.add("editForm");
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("type", "button");
    saveButton.classList.add("saveBtn");
    const editField = document.createElement("input");
    editField.setAttribute("type", "text");
    editField.value = listOfZones[Array.from(elements.zones).indexOf(e.target)]
    e.target.innerText = "";
    editField.classList.add("editField");
    container.append(editField,saveButton);
    e.target.append(container);
    editField.focus();
    // editField.select();
    saveButton.addEventListener("click", function(otherEvent){
        if(editField.value.length > 17){
            showAlert("error","Exceeded maximum (17) charcters.")
            return
        }else{
            e.target.innerText = editField.value;
            otherEvent.target.parentElement.remove(container);
        }
    });
    editField.addEventListener("click",function(e){
        e.target.focus();
        // e.target.select();
    });
    editField.addEventListener("keyup", function(event){
        if(event.code === 13 || event.key === "Enter"){
            e.target.innerText = editField.value;
            event.target.parentElement.remove(container);
        }
    });
}
function toggleMethod(e){
    if(typeof e.target.classList[1] == "undefined"){
        e.target.classList.add("active-method");
        Array.from(elements.methodBtns).filter(element => element != e.target).forEach(element => element.classList.remove("active-method"));
        if(e.target.innerText == "Form" ){
            elements.form.style.display = "block";
            elements.sectionOneContainer.style.display = "none";
            elements.latestTitle.style.display = "none";
            mode = "form";
        }else if(e.target.innerText == "Text (Recommended)"){
            elements.sectionOneContainer.style.display = "block";
            elements.form.style.display = "none";
            elements.latestTitle.style.display = "none";
            mode = "text";
        }else{
            elements.latestTitle.style.display = "block";
            elements.sectionOneContainer.style.display = "none";
            elements.form.style.display = "none";
            mode = "latest";
            fetch("https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app/templates.json")
                .then(
                    (response) =>{
                        if(response.ok){
                        return response.json()
                        }
                    }
                )
                .then(
                    (data) => {
                        updatedTemplates = data["-N0u1CLDaCNqIoo2OoH2"];
                        newSelection = Object.entries(updatedTemplates).filter(element => element[1].selected == true)[0];
                        // Stores the selected map name and index within the templates array of objects
                        selected = {
                            index: isMapAvailable(newSelection[1].map).id,
                            template: newSelection[1],
                        };
                        updateMapSelection(selected.template.map);
                        addTemplateToTextArea();
                        processData();
                    }
                    );
        }

    }
}


function goNext(e){
    index = Array.from(elements.nextBtns).indexOf(e.target);
    switch(index){
        case 0: elements.subform_1.style.display = "none"; elements.subform_2.style.display = "block";
            break;
        case 1: elements.subform_2.style.display = "none"; elements.subform_3.style.display = "block";
            break;
        case 2: elements.subform_3.style.display = "none"; elements.subform_4.style.display = "block";
            break;
        case 3: processData();
            break;
    }
}

function goBack(e){
    index = Array.from(elements.previousBtns).indexOf(e.target);
    switch(index){
        case 0: console.log(-1);
            break;
        case 1: elements.subform_1.style.display = "block"; elements.subform_2.style.display = "none";
            break;
        case 2: elements.subform_2.style.display = "block"; elements.subform_3.style.display = "none";
            break;
        case 3: elements.subform_3.style.display = "block"; elements.subform_4.style.display = "none";
            break;
    }
}

function updateMapSelection(map){
    elements.mapSelection.value = map;
    elements.mapSelection_2.value = map;
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

// function toggleLegend(e){
//     if(elements.legend.style.display == "none"){
//         elements.textField.style.display = "none";
//         elements.legend.style.display = "block";
//     }else{
//         elements.textField.style.display = "block";
//         elements.legend.style.display = "none";
//     }
// }
// debugger