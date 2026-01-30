import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 40vw;
    height: 20vh;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid black;
    overflow: scroll;
`
const NameWrapper = styled.div`
    background-color: white;
    border-bottom: 2px solid black;
    height: 4vh;
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
            <div style={{height: '16vh', overflow: 'scroll'}}>
                {info.games.map((game, index) => {
                    const wonGame = game.teamScore > game.opponentScore
                    return (<GameWrapper key={info.name + ' game:' + index.toString()}style={{ color: 'white', backgroundColor: wonGame ? '#2C6E49' : '#9B2D20'}}>
                        {game.teamScore}:{game.opponentScore} - Tier: {game.tier}
                    </GameWrapper>
                    )
                })}
            </div>
            
        </CardWrapper>
    )
}