
export const START_GAME = "START_GAME"
export const GUESSES = "GUESSES"

export const startGame = () => ({
    type: START_GAME
})

export const guesses = (number) => ({
    type: GUESSES,
    payload: number
})