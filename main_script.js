// change the rogulator_essence_buttons to hold the essence objects instead of the name. this will make it esier to edit them and call the abilities. 


// ------------------------------------------------------------------------------//
// Global Variables //
const main_page = document.getElementById("main_page");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
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

function updateRougeulator() {
    document.getElementById("rougeulator_shards_display").innerHTML = `Shards: ${totalShards}`;
    document.getElementById("essence_slot_1").innerHTML = rougulator_essences_button_1.name;
    document.getElementById("essence_slot_2").innerHTML = rougulator_essences_button_2.name;
    document.getElementById("essence_slot_3").innerHTML = rougulator_essences_button_3.name;
    document.getElementById("essence_slot_4").innerHTML = rougulator_essences_button_4.name;
    document.getElementById("essence_slot_5").innerHTML = rougulator_essences_button_5.name;
    document.getElementById("essence_slot_6").innerHTML = rougulator_essences_button_6.name;
    document.getElementById("essence_slot_7").innerHTML = rougulator_essences_button_7.name;
    document.getElementById("essence_slot_8").innerHTML = rougulator_essences_button_8.name;
    document.getElementById("linking_essence_slot_1").innerHTML = rougulator_linking_essences_button_1.name;
    document.getElementById("linking_essence_slot_2").innerHTML = rougulator_linking_essences_button_2.name;
    document.getElementById("linking_essence_slot_3").innerHTML = rougulator_linking_essences_button_3.name;
    document.getElementById("linking_essence_slot_4").innerHTML = rougulator_linking_essences_button_4.name;
}

// =n W n= //
function shopOverlay() {
    overlay.innerHTML = `
    <div class = "shop_overlay">
        <div class = "shop_frame">
            <div class = "shop_Header_frame">
                <p class = "shop_title">Shop</p>
                <p class = "shop_currency_display" id="shop_currency_display">Shards: ${totalShards}</p>  
            </div>
            <div class = "shop_content_frame">
                <div class = "shop_item_frame">
                    <div class = "linking_essence_shop_item" id = "linking_essence_shop_item">
                        <div class = "linking_essence_shop_item_name" id="linking_essence_shop_item_name"></div>
                        <div class = "linking_essence_shop_item_image" id="linking_essence_shop_item_image"></div>
                        <div class = "linking_essence_shop_item_description" id="linking_essence_shop_item_description"></div>
                        <div class = "linking_essence_shop_item_cost" id="linking_essence_shop_item_cost"></div>
                    </div>
                    <div class = "essence_shop_items">
                        <div class = "essence_shop_item" id = "essence_shop_item_1">
                            <div class = "essence_shop_item_name" id="essence_shop_item_1_name"></div>
                            <div class = "essence_shop_item_image" id="essence_shop_item_1_image"></div>
                            <div class = "essence_shop_item_description" id="essence_shop_item_1_description"></div>
                            <div class = "essence_shop_item_cost" id="essence_shop_item_1_cost"></div>
                        </div>
                        <div class = "essence_shop_item" id = "essence_shop_item_2">
                            <div class = "essence_shop_item_name" id="essence_shop_item_2_name"></div>
                            <div class = "essence_shop_item_image" id="essence_shop_item_2_image"></div>
                            <div class = "essence_shop_item_description" id="essence_shop_item_2_description"></div>
                            <div class = "essence_shop_item_cost" id="essence_shop_item_2_cost"></div>
                        </div>
                    </div>
                </div>
                <div class = "shop_buttons_frame">
                    <button class = "restock_shop_button" id = "restock_shop_button">Restock</button>
                    <button class = "leave_shop_button" id = "leave_shop_button">Leave</button>
                </div>
            </div>
        </div>
    </div>
    `
    overlay.style.display = "flex";

    updateShop(true);

    document.getElementById("leave_shop_button").addEventListener("click", function() {
        overlay.innerHTML = "";
        overlay.style.display = "none";
    });

    document.getElementById("restock_shop_button").addEventListener("click", function() {
        totalShards -= 5;
        updateShop(true);
    });

    document.getElementById("linking_essence_shop_item").addEventListener("click", function() {
        if (totalShards >= Number(linking_essence_shop_item_cost.innerHTML)) {
                overlay.style.display = "none";
                overlay2.style.display = "flex";
                editRougeulatorButtons(false);
        } else {
            alert("Not enough shards!"); // if i have time change to something cleaner later.
        }
    });
}

