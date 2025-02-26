import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 40vw;
    height: 20vh;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid black;
    overflow: scroll;
    background-color: #d9d7d7;
`
const NameWrapper = styled.div`
    background-color: white;
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
            {info.games.map((game, index) => {
                const wonGame = game.teamScore > game.opponentScore
                return (<GameWrapper key={info.name + ' game:' + index.toString()}style={{ color: 'white', backgroundColor: wonGame ? 'green' : 'red'}}>
                    {game.teamScore}:{game.opponentScore} - Tier: {game.tier}
                </GameWrapper>
                )
            })}
        </CardWrapper>
    )
}