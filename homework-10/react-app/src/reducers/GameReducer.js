import { GUESSES, START_GAME } from "../actions/GameActions";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const initialState = {
  targetNumber: getRandomNumber(),
  numberOfGuesses: [],
  attempts: 0,
  feedback: "",
};

const guessReducer = ( state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                targetNumber: getRandomNumber(),
                numberOfGuesses:[], 
                attempts: 0,
                guessingStatus: '',

            }

            case GUESSES:{
                const number = action.payload;
                const updatedGuesses = [ ...state.numberOfGuesses,number];
                const attempts = updatedGuesses.length;

                let guessingStatus = ''
                if(number > state.targetNumber) {
                    guessingStatus = 'Too High!'
                } else if (number < state.targetNumber) {
                    guessingStatus = 'Too Low!'
                } else {
                    guessingStatus = 'CORRECT!'
                } 
                
                return {
                    ...state,
                    numberOfGuesses: updatedGuesses,
                    attempts,
                    guessingStatus,

                }
            }
            

                default:
                    return state;
            
    }
}

export default guessReducer