function updateShop(random) {
    //-- local variables --//
    let linking_essence_shop_item_name = document.getElementById("linking_essence_shop_item_name");
    let linking_essence_shop_item_image = document.getElementById("linking_essence_shop_item_image");
    let linking_essence_shop_item_description = document.getElementById("linking_essence_shop_item_description");
    let linking_essence_shop_item_cost = document.getElementById("linking_essence_shop_item_cost");
    let essence_shop_item_1_name = document.getElementById("essence_shop_item_1_name");
    let essence_shop_item_1_image = document.getElementById("essence_shop_item_1_image");
    let essence_shop_item_1_description = document.getElementById("essence_shop_item_1_description");
    let essence_shop_item_1_cost = document.getElementById("essence_shop_item_1_cost");
    let essence_shop_item_2_name = document.getElementById("essence_shop_item_2_name");
    let essence_shop_item_2_image = document.getElementById("essence_shop_item_2_image");
    let essence_shop_item_2_description = document.getElementById("essence_shop_item_2_description");
    let essence_shop_item_2_cost = document.getElementById("essence_shop_item_2_cost");
    if (random === true) {
        random_linking_essence = Linking_Essence_dictionary[Math.floor(Math.random() * Object.keys(Linking_Essence_dictionary).length)];
        random_essence_1 = Essence_dictionary[Math.floor(Math.random() * Object.keys(Essence_dictionary).length)];
        random_essence_2 = Essence_dictionary[Math.floor(Math.random() * Object.keys(Essence_dictionary).length)];
    } else {
    }

    linking_essence_shop_item_name.innerHTML = random_linking_essence.essence_name;
    linking_essence_shop_item_image.innerHTML = random_linking_essence.image;
    linking_essence_shop_item_description.innerHTML = random_linking_essence.description;
    linking_essence_shop_item_cost.innerHTML = random_linking_essence.cost;
    essence_shop_item_1_name.innerHTML = random_essence_1.essence_name;
    essence_shop_item_1_image.innerHTML = random_essence_1.image;
    essence_shop_item_1_description.innerHTML = random_essence_1.description;
    essence_shop_item_1_cost.innerHTML = random_essence_1.cost;
    essence_shop_item_2_name.innerHTML = random_essence_2.essence_name;
    essence_shop_item_2_image.innerHTML = random_essence_2.image;
    essence_shop_item_2_description.innerHTML = random_essence_2.description;
    essence_shop_item_2_cost.innerHTML = random_essence_2.cost;
    document.getElementById("shop_currency_display").innerHTML = `Shards: ${totalShards}`;
};

// =n W n= //
function editRougeulatorButtons(essence) {
    if (essence === true) {
        
    } else {
        overlay2.innerHTML = `
        <button class = "close_edit_rougeulator_button" id = "close_edit_rougeulator_button">Return</button>
        <div class = "edit_rougeulator_frame">
            <div class = "edit_display_screen_frame">
                <div class = "edit_display_screen"></div>
                    <p class = "edit_display_screen_text">:</p>
                <div class = "edit_display_screen_screw"></div>
            </div>
            <div class = "edit_essence_frame">
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_1"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_2"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_3"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_4"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_5"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_6"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_7"></button>
                <button class = "edit_essence_button_grey" id = "edit_essence_slot_8"></button>
            </div>
            <div class = "linking_essence_frame">
                <button class = "edit_linking_essence_button" id = "edit_linking_essence_slot_1"></button>
                <button class = "edit_linking_essence_button" id = "edit_linking_essence_slot_2"></button>
                <button class = "edit_linking_essence_button" id = "edit_linking_essence_slot_3"></button>
                <button class = "edit_linking_essence_button" id = "edit_linking_essence_slot_4"></button>
            </div>
        </div>
        `

        document.getElementById("close_edit_rougeulator_button").addEventListener("click", function() {
            overlay2.innerHTML = "";
            overlay2.style.display = "none";
            overlay.style.display = "flex";
        });

        document.getElementById("edit_linking_essence_slot_1").addEventListener("click", function() {
            totalShards -= linking_essence_shop_item_cost.innerHTML;
            rougulator_linking_essences_button_1 = random_linking_essence;
            document.getElementById("")
            overlay2.innerHTML = "";
            overlay2.style.display = "none";
            overlay.style.display = "flex";
            updateShop(false);
        });
    }
};

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
    constructor (name, essence_name, type, value, description, effect, cost, ID, rarity) {
        this.name = name;
        this.essence_name = essence_name;
        this.type = type;
        this.value = value;
        this.description = description;
        this.effect = effect;
        this.cost = cost;
        this.ID = ID;
        this.rarity = rarity;
    }
}

