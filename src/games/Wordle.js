import { useState } from 'react'

function Wordle() {

    const answerData = 'Hello'

    const [guess, setGuess] = useState(['','','','',''])

    

    function guess

    return(
        <div>
            {answerData}

            <br />

            input:
            <br />
            <form>
                {guess.map((guessObj) => {
                    return(
                        <input type='text' value={guessObj} />
                    )
                })}
            </form>

        </div>
    )
}

export default Wordle;