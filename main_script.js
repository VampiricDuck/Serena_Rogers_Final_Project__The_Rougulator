// ------------------------------------------------------------------------------//
// Shortened Variables //
const main_page = document.getElementById("main_page");
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Initial Setup //
createMainMenu();
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
//functions//
function createMainMenu() {
    main_page.innerHTML = `
    <div id = "main_menu">
        <p class = "title">The Rougulator</p>
        <button class = "menu_button" id = "start_game_button">Start Game</button>
        <button class = "menu_button" id = "feats_button">Feats</button>
        <button class = "menu_button" id = "exit_game_button">Exit Game</button>
    </div>
    `
    document.getElementById("start_game_button").addEventListener("click", function() {
        destroyMainMenu();
        createTheRougulator(); // change this to the first level wonce the rougulator is done working.
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
function createTheRougulator() {
    main_page.appendChild(document.createElement("div")).id = "the_rougulator";
    document.getElementById("the_rougulator").innerHTML = `
    <div class = "rougulator_frame">
        <div class = "display_screen_frame">
            <div class = "display_screen"></div>
        </div>
        <div class = "button_frame">
            
        </div>
    </div>
    `
};
// ------------------------------------------------------------------------------//

// ------------------------------------------------------------------------------//
// Classes //
class trialTemplate {
    constructor (title, difficulty, boss) {
        this.name = title;
        this.difficulty = difficulty;
        this.boss = boss;
    }

}
// ------------------------------------------------------------------------------//