// =n W n= //
class numericalEssence extends essenceTemplate {
    constructor (name, essence_name, type, value, description, effect, cost, ID, rarity) {
        super(name, essence_name, type, value, description, effect, cost, ID, rarity);
    }
    ability() {
        document.getElementById("display_screen_text").innerHTML += this.value;
        rougeulator_screen_value += this.value;
    }
}
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Classes Objects //
let essence_null = new numericalEssence("", "null_essence", "null", null, "", "", 0, null, null);
let essence_one = new numericalEssence("1", "essence_1", "essence", 1, "", "", 10, 0, 1);
let essence_two = new numericalEssence("2", "essence_2", "essence", 2, "", "", 10, 1, 1);
let essence_three = new numericalEssence("3", "essence_3", "essence", 3, "", "", 10, 2, 1);
let essence_four = new numericalEssence("4", "essence_4", "essence", 4, "", "", 10, 3, 1);
let essence_five = new numericalEssence("5", "essence_5", "essence", 5, "", "", 10, 4, 1);
let essence_six = new numericalEssence("6", "essence_6", "essence", 6, "", "", 10, 5, 1);
let essence_seven = new numericalEssence("7", "essence_7", "essence", 7, "", "", 10, 6, 1);
let essence_eight = new numericalEssence("8", "essence_8", "essence", 8, "", "", 10, 7, 1);
let essence_nine = new numericalEssence("9", "essence_9", "essence", 9, "", "", 10, 8, 1);
let essence_zero = new numericalEssence("0", "essence_0", "essence", 0, "", "", 10, 9, 1);
let essence_add = new numericalEssence("+", "essence_add", "linking_essence", "+", "", "", 10, 10, 1);
let essence_subtract = new numericalEssence("-", "essence_subtract", "linking_essence", "-", "", "", 10, 11, 1);
let essence_multiply = new numericalEssence("*", "essence_multiply", "linking_essence", "*", "", "", 10, 12, 1);
let essence_divide = new numericalEssence("/", "essence_divide", "linking_essence", "/", "", "", 10, 13, 1);

// =n W n= //
let Essence_dictionary = {
    0: essence_one,
    1: essence_two,
    2: essence_three,
    3: essence_four,
    4: essence_five,
    5: essence_six,
    6: essence_seven,
    7: essence_eight,
    8: essence_nine,
    9: essence_zero,
};

// =n W n= //
let Linking_Essence_dictionary = {
    0: essence_add,
    1: essence_subtract,
    2: essence_multiply,
    3: essence_divide,
};
// ------------------------------------------------------------------------------//
// Global Variables Pt: 2 //
let rougulator_essences_button_1 = essence_null;
let rougulator_essences_button_2 = essence_null;
let rougulator_essences_button_3 = essence_null;
let rougulator_essences_button_4 = essence_null;
let rougulator_essences_button_5 = essence_null;
let rougulator_essences_button_6 = essence_null;
let rougulator_essences_button_7 = essence_null;
let rougulator_essences_button_8 = essence_null;
let rougulator_linking_essences_button_1 = essence_null;
let rougulator_linking_essences_button_2 = essence_null;
let rougulator_linking_essences_button_3 = essence_null;
let rougulator_linking_essences_button_4 = essence_null;
// ------------------------------------------------------------------------------//