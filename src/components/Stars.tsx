import Star from './Star';

interface StarsProps {
    count: number
}

const Stars: React.FC<StarsProps> = ({ count }) => {
    const arrLength = count > 0 && count <= 5 ? count : 0;
    const arrCount = Array(arrLength).fill('_');
  
    return (
        <ul className='card-body-stars u-clearfix'>
            {arrCount.map(_ => 
                    <li className='star'><Star /></li>
                )
            }
        </ul>
    )
}

export default Stars

