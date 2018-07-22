# Blackjack

We're going to build a fully functional Blackjack application, though we'll simplify the rules
so we can finish it quicker.

## Rules

We'll use the following rules:
- Dealer deals 2 cards to the players and two to himself (1 card face up, the other face down)
- Blackjack card values: All cards count their face value in blackjack. 
Picture cards count as 10 and the ace can count as either 1 or 11. 
Card suits have no meaning in blackjack. The total of any hand is the sum of the card values in the hand
- Players must decide whether to stand or hit.
- The dealer acts last and must hit on 16 or less and stand on 17 through 21.
- Players win when their hand totals higher than the dealer’s hand, or they have 21 or less when the dealer busts (i.e., exceeds 21).

## Components

We can break our app into **5 components** (plus the root App component):

**App**: contains the entirety of the example and encompasses all the tables

**Table**: contains the dealer's hand, the player's hand, the playing interface and the table outcome

**Hand**: displays the cards belonging to either the dealer or the player

**Card**: displays the image of the card

**Interface**: receives all the user input (displays the buttons), displays the scores and the outcome of the game

**Outcome**: displays the outcome of the game

Components that appear within another component in the graph below should appear as a child in the hierarchy:

<img src="black-jack/assets/blackjack_components.jpg" />
