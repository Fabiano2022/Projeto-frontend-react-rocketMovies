import { Container } from './styles'
import { AiFillStar, AiOutLineStar } from 'react-icons/ai'





export function Rating( { grade, isBigSize }) {
    let stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= grade) {
            stars.push(<AiFillStar Key={i} />);
        } else {
            stars.push(<AiOutLineStar Key={i} />)
        }
    }

    return <Container isBigSize={isBigSize}>{stars}</Container>;
} 