*WEB-115 Final Project Proposal, Repo:* `Serena_Rogers_Final_Project__The_Rougulator`<br>
*Project Presented by* **Serena Rogers** *enjoy.*<br>
*Live Site:* https://vampiricduck.github.io/Serena_Rogers_Final_Project__The_Rougulator/ 
# The Rouge Like Calculator Game
### The Rougulator

---

## General Idea
This is a game utilizing the mechanics of a calculator mixed with the genre of games known as Rouge-Likes. The player will get as far as they can through the levels until they fail, if this was the main game play loop then the game would quickly get repetitive. what makes rouge-likes different in thought the players attempt they can access resources that will make them stronger in a variety of ways, and upon failing and returning to the main menu, based on what they have done throughout their playthrough, they are then allowed access to new resources that will allow them to get further thought their attempt. Often to get quite far the player will have to get lucky as often as when they reach a "shop" or reach a new milestone they will be given a specific number of options to choose from making their choices limited and causing need for strategic plays and sacrifices. The Rougulator will work very similarly with the players having to "build their options" as they will have to select the options on their calculator having to reach the given solution to go above using the buttons they have selected throughout the game.

---

## Features
- Implement a "shop" where the player may spend the games currency to gain "spells" allowing them to progress through the game easier.


- Implement a functioning calculator that becomes the base for The Rougulator.


- Introduce an automatic save function using local storage that allows the player to keep their unlocked abilities, this allows the player to close the game and comeback to it with their hard earned abilities still unlocked and available in the game.


- The player will be able to add or replace the buttons on The Rougulator with their own buttons purchased from the shop.


- the game will become exponentially harder as they play the game.


---


## Core Requirements Coverage
1. Classes and Subclasses for the implementation of buttons, as there will be an abundant amount of them each that do their own thing, the base class `Buttons` that would then be expanded into its subclasses that would hold all of the buttons that will be in the game.


2. Local storage would have to be implemented to allow the persistence of unlocked buttons


3.DOM Elements Creation, to allow the dynamic calculator and levels i will need to implement DOM editing though Javascript. creating a div for the calculator then constructing the calculator to edit it in the future is an example of what would be required.


---


## DLC - Additional Topics


The biggest additional topic I will be implementing is local storage. By using JSON Stringify i can place large strings in local storage to call later even if the page is closed.
