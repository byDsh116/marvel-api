import './charCards.scss';
import abyss from '../../resources/img/abyss.jpeg';

const CharCards = () => {
    return (
        <div className='charcards__list'>
            <ul className='charcards__grid'>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item charcards__item_selected'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
                <li className='charcards__item'>
                    <img src={abyss} alt='abyss' />
                    <div className='charcards__name'>Abyss</div>
                </li>
            </ul>
            <button className='button button__main button__long'>
                <div className='inner'>load more</div>
            </button>
        </div>
    )
}

export default CharCards;