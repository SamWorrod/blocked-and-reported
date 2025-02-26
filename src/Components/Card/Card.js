import styled from 'styled-components'

const CardWrapper = styled.div`
    min-width: 15vw;
    height: 20vh;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid black;
    overflow: scroll;
`
const NameWrapper = styled.div`
    border-bottom: 2px solid black;
`
const GameWrapper = styled.div`
    font-size: 0.75em;
    border-bottom: 2px solid black;

`


export default function Card(props) {
    const info = props.info
    return (
        <CardWrapper>
            <NameWrapper>
                {info.name}
            </NameWrapper>
            {info.games.map((game) => {
                const wonGame = game.teamScore > game.opponentScore
                return (<GameWrapper style={{ color: 'white', backgroundColor: wonGame ? 'green' : 'red'}}>
                    {game.teamScore}:{game.opponentScore} - Tier: {game.tier}
                </GameWrapper>
                )
            })}
        </CardWrapper>
    )
}