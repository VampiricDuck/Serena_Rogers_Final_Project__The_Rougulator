// ------------------------------------------------------------------------------//
// Global Variables //
const main_page = document.getElementById("main_page");
const overlay = document.getElementById("overlay");
let rougeulator_screen_value = "";
let totalShards = 0;
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Initial Setup //
createMainMenu();
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Functions //
function createMainMenu() {
    main_page.innerHTML = `
    <div id = "main_menu">
        <p class = "title">The Rougeulator</p>
        <button class = "menu_button" id = "start_game_button">Start Game</button>
        <button class = "menu_button" id = "feats_button">Feats</button>
        <button class = "menu_button" id = "exit_game_button">Exit Game</button>
    </div>
    `
    document.getElementById("start_game_button").addEventListener("click", function() {
        destroyMainMenu();
        createTheRougeulator(); // change this to the first level once the rougeulator is done working.
    });
    document.getElementById("exit_game_button").addEventListener("click", function() {
        window.close(); // this does not work in most browsers due to security reasons, have to find a way later.
        alert("No");
    });
    document.getElementById("feats_button").addEventListener("click", function() {
        destroyMainMenu();
        //createFeatsPage();
    });
}
// =n W n= //
function destroyMainMenu() {
    main_page.innerHTML = "";
}
// =n W n= //
function createTheRougeulator() {
    main_page.appendChild(document.createElement("div")).id = "the_rougeulator";
    document.getElementById("the_rougeulator").innerHTML = `
    <p class = "rougeulator_shards_display">Shards: ${totalShards}</p>
    <div class = "rougeulator_frame">
        <div class = "display_screen_frame">
            <div class = "display_screen"></div>
                <p class = "display_screen_text" id="display_screen_text">:</p>
            <div class = "display_screen_screw"></div>
        </div>
        <div class = "essence_frame">
            <button class = "essence_button" id = "essence_slot_1"></button>
            <button class = "essence_button" id = "essence_slot_2"></button>
            <button class = "essence_button" id = "essence_slot_3"></button>
            <button class = "essence_button" id = "essence_slot_4"></button>
            <button class = "essence_button" id = "essence_slot_5"></button>
            <button class = "essence_button" id = "essence_slot_6"></button>
            <button class = "essence_button" id = "essence_slot_7"></button>
            <button class = "essence_button" id = "essence_slot_8"></button>
        </div>
        <div class = "linking_essence">
            <button class = "linking_essence_button" id = "linking_essence_slot_1"></button>
            <button class = "linking_essence_button" id = "linking_essence_slot_2"></button>
            <button class = "linking_essence_button" id = "linking_essence_slot_3"></button>
            <button class = "linking_essence_button" id = "linking_essence_slot_4"></button>
        </div>
        <div class = "functionality_buttons">
            <button class = "disintegrate_button" id = "disintegrate_button">Disintegrate</button>
        </div>
    </div>
    <button id = "debug_essence_button">Debug</button>
    `
    document.getElementById("debug_essence_button").addEventListener("click", function() {
        totalShards = 1000000;
        shopOverlay();
    });
    document.getElementById("disintegrate_button").addEventListener("click", function() {
        document.getElementById("display_screen_text").innerHTML = ":";
        rougeulator_screen_value = "";
    });
};
// =n W n= //
function shopOverlay() {
    overlay.innerHTML = `
    <div class = "shop_overlay">
        <p class = "shop_title">Shop</p>
        <p class = "shop_currency_display">Shards: ${totalShards}</p>
    `
    overlay.style.display = "flex";
    //document.getElementById("close_overlay").addEventListener("click", function() {
    //    overlay.innerHTML = "";
    //    overlay.style.display = "none";
    //});
}

// =n W n= //
function debugCalc() { //can only be called in the html terminal
    let calc = document.getElementById("display_screen_text").innerHTML;
    console.log(eval(rougeulator_screen_value));
}
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Classes //
class trialTemplate {
    constructor (title, difficulty, boss) {
        this.title = title;
        this.difficulty = difficulty;
        this.boss = boss;
    }

}
// =n W n= //
class essenceTemplate {
    constructor (name, ID, effect, value) {
        this.name = name;
        this.id = ID;
        this.effect = effect;
        this.value = value;
    }
}
// =n W n= //
class numericalEssence extends essenceTemplate {
    constructor (name, ID, effect, value) {
        super(name, ID, effect, value);
    }
    ability() {
        document.getElementById("display_screen_text").innerHTML += this.value;
        rougeulator_screen_value += this.value;
    }
}
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Classes Objects //
let essence_one = new numericalEssence("1", "essence_1", "", 1);
let essence_two = new numericalEssence("2", "essence_2", "", 2);
let essence_three = new numericalEssence("3", "essence_3", "", 3);
let essence_four = new numericalEssence("4", "essence_4", "", 4);
let essence_five = new numericalEssence("5", "essence_5", "", 5);
let essence_six = new numericalEssence("6", "essence_6", "", 6);
let essence_seven = new numericalEssence("7", "essence_7", "", 7);
let essence_eight = new numericalEssence("8", "essence_8", "", 8);
let essence_nine = new numericalEssence("9", "essence_9", "", 9);
let essence_zero = new numericalEssence("0", "essence_0", "", 0);
let essence_add = new numericalEssence("+", "essence_add", "", "+");
let essence_subtract = new numericalEssence("-", "essence_subtract", "", "-");
let essence_multiply = new numericalEssence("*", "essence_multiply", "", "*");
let essence_divide = new numericalEssence("/", "essence_divide", "", "/");
// ------------------------------------------------------------------------------//