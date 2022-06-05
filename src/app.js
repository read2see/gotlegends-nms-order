// Holds bonus objective info
// let bonusObjectives_0 = []
// let bossWaves_0 = []
// let mapTemplates = []
// fetch("./src/bonusObjectives.json")
// .then( response => response.json())
// .then( data => {bonusObjectives_0 = data; console.log(bonusObjectives_0)})
// fetch("./src/bossWaves.json")
// .then( response => response.json())
// .then( data => {bossWaves_0 = data; console.log(bossWaves_0)})
// fetch("./src/templates.json")
// .then( response => response.json())
// .then( data => {mapTemplates = data; console.log(mapTemplates)})
// Prod record = "-N0u1CLDaCNqIoo2OoH2"
// Testing record = "-N1PQsiG9k6mmevCQqcW"
const currentVersion = "ver2.18";
const record = "-N0u1CLDaCNqIoo2OoH2";
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
    {modifier:"Wildfire",svg:"v-wildFire.svg",png:"v-wildFire.png", key: "wildfire"},
    {modifier:"Eruption",svg:"v-eruption.svg",png:"v-eruption.png", key: "eruption"},
    {modifier:"Fighting Blind",svg:"v-fightingBlind.svg",png:"v-fightingBlind.png", key: "fighting-blind"},
    {modifier:"Burning Blades",svg:"v-burningBlades.svg",png:"v-burningBlades.png", key: "burning-blades"},
    {modifier:"Toxic Clouds",svg:"v-toxicClouds.svg",png:"v-toxicClouds.png", key: "toxic-clouds"},
    {modifier:"Slowed Revives",svg:"v-slowedRevives.svg",png:"v-slowedRevives.png", key: "slowed-revives"},
    {modifier:"Immunity",svg:"v-immunity.svg",png:"v-immunity.png", key: "immunity"},
    {modifier:"Tool Shortage",svg:"v-toolShortage.svg",png:"v-toolShortage.png", key: "tool-shortage"},
];
//  Holds weekly modifiers info
const w_modifiers_1 = [
    {modifier:"Barbed Arrows", svg:"w-barbedArrows.svg", png:"w-barbedArrows.png", key: "barbed-arrows"},
    {modifier:"Empowered Foes", svg:"w-empoweredFoes.svg", png:"w-empoweredFoes.png", key: "empowered-foes"},
    {modifier:"Immunity", svg:"w-immunity.svg", png:"w-immunity.png", key: "immunity"},
    {modifier:"Incapacitated", svg:"w-incapacitated.svg", png:"w-w-incapacitated.png", key: "incapacitated"},
    {modifier:"Reduced Healing", svg:"w-reducedHealing.svg", png:"w-reducedHealing.png", key: "reduced-healing"},
    {modifier:"Slowed Revives", svg:"w-slowedRevives.svg", png:"w-slowedRevives.png", key: "slowed-revives"},
    {modifier:"Tool Shortage", svg:"w-toolShortage.svg", png:"w-toolShortage.png", key: "tool-shortage"},
];
const w_modifiers_2 = [
    {modifier:"Fire Spirits, Hwachas", svg:"w-hwachas.svg", png:"w-hwachas.png", key:"fire-spirits-hwachas"},
    {modifier:"Eyes Of Iyo", svg:"w-eyesOfIyo.svg", png:"w-eyesOfIyo.png", key: "eyes-of-iyo"},
    {modifier:"Disciples Of Iyo", svg:"w-disciple.svg", png:"w-disciple.png", key: "disciples-of-iyo"},
];
// Holds the template info
const templates = {
    bloodInTheSnow:{
        week:2,
        mapKey: "blood-in-the-snow",
        map: "Blood In The Snow",
        modifiers:["immunity", "hwachas"],
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
        mapKey: "the-shadows-of-war",
        map: "The Shadows Of War",
        modifiers:["reduced healing", "eyes of iyo"],
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
        mapKey: "the-defense-of-aoi-village",
        map: "The Defense Of Aoi Village",
        modifiers:["reduced healing", "hwachas"],
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
        mapKey: "the-shores-of-vengeance",
        map: "The Shores Of Vengeance",
        modifiers:["tool shortage", "eyes of iyo"],
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
        mapKey: "twilight-and-ashes",
        map: "Twilight And Ashes",
        modifiers:["incapacitated","disciples of iyo"],
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
        mapKey: "blood-and-steel",
        map: "Blood And Steel",
        modifiers:["barbed arrows", "disciples"],
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
class MapTemplate {
    template = {};
    constructor(mapName, week, weeklyModifiers, zones){
        this.map = mapName;
        this.template = this.selectTemplate(mapName)
        this.template.week = week;
        this.template.modifiers = weeklyModifiers;
        this.template.zones = zones;
        this.template.latestUpdate = new Date(Date.now());
        this.template.selected = true;
    }
    selectTemplate(mapName){
        switch(mapName.trim().toLowerCase()){
            case "blood-in-the-snow":
                return {
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
                }
                break;
            case "the-shadows-of-war":
                return{
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
                }
                break;
            case "the-defense-of-aoi-village":
                return {
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
                }
                break;
            case "the-shores-of-vengeance":
                return {
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
                }
                break;
            case "twilight-and-ashes":
                return {
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
                }
                break;
            case "blood-and-steel":
                return {
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
                break;
        }
    }
}

let updatedTemplates = templates;

// Interactive elements
const inputs = {
    textField: document.getElementsByClassName('textArea-1')[0],
    mapSelection: document.querySelectorAll("#mapSelection")[0],
    mapSelection_2: document.querySelectorAll("#mapSelection-2")[0],
}
// Button components
const buttons = {
    processBtn: document.querySelectorAll(".btn")[1],
    clearBtn: document.querySelectorAll(".btn")[2],
    templateButton: document.querySelectorAll(".btn")[0],
    btnsContainer_2: document.querySelectorAll(".button-container-2")[0],
    methodBtns: document.querySelectorAll(".input-method"),
    nextBtns: document.querySelectorAll(".next"),
    previousBtns: document.querySelectorAll(".previous"),
    donateBtn: document.querySelectorAll(".donateBtn"),
    // legendBtn: document.querySelectorAll(".btn")[3],
    shareBtn:document.getElementById("share"),
    legendBtn: document.getElementById("legendBtn"),
    howTo: document.getElementById("how-to"),
}
//  UI components
const ui = {
    appContainer: document.querySelectorAll("#app-container")[0],
    body: document.body,
    sectionOneContainer: document.querySelectorAll(".one")[0],
    sectionTwoContainer: document.querySelectorAll(".two")[0],
    previousAlert: document.querySelectorAll(".error-alert")[0],
    headingContainer: document.querySelectorAll(".heading-container")[0],
    title: document.querySelectorAll(".title")[0],
    latestTitle: document.querySelectorAll(".latestUpdate")[0],
    form: document.querySelectorAll(".form")[0],
    subform_1: document.querySelectorAll(".subform-1")[0],
    subform_2: document.querySelectorAll(".subform-2")[0],
    subform_3: document.querySelectorAll(".subform-3")[0],
    subform_4: document.querySelectorAll(".subform-4")[0],
    // legend: document.querySelectorAll(".legend")[0],
    legendContainer: document.querySelectorAll(".legend-container")[0],
    howToSection: document.querySelectorAll(".how-to")[0],
}
// info-graph components
const infoGraph = {
    zones: document.querySelectorAll(".zone"),
    bonusObjectives: document.querySelectorAll(".bonus-objective"),
    bossModifiers: document.querySelectorAll(".boss-modifier"),
    amounts: document.querySelectorAll(".amount"),
    currentWeek: document.querySelectorAll(".week")[0],
    weeklyModifiers: document.querySelectorAll(".w-modifier"),
    credits: document.querySelectorAll(".credits")[0],
    date: document.querySelectorAll(".date")[0],
    version: document.querySelectorAll(".version")[0],
    wave_9: document.querySelectorAll(".wave")[8],
    wave_12: document.querySelectorAll(".wave")[11],
    wave_15:document.querySelectorAll(".wave")[14],
    
}
// general components
const elements = {}
// form components
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
    date: document.getElementById("date"),
}
// Stores the selected map name and index within the templates array of objects
let initMap = "blood-and-steel";
let previousTemplate = {};
let currentTemplate = Object.values(templates).filter( element => element.mapKey == initMap)[0];
let mode = "text";

// Request data from server

function requestTemplatesData(){
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
                typeof data[record] == "undefined" ||
                Object.keys(data[record]).length > 6 ||
                Object.keys(data[record]).length > 6
                ){
                updatedTemplates = templates;
                ui.latestTitle.innerText = "Data missing and desynced!";
            }else{
                updatedTemplates = data[record];
                // Stores the selected map name and index within the templates array of objects
                previousTemplate = currentTemplate;
                currentTemplate = Object.values(updatedTemplates).filter(element => element.selected == true)[0];
                updateMapSelection(currentTemplate.mapKey);
                const foundDate = new Date(currentTemplate.latestUpdate);
                ui.latestTitle.innerText = "Updated On ".concat(foundDate.getDate()+" "+getAlphaMonth(foundDate.getMonth())+" "+ foundDate.getFullYear());
                addTemplateToTextArea()
                processData()
            }
        }
    );
}

// Data stores
async function getTemplates(){
    const response = await fetch("src/templates.json");
    const templates = await response.json();
    return templates;
}

async function getModifiers(){
    const response = await fetch("src/weeklyModifiers.json");
    const modifiers = await response.json();
    return modifiers;
}

async function getHazards(){
    const response = await fetch("src/weeklyHazards.json");
    const hazards = await response.json();
    return hazards;
}

async function getBonusObjectives(){
    const response = await fetch("src/bonusObjectives.json");
    const objectives = await response.json();
    return objectives;
}

async function getBossWaves(){
    const response = await fetch("src/bossWaves.json");
    const bossModifiers = await response.json();
    return bossModifiers;
}
/** ============================================================== */
// Function Calls
wireEvents();
requestTemplatesData();
// Main processes

// Validation
function isValidData(){
    data = inputs.textField.value;
    lines = inputs.textField.value.split("\n");
    errors = {};

    if(isEmpty(data.trim())){
        message = "No data were provided."
        showAlertAndAct("error", message, ()=>{inputs.textField.classList.add("red-border")});
        dynamicObjectKeyPush(errors, "data", message);
    }else{
        if(!isRecogonizedPattern(lines)){
            message = "Insufficient data please use a template and modify it as needed.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "pattern", message);
        }
        if(isDefined(lines[0]) && isEmpty(lines[0].trim())){
            message = "Current week was left empty.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "currentWeek", message);
        }
        if(isDefined(lines[0]) && isExceedingLength(lines[0].trim(), '', 2)){
            message = "Current week exceeded maximum ("+2+") characters.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "currentWeek", message);
        }

        if(isDefined(lines[0]) && !isANumber(lines[0].trim())){
            message = "Provided current week ("+lines[0]+") is not a valid number.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "currentWeek", message);
        }
        
        if(isDefined(lines[1]) && isEmpty(lines[1].trim())){
            message = "Map name/title was left empty.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "mapTitle", message);
        }
        if(isDefined(lines[1]) && !isExistant(lines[1].trim().toLowerCase(), Object.values(templates).map( element => element.map.toLowerCase()))){
            message = "Map name ["+lines[1].trim()+"] does not exist.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "mapTitle", message);
        }
    
        if(isDefined(lines[2]) && isEmpty(lines[2].trim())){
            message = "Missing modifier at line 3.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "modifier", message);
        }
    
        if(isDefined(lines[2]) && !isExistant(lines[2].trim().toLowerCase(),w_modifiers_1.map(element => element.modifier.toLowerCase()))){
            message = "Modifier ["+lines[2]+"] does not exist.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "modifier", message);
        }
    
        if(isDefined(lines[3]) && isEmpty(lines[3].trim())){
            message = "Missing Hazard at line 4.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "hazard", message);
        }
    
    
        if(isDefined(lines[3]) && !isExistant(lines[3].trim().toLowerCase(),w_modifiers_2.map(element => element.modifier.toLowerCase()))){
            message = "Hazard ["+lines[3]+"] does not exist.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "hazard", message);
        }
    
        lines.slice(4,19).forEach(
            (element, index) => {
    
                if(!isCommaSeparated(element)){
                    message = "Wave ["+(index+1)+"] is not comma separated.";
                    showAlert("error", message);
                    dynamicObjectKeyPush(errors, "wave_"+(index+1), message);
                    displayFormErrors(errors["wave_"+(index+i)], formElements["wave_"+(index+i)]);
                }
    
                if(!areThreeZones(element)){
                    message = "Missing zones in wave ["+(index+1)+"]. Use \",\" to separate each zone except for the last zone in the wave.";
                    showAlert("error", message);
                    dynamicObjectKeyPush(errors, "wave_"+(index+1), message);
                    displayFormErrors(errors["wave_"+(index+i)], formElements["wave_"+(index+i)]);
                }else{
                    element.split(",").forEach(
                        (zone, zIndex) => {
                            if(isEmpty(zone.trim())){
                                message = "Zone ["+(index+1)+"."+(zIndex+1)+"] is empty.";
                                showAlert("error", message);
                                dynamicObjectKeyPush(errors, "wave_"+(index+1), message);
                                displayFormErrors(errors["wave_"+(index+i)], formElements["wave_"+(index+i)]);
                            }
                            if(isExceedingLength(zone.trim(), /\*[T|D]#\d/g, 15)){
                                message = "Zone ["+(index+1)+"."+(zIndex+1)+"] exceeded maximum ("+15+") characters."
                                showAlert("error", message);
                                dynamicObjectKeyPush(errors, "wave_"+(index+1), message);
                                displayFormErrors(errors["wave_"+(index+i)], formElements["wave_"+(index+i)]);
                            }
                        }
                    );
                }
            }
        );
    
        if(isDefined(lines[19]) && isExceedingLength(lines[19].trim(), "",66)){
            message = "Credits exceeded maximum ("+66+") characters.";
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "credits", message);
            displayFormErrors(errors.credits, formElements.credits);
        }
    
        if(isDefined(lines[20]) && isExceedingLength(lines[20].trim(), "", 11)){
            message = "Version exceeded maximum ("+11+") characters."
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "version", message);
            displayFormErrors(errors.version, formElements.version);
        }
    
        if(isDefined(lines[21]) && isExceedingLength(lines[21].trim(),'',12) && lines[21] != "updateTemplate"){
            message = "Date exceeded maximum ("+12+") characters."
            showAlert("error", message);
            dynamicObjectKeyPush(errors, "date", message);
            displayFormErrors(errors.date, formElements.date);
        }
    }

    if(flattenArray(Object.values(errors)).length > 0){
        displayErrorReport(flattenArray(Object.values(errors)),5);
    }
    
    return !Object.values(errors).length > 0
}

function validateVersionField(field){
    removeSiblingFormError(field.target);
    tempErrors = [];
    if(isExceedingLength(field.target.value,"", 11)){
        message = "Version exceeded (11) characters.";
        tempErrors.push(message)
    }
    displayFormErrors(tempErrors, field.target);
}

function validateCreditsField(field){
    removeSiblingFormError(field.target);
    tempErrors = [];
    if(isExceedingLength(field.target.value,"", 66)){
        message = "Credits exceeded (66) characters.";
        tempErrors.push(message)
    }
    displayFormErrors(tempErrors, field.target);
}

function validateWeekField(field){
    removeSiblingFormError(field.target);
    tempErrors = [];
    if(isEmpty(field.target.value.trim())){
        message = "Week must not be empty.";
        tempErrors.push(message)
    }
    if(!isANumber(field.target.value)){
        message = "Week is not a valid digit.";
        tempErrors.push(message)
    }
    displayFormErrors(tempErrors, field.target);
}

function validateWaveField(e){
    removeSiblingFormError(e.target)
    tempErrors = [];
    if(!isCommaSeparated(e.target.value)){
        message = "Wave is not comma separated.";
        dynamicObjectKeyPush(errors, "wave", message);
        tempErrors.push(message)
    }

    if(!areThreeZones(e.target.value)){
        message = "Wave is missing a zone(s). Use \",\" to separate each zone except for the last zone in the wave.";
        dynamicObjectKeyPush(errors, "wave", message);
        tempErrors.push(message);
    }else{
        e.target.value.split(",").forEach(
            (zone, zIndex) => {
                if(isEmpty(zone.trim())){
                    message = "Zone ["+(zIndex+1)+"] is empty.";
                    dynamicObjectKeyPush(errors, "zone", message);
                    tempErrors.push(message);
                }
                if(isExceedingLength(zone.trim(), /\*[T|D]#\d/g, 15)){
                    message = "Zone ["+(zIndex+1)+"] exceeded maximum ("+15+") characters."
                    dynamicObjectKeyPush(errors, "zone", message);
                    tempErrors.push(message);
                }
            }
            );
        }
    displayFormErrors(tempErrors, e.target);
}
// Sanitization
function processData(){
    // Reset previous state
    resetState();
    // Convert to kenji format if detected
    rawData = inputs.textField.value.trim();
    if(isKenjiFormat(rawData) && rawData.split("\n").length >= 22 && rawData.split("\n")[21] != "updateTemplate" ){
        convertKenjiFormat();
    }
    // Validate data
    if(isValidData()){
        if(mode == "text"){     
            rawData = inputs.textField.value.trim();
            rawDataToFormData(inputs.textField.value.split("\n"));
            dumpToGraph();
            if(rawData.split("\n")[21] == "updateTemplate" || rawData.split("\n")[22] == "updateTemplate"){
                updateTemplate(currentTemplate);
            }
        }else if(mode == "form"){
            inputs.textField.value =  formDataToRawData();
            mode = "text";
            processData();
            mode="form";
        }else{
            dumpToGraph();
        }
    }else{
        ui.sectionTwoContainer.classList.replace("slide-in", "fade-out");
    }

}


// Dump to UI
function dumpToGraph(){
    addSpecialEnemySideKick(currentTemplate);
    processed = rawData.split("\n").filter((element)=> element != "");
    infoGraph.version.innerText = processed[20] || "ver2.18";
    infoGraph.credits.innerHTML = "<span class=\"credits-label\">Credits </span>".concat(processed[19]);
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
    // 
    let intersectCounter =  0;
    infoGraph.zones.forEach((element,index) => {
        if((index+1)%3 == 0){
            intersectCounter = 0;
        }
        if(listOfZones[index].includes("*")){
            intersectCounter++;
            // store zone flag
            const flag = listOfZones[index].substring(listOfZones[index].indexOf("*")+1, listOfZones[index].length);
            const specialEnemy = document.createElement("img");
            specialEnemy.classList.add("dynamic-icon");
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
    for(i = 0; i < infoGraph.bonusObjectives.length; i++){
        if(currentTemplate.bonus[i].objective.length >= 13 && currentTemplate.bonus[i].objective.length < 20){
            infoGraph.bonusObjectives[i].classList.add("tooLong");
        }
        if(currentTemplate.bonus[i].objective.length >= 20){
            infoGraph.bonusObjectives[i].classList.contains("tooLong")?
            infoGraph.bonusObjectives[i].classList.remove("tooLong"): ""
             
            infoGraph.bonusObjectives[i].classList.add("toooLong");
        }
        infoGraph.bonusObjectives[i].innerText = currentTemplate.bonus[i].objective;
        infoGraph.bonusObjectives[i].previousSibling.previousSibling.previousSibling.previousSibling.style="background:url(img/svg/"+currentTemplate.bonus[i].svg+") no-repeat center center";
    }
    // 
    for(i = 0; i < infoGraph.bossModifiers.length; i++){
        if(currentTemplate.bossWave[i].length > 11){
            infoGraph.bossModifiers[i].classList.add("toooLong");
        }
        infoGraph.bossModifiers[i].innerText =  currentTemplate.bossWave[i].modifier;
        infoGraph.bossModifiers[i].previousSibling.previousSibling.previousSibling.previousSibling.style="background:url(img/svg/"+currentTemplate.bossWave[i].svg+") no-repeat center center";
    }
    // 
    for(i = 0; i < infoGraph.amounts.length; i++ ){
        infoGraph.amounts[i].innerText =  currentTemplate.bonus[i].amount;
    }
    // 
    const modifier_1 = document.createElement("img");
    modifier_1.classList.add("w-modifier-1");
    const modifier_2 = document.createElement("img");
    modifier_2.classList.add("w-modifier-2");
    modifier_1.src = "img/svg/".concat(getSVG(processed[2], w_modifiers_1));
    modifier_2.src = "img/svg/".concat(getSVG(processed[3], w_modifiers_2)); 
    infoGraph.weeklyModifiers[0].append(modifier_1);
    infoGraph.weeklyModifiers[1].append(modifier_2);
    const modifier = document.createElement("p");
    const hazard = document.createElement("p");
    modifier.innerText = processed[2];
    infoGraph.weeklyModifiers[0].append(modifier);
    if(processed[3].trim().toLowerCase().includes("hwachas")){
        hazard.innerText = "Hwachas";
    }else{
        hazard.innerText = processed[3];
    } 
    infoGraph.weeklyModifiers[1].append(hazard);
    // 
    const currentDate = isDefined(processed[21]) ? constructGraphDateFormat(convertStringToDate(processed[21])) : constructGraphDateFormat(new Date());
    infoGraph.date.innerText = currentDate;
    const image = document.createElement("img");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    image.src = "img/".concat(currentTemplate.background);
    image.classList.add("back-drop");
    if(typeof document.querySelectorAll(".back-drop")[0] == "undefined"){
        ui.sectionTwoContainer.insertBefore(image, document.querySelectorAll(".list-container")[0]);
        ui.sectionTwoContainer.insertBefore(overlay, image);
    }else{
        document.querySelectorAll(".back-drop")[0].remove();
        ui.sectionTwoContainer.insertBefore(image, document.querySelectorAll(".list-container")[0]);
    }
    ui.appContainer.style.marginTop = "5px";
    ui.title.classList.remove("fade-out");
    ui.title.classList.add("setVisible","slide-in");
    ui.sectionTwoContainer.classList.remove("fade-out");
    ui.sectionTwoContainer.classList.add("setVisible","slide-in");
}
// Helpers
// Updates global currentTemplate property and sets previous template property
function updateCurrentTemplate(newTemplate){
    
    previousTemplate = currentTemplate;
    currentTemplate = newTemplate;

}

function populateListOfZones(processed){
    listOfZones.clear;
    let zonesEndIndex = 0;
    if(processed.length < 22){
        zonesEndIndex = 2
    }else{
        zonesEndIndex = 3
    }
    for(i = 4; i < processed.length-zonesEndIndex; i++){
        processed[i].split(",").forEach(element => listOfZones.push(element.trim()))
    }
}
function updateTemplate(currentTemplate){
    while(listOfZones.length > 45){
        listOfZones.pop();
    }
    previousMap = currentTemplate;
    previousMap.credits = ["player#1", "player#2", "player#n"];
    let newTemplate = currentTemplate;
    newTemplate.week = parseInt(processed[0]);
    newTemplate.zones = listOfZones;
    newTemplate.credits = processed[19].trim().split(",").map( element => element.trim());
    for( const template in updatedTemplates){
        updatedTemplates[template].selected = false;
    }
    newTemplate.selected = true;
    newTemplate.latestUpdate = new Date();
    updatedTemplates[newTemplate.key] = newTemplate;
    fetch("https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app/templates/"+record+".json",
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
    currentTemplate = newTemplate;
}
function getSVG(value, collection){
    return collection.filter(element => element.modifier.toLowerCase().includes(value.toLowerCase().trim()))[0].svg
}

function addSpecialEnemySideKick(selected){
    for(i = 0; i < selected.dogs.length; i++){
        if(selected.dogs[i] == 9){
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-9");
            infoGraph.wave_9.append(dog);
        }else if(selected.dogs[i] == 12){
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-12");
            infoGraph.wave_12.append(dog);
        }else{
            const dog = document.createElement("img");
            dog.src = "img/svg/se-dogs.svg";
            dog.classList.add("se-dogs-15");
            infoGraph.wave_15.append(dog);
        }
    }
    for(i = 0; i < selected.bears.length; i++){
        if(selected.bears[i] == 9){
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-9");
            infoGraph.wave_9.append(bear);
        }else if(selected.bears[i] == 12){
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-12");
            infoGraph.wave_12.append(bear);
        }else{
            const bear = document.createElement("img");
            bear.src = "img/svg/se-bears.svg";
            bear.classList.add("se-bears-15");
            infoGraph.wave_15.append(bear);
        }
    }
}

function convertKenjiFormat(){
    let matches = [];
    let uniqueZones = rawData.split("\n");
    let matchedWeek = uniqueZones[0].charAt(uniqueZones[0].length-2);
    let matchedMap = uniqueZones[0].substring(0,uniqueZones[0].indexOf("(")).trim();
    let matchedTemplate = Object.entries(updatedTemplates).filter(element => element[1].map.toLowerCase() == matchedMap.toLowerCase())[0][1];
    currentTemplate = matchedTemplate;
    inputs.mapSelection.value = currentTemplate.mapKey;
    inputs.mapSelection_2.value = currentTemplate.mapKey;
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
    let matchedDate = constructDateFormat(uniqueZones[3]);
    matchedTemplate.modifiers = [matchedModifier, matchedHazard]
    matches = [...rawData.matchAll(/(?![\w\s]*[/:)])\b[^0-9.(&\n,]+\b/g)];
    // let matches = rawData.matchAll(/(?<!\()(?![\w\s]*[\)])\b[^0-9.(,]+\b/g);
    if(matches.length > 45){
        matches.shift();
    }
    while(matches.length > 45){
        matches.pop();
    }
    if(!rawData.includes("*")){
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
            +currentTemplate.map+"\n"
            +currentTemplate.modifiers[0]+"\n"
            +currentTemplate.modifiers[1]+"\n";
    for(i = 0; i < matches.length; i++){
        if((i+1)%3 == 0){
            rawData = rawData.concat(matches[i][0].trim()+"\n");
        }else{
            rawData = rawData.concat(matches[i][0].trim()+", ");
        }
    }
    rawData  = rawData.concat(matchedCredits+"\n"+"ver2.18\n");
    rawData = rawData.concat(matchedDate);
    inputs.textField.value = rawData;
}

function manualSelectTemplate(mapName){
    if(typeof mapName != "string"){
        return false;
    }
    clear();
    addTemplateToTextArea(); 
}

// Convert form data to raw data format
function formDataToRawData(){
    let theDate = "";
    if(isEmpty(formElements.date.value)){
        theDate = constructGraphDateFormat(new Date(currentTemplate.latestUpdate));
    }else{
        theDate = constructGraphDateFormat(new Date(formElements.date.value.trim().split("-")))
    }
    let weeklyMod = w_modifiers_1.filter(element => element.key == formElements.weeklyModifier.value)[0].modifier;
    let weeklyHazard = w_modifiers_2.filter(element => element.key == formElements.weeklyHazard.value)[0].modifier;
    result = formElements.currentWeek.value.trim()+"\n"
            +currentTemplate.map+"\n"
            +weeklyMod+"\n"
            +weeklyHazard+"\n"
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
            +formElements.version.value.trim()+"\n"
            +theDate;
    return result;
}

// Transfer raw data to form format
function rawDataToFormData(lines){
    let theDate = "";
    if(!isDefined(lines[21])){
        theDate = constructGraphDateFormat(new Date(currentTemplate.latestUpdate));
    }else{
        theDate = convertIGDateToHTMLDate(lines[21]);
    }
    formElements.currentWeek.value = lines[0];
    formElements.weeklyModifier.value = w_modifiers_1.filter(element => element.modifier.toLowerCase() == lines[2].trim().toLowerCase())[0].key;
    formElements.weeklyHazard.value = w_modifiers_2.filter(
        element => {
            return element.modifier.toLowerCase().includes(lines[3].trim().toLowerCase());
        })[0].key;
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
    formElements.date.value = theDate;
}
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
    text = text.concat(currentVersion+"\n");
    text = text.concat(constructGraphDateFormat(template.latestUpdate));
    return text;
}

//  Updates select values for text/form modes
function updateMapSelection(mapKey){
    inputs.mapSelection.value = mapKey;
    inputs.mapSelection_2.value = mapKey;
}

// Selects a template then adds it to text area
function selectMapTemplate(e){   
    currentTemplate = Object.entries(updatedTemplates).filter(
        (element) => { 
            return element[1].mapKey == this.value
        })[0][1];
    clear();
    addTemplateToTextArea();
    if(e.target == inputs.mapSelection){
        inputs.mapSelection_2.value = e.target.value;
        processData();
    }else{
        inputs.mapSelection.value = e.target.value;
        mode = "text";
        processData();
        mode = "form";
    }    
}

function constructDateFormat(dateShortUSFormat){
    dateValues = dateShortUSFormat.split(/\/|-/g);
    dateValues.forEach((element,index) => {dateValues[index] = parseInt(element)});
    dateValues[0] -= 1;
    dateValues[2] += 2000;
    dateObject = new Date(dateValues[2], dateValues[0], dateValues[1]);
    return ((dateObject.getDate())+" "+getAlphaMonth((dateObject.getMonth()))+" "+ String(dateObject.getFullYear()).substring(2));
}

function constructGraphDateFormat(dateObject){
    dateObject = new Date(dateObject);
    return dateObject.getDate()+" "+getAlphaMonth(dateObject.getMonth())+" "+ String(dateObject.getFullYear()).substring(2);
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

function getNumericMonth(monthName){
    const months = [0,1,2,3,4,5,6,7,8,9,10,11];
    let month = -1;
    switch(monthName){
        case "Jan": month = months[0];
            break;
        case "Feb": month = months[1];
            break;
        case "March": month = months[2];
            break;
        case "April": month = months[3];
            break;
        case "May": month = months[4];
            break;
        case "June": month = months[5];
            break;
        case "July": month = months[6];
            break;
        case "Aug": month = months[7];
            break;
        case "Sept": month = months[8];
            break;
        case "Oct": month = months[9];
            break;
        case "Nov": month = months[10];
            break;
        case "Dec": month = months[11];
            break;
    }
    return month;
}

function convertStringToDate(date){
    dateValues = date.split(" ");
    dateValues[0] = parseInt(dateValues[0]);
    dateValues[1] = getNumericMonth(dateValues[1]);
    dateValues[2] = parseInt(dateValues[2]);
    dateValues[2] += 2000;
    return new Date(dateValues[2], dateValues[1], dateValues[0]);
}

function convertIGDateToHTMLDate(infoGraphDate){
    date = convertStringToDate(infoGraphDate);
    dateValues = [date.getFullYear(), date.getMonth()+1, date.getDate()];
    dateValues.forEach( 
        (element, index) => {
            if(element < 10) {
                dateValues[index] = "0".concat(element);
            }
        }
    );
    date = dateValues[0]+"-"+dateValues[1]+"-"+dateValues[2];
    return date;
}

function dynamicObjectKeyPush(object, key, value){
    if(isDefined(object[key] && object[key].length > 0)){
        object[key].push(value);
    }else{
        object[key] = [];
        object[key].push(value);
    }
}

function flattenArray(array, result=[]){
    array.forEach(
        element => {
            if(Array.isArray(element)){
                flattenArray(element,result);
            }else{
                result.push(element);
            }
        }
    );
    return result;
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

// Validation Helpers
// Standard alert function takes type of alert and a message
function showAlert(type, message){
    if(typeof ui.previousAlert != "undefined"){
        ui.previousAlert.remove();
    }
    window.scroll(0,0);
    const alert = document.createElement("p");
    alert.innerText = message;
    ui.appContainer.insertBefore(alert,ui.headingContainer);
    if(type=="error"){
        alert.classList.add("error-alert", "slide-in");
    }else if(type=="success"){
        alert.classList.add("success-alert", "slide-in");
    }
    ui.previousAlert = document.querySelectorAll(".error-alert")[0];
    ui.previousAlert_2 = document.querySelectorAll(".success-alert")[0];
    if(typeof ui.previousAlert != "undefined"){
        setTimeout(function(){
            alert.classList.replace("slide-in", "fade-out");
            setTimeout(()=>ui.previousAlert.remove(),500);
        },3000);
    }
    if(typeof ui.previousAlert_2 != "undefined"){
        setTimeout(function(){
            alert.classList.replace("slide-in", "fade-out");
            setTimeout(()=>ui.previousAlert_2.remove(),500);
        },3000);
    }
}

function showAlertAndAct(type, message, action){
    showAlert(type, message)
    action();
}
function isKenjiFormat(rawData){
    return rawData.toLowerCase().trim().includes("modifier");
}
function isDefined(subject){
    return typeof subject != "undefined";
}

function isEmpty(subject){
    return subject.length == 0;
}

function isAnyEmpty(subject){
    result = false;
    for(item in subject){
        if(item.length == 0){
            result = true;
            break;
        }
    }
    return result;
}

function isRecogonizedPattern(subject){
    return subject.length > 18
}

function isExistant(subject, range){
    result = false;
    for(i = 0; i < range.length; i++){
       result =  range[i].includes(subject);
       if(result){
           break;
       }
    }

    return result;
}

function isExceedingLength(subject, exclusions,range){
    result = subject.replace(exclusions,"");
    return result.length > range;
}

function isCommaSeparated(subject){
    return subject.includes(",");
}

function areThreeZones(subject){
    return subject.split(",").length == 3
}

function isANumber(subject){
    if(typeof subject != "string") return false;
    return !isNaN(parseInt(subject.trim()));
}

function displayErrorReport(errors, maxDisplayedErrors){
    const caughtErrors = document.createElement("div");
    caughtErrors.classList.add("caught-errors");
    const title = document.createElement("h2");
    title.classList.add("caught-errors-title");
    title.textContent = "Errors Report";
    const errorList = document.createElement("ul");
    errorList.classList.add("error-list");

    for(i = 0; i < errors.length; i++){
        if(i < maxDisplayedErrors){
            const errorItem = document.createElement("li");
            errorItem.classList.add("error-item");
            errorItem.textContent = errors[i];
            errorList.append(errorItem);
        }
    }
    // Displays all errors not user friendly
    /*errors.forEach( 
        error => {
            const errorItem = document.createElement("li");
            errorItem.classList.add("error-item");
            errorItem.textContent = error;
            errorList.append(errorItem);
        }
    );*/
    caughtErrors.append(title, errorList);
    ui.sectionOneContainer.insertAdjacentElement("beforebegin", caughtErrors);
}

function displayAllErrorsReport(errors){
    const caughtErrors = document.createElement("div");
    caughtErrors.classList.add("caught-errors");
    const title = document.createElement("h2");
    title.classList.add("caught-errors-title");
    title.textContent = "Errors Report ("+maxDisplayedErrors+"/"+errors.length+")";
    const errorList = document.createElement("ul");
    errorList.classList.add("error-list");

    errors.forEach( 
        error => {
            const errorItem = document.createElement("li");
            errorItem.classList.add("error-item");
            errorItem.textContent = error;
            errorList.append(errorItem);
        }
    );
    caughtErrors.append(title, errorList);
    ui.sectionOneContainer.insertAdjacentElement("beforebegin", caughtErrors);
}

function displayFormErrors(errors, errorElementHook){
    const compoundErrors = document.createElement("ul");
    compoundErrors.classList.add("form-errors-container");
    if(isDefined(errors)){
        errors.forEach(
            element => {
                const newError = createFormError(element);
                compoundErrors.append(newError);
            }
        );
        errorElementHook.insertAdjacentElement("afterend", compoundErrors);
    }
}

function createFormError(message){
    const errorElement = document.createElement("li");
    errorElement.classList.add("form-error");
    errorElement.textContent = message;
    return errorElement;
}

function isSubForm_1Valid(){
    currentWeekErrors = [];

    if(isEmpty(formElements.currentWeek.value.trim())){
        message = "Current week was left empty.";
        showAlert("error", message);
        currentWeekErrors.push(message);
    }
    if(isExceedingLength(formElements.currentWeek.value.trim(), '', 2)){
        message = "Current week exceeded maximum ("+2+") characters.";
        showAlert("error", message);
        currentWeekErrors.push(message);
    }
    if(!isANumber(formElements.currentWeek.value.trim())){
        message = "Provided current week ("+formElements.currentWeek.value+") is not a valid number.";
        showAlert("error", message);
        currentWeekErrors.push(message);
    }
    displayFormErrors(currentWeekErrors, formElements.currentWeek);
    
    creditsErrors = [];
    if(isExceedingLength(formElements.credits.value.trim(), "",66)){
        message = "Credits exceeded maximum ("+66+") characters.";
        showAlert("error", message);
        creditsErrors.push(message);
    }
    displayFormErrors(creditsErrors, formElements.credits);
    
    versionErrors = [];
    if(isExceedingLength(formElements.version.value.trim(), "", 11)){
        message = "Version exceeded maximum ("+11+") characters."
        showAlert("error", message);
        versionErrors.push(message);
    }
    displayFormErrors(versionErrors, formElements.version);

    errors = currentWeekErrors.concat(creditsErrors).concat(versionErrors);
    return !errors.length > 0;
}

function isSubForm_2Valid(){
    return isSubformValidHelper([formElements.wave_1, formElements.wave_2, formElements.wave_3, formElements.wave_4, formElements.wave_5], 1);
}

function isSubForm_3Valid(){
    return isSubformValidHelper([formElements.wave_6, formElements.wave_7, formElements.wave_8, formElements.wave_9, formElements.wave_10], 6);
}

function isSubForm_4Valid(){
    return isSubformValidHelper([formElements.wave_11, formElements.wave_12, formElements.wave_13, formElements.wave_14, formElements.wave_15],11);
}

function isSubformValidHelper(inputElements, startIndex){
    errors = [];
    inputEls = inputElements;

    for(i = 0; i < inputEls.length; i++){
        tempErrors = [];
        if(!isCommaSeparated(inputEls[i].value)){
            message = "Wave ["+(i+startIndex)+"] is not comma separated.";
            showAlert("error", message);
            errors.push(message);
            tempErrors.push(message)
        }

        if(!areThreeZones(inputEls[i].value)){
            message = "Missing zones in wave ["+(i+startIndex)+"]. Use \",\" to separate each zone except for the last zone in the wave.";
            showAlert("error", message);
            errors.push(message);
            tempErrors.push(message);
        }else{
            inputEls[i].value.split(",").forEach(
                (zone, zIndex) => {
                    if(isEmpty(zone.trim())){
                        message = "Zone ["+(i+startIndex)+"."+(zIndex+1)+"] is empty.";
                        showAlert("error", message);
                        errors.push(message);
                        tempErrors.push(message);
                    }
                    if(isExceedingLength(zone.trim(), /\*[T|D]#\d/g, 15)){
                        message = "Zone ["+(i+startIndex)+"."+(zIndex+1)+"] exceeded maximum ("+15+") characters."
                        showAlert("error", message);
                        errors.push(message);
                        tempErrors.push(message);
                    }
                }
                );
            }
        displayFormErrors(tempErrors, inputEls[i]);
    }
    return !errors.length > 0;
}

function removeFormErrors(){
    document.querySelectorAll(".form-errors-container").forEach(
        element => {
            if(isDefined(element)){
                element.remove();
            }
        }
    );
    document.querySelectorAll(".form-error").forEach(
        element =>{
            if(isDefined(element)){
                element.remove();
            }
        }
    );
}

function removeSiblingFormError(sibling){
    if(sibling.nextSibling){
        sibling.nextSibling.remove()
    }
}

function removeErrorsReport(){
    if(isDefined(document.querySelectorAll(".caught-errors")[0])){
        document.querySelectorAll(".caught-errors")[0].remove();
    }
}
// Events

// clears text area
function clear(){
    ui.appContainer.style.marginTop = "100px";
    inputs.textField.value = "";
    inputs.textField.classList.remove("red-border");
    document.querySelectorAll(".wrapper")[0].style.display = "none";
    ui.title.classList.replace("slide-in","fade-out");
    ui.sectionTwoContainer.classList.replace("slide-in", "fade-out");
    removeErrorsReport();
    removeFormErrors();
    Object.entries(formElements).map(element => element[1]).forEach(element => element.value ="");
}
// resets app to original state
function resetState(){
    listOfZones = [];
    processed = [];
    document.querySelectorAll(".dynamic-icon").forEach((element)=> {
        if(!element.classList.contains("bow")){
            element.remove();
        }
    });
    document.querySelectorAll(".back-drop").forEach(element => { element.remove()});
    document.querySelectorAll(".w-modifier-1").forEach(element => {element.remove();});
    document.querySelectorAll(".w-modifier-2").forEach(element => {element.remove();});
    document.querySelectorAll(".w-modifier").forEach((element) => element.childNodes.forEach(child=> child.remove()));
    removeErrorsReport();
    removeFormErrors();
    infoGraph.zones.forEach(element=> element.classList.remove("specialEnemyRed"))
    if(typeof document.querySelectorAll(".overlay")[0] != "undefined"){
        document.querySelectorAll(".overlay")[0].remove();
    }
    inputs.textField.classList.remove("red-border");
    document.querySelectorAll(".wrapper")[0].style.display = "block";
    revertToOGClasses(infoGraph.zones);
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
    editField.value = listOfZones[Array.from(infoGraph.zones).indexOf(e.target)]
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
        Array.from(buttons.methodBtns).filter(element => element != e.target).forEach(element => element.classList.remove("active-method"));
        if(e.target.innerText == "Form" ){
            removeErrorsReport();
            ui.form.style.display = "block";
            ui.sectionOneContainer.style.display = "none";
            ui.latestTitle.style.display = "none";
            mode = "form";
        }else if(e.target.innerText == "Text (Recommended)"){
            ui.sectionOneContainer.style.display = "block";
            ui.form.style.display = "none";
            ui.latestTitle.style.display = "none";
            mode = "text";
        }else{
            removeErrorsReport();
            ui.latestTitle.style.display = "block";
            ui.sectionOneContainer.style.display = "none";
            ui.form.style.display = "none";
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
                        updatedTemplates = data[record];
                        newSelection = Object.entries(updatedTemplates).filter(element => element[1].selected == true)[0];
                        currentTemplate = newSelection[1];
                        updateMapSelection(currentTemplate.mapKey);
                        addTemplateToTextArea();
                        processData();
                    }
                    );
        }

    }
}

function goNext(e){
    index = Array.from(buttons.nextBtns).indexOf(e.target);
    switch(index){
        case 0: 
        removeFormErrors();
        if(isSubForm_1Valid()){
            ui.subform_1.style.display = "none"; ui.subform_2.style.display = "block";
        }
            break;
        case 1: 
        removeFormErrors();
        if(isSubForm_2Valid()){
            ui.subform_2.style.display = "none"; ui.subform_3.style.display = "block";
        }
            break;
        case 2: 
        removeFormErrors();
        if(isSubForm_3Valid()){
            ui.subform_3.style.display = "none"; ui.subform_4.style.display = "block";
        }
            break;
        case 3: 
        removeFormErrors();
        if(isSubForm_4Valid()){
            processData();
        }
            break;
    }
}

function goBack(e){
    index = Array.from(buttons.previousBtns).indexOf(e.target);
    switch(index){
        case 0: console.log(-1);
            break;
        case 1: ui.subform_1.style.display = "block"; ui.subform_2.style.display = "none";
            break;
        case 2: ui.subform_2.style.display = "block"; ui.subform_3.style.display = "none";
            break;
        case 3: ui.subform_3.style.display = "block"; ui.subform_4.style.display = "none";
            break;
    }
}

function addTemplateToTextArea(){
    inputs.textField.value = templateToString(currentTemplate);
}

function toggleLegend(){

    if(ui.legendContainer.classList.contains("hide-legend")){
        ui.legendContainer.classList.replace("hide-legend", "show-legend");
    }else{
        ui.legendContainer.classList.replace("show-legend", "hide-legend");
    }
}

function expandHowToSection(e){
    if(ui.howToSection.classList.contains("how-to-expand")){
        ui.howToSection.classList.remove("how-to-expand");
    }else{
        ui.howToSection.classList.add("how-to-expand");
    }
}

function wireEvents(){
    inputs.mapSelection.addEventListener("change", selectMapTemplate);
    inputs.mapSelection_2.addEventListener("change", selectMapTemplate);
    buttons.templateButton.addEventListener("click", addTemplateToTextArea);
    buttons.clearBtn.addEventListener("click",clear);
    buttons.processBtn.addEventListener("click",processData);
    infoGraph.zones.forEach( element => element.addEventListener("click", editZone));
    buttons.methodBtns[0].addEventListener("click", toggleMethod);
    buttons.methodBtns[1].addEventListener("click", toggleMethod);
    buttons.methodBtns[2].addEventListener("click", toggleMethod);
    buttons.nextBtns.forEach(element => element.addEventListener("click", goNext));
    buttons.previousBtns.forEach(element => element.addEventListener("click", goBack));
    buttons.howTo.addEventListener("click", expandHowToSection);
    buttons.shareBtn.addEventListener('click', async () => {
    const shareData = {
        title: "NMS Order",
        url:window.location.href,
    }
    try {
        await navigator.share(shareData);
        resultPara.textContent = 'NMS Order Shared Successfully.'
    } catch(err) {
        resultPara.textContent = 'Error: ' + err
    }
    });
    buttons.legendBtn.addEventListener("click",toggleLegend);
    Object.entries(formElements).filter(element => element[0].includes("wave")).forEach(
        element => {
            element[1].addEventListener("keyup", validateWaveField);
        }
    );
    formElements.currentWeek.addEventListener("keyup", validateWeekField);
    formElements.version.addEventListener("keyup", validateVersionField);
    formElements.credits.addEventListener("keyup", validateCreditsField);
    // elements.legendBtn.addEventListener("click", toggleLegend);
}