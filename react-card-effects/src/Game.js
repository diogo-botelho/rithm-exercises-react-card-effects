import React, { useEffect } from 'react';
import Card from './Card'
const BASE_URL = 'http://deckofcardsapi.com/api/deck'

function Game() {
    const [deck, setDeck] = userState(null);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(function fetchDeckOnLoad() {
    //     async function fetchDeck() {
    //         const deckResult = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    //         setDeck(deckResult.data);
    //     }
    //     fetchDeck();
    // }, [ ]);

    useEffect(function fetchCardOnClick(deck) {

        const { remaining, deck_id } = deck;
        
        if(!remaining) {
            return "Error: no cards remaining!";
        }

        async function fetchCard(deck_id) {
            const cardResult = await axios.get(`${BASE_URL}/${deck_id}/draw/?count=1`);
            const updatedCards = cardResult.data;
            setCards(cards => updatedCards);
        }
        fetchCard();
    })

    //getDeck()
    //getCard()
    //  if there's no more cards => show alert
    //  else setCards(newCard);

    //We'll need a state for the deck
    //Do we need a state for drawn cards (array),
    //  and "currCard" will be the last in that array 
    
    //Effect for API call

    //First we get a deck from API
    //Everytime we want card, we call the API with the
    //  deck ID and get a card from it
    //API deals with removing card from deck?
    //If deck is empty, API will tells us 

    //In our return:
    //  - Map through all the currCards and call
    //      Card component for each card in the array.
    //  (If we were doing it in vanilla JS, we'd
    //      append to DOM)
    //  - Need the button with evt listener. CLicking
    //      on button calls the getCard() function
    //  - 
}

export default Game;