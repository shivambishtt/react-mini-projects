import React, { useEffect, useState } from 'react'
import Grids from './Grids.js'

function DisplayGrids() {
    const [cards, setCards] = useState(Grids())
    const [islocked, setIsLocked] = useState(false)
    const [flippedCards, setFlippedCards] = useState([])

    const handleClick = (card) => {
        if (cards[card].isFlipped || islocked) {
            return
        }
        const copyCards = [...cards]
        copyCards[card].isFlipped = true
        setCards(copyCards)
        setFlippedCards([...flippedCards, card])
    }
    useEffect(() => {

        if (flippedCards.length === 2) {
            setIsLocked(true)
            setTimeout(() => {
                if (cards[flippedCards[0]].number !== cards[flippedCards[1]].number) {
                    setCards((prevCards) => {
                        const copyCards = [...prevCards]
                        copyCards[flippedCards[0]].isFlipped = false
                        copyCards[flippedCards[1]].isFlipped = false
                        return copyCards
                    })
                }
                setIsLocked(false)
                setFlippedCards([])
            }, 3000)
        }

    }, [flippedCards])

    return (
        <div className='card-container'>
            {cards.map((card, index) => {
                return <button
                    key={index}
                    onClick={() => handleClick(card.id)}
                    className='card'>
                    {card.isFlipped ? card.number : "?"}</button>

            })}
        </div>
    )
}

export default DisplayGrids
