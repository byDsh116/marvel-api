import loki from '../../resources/img/loki.png';
import './charInfo.scss'

const CharInfo = () => {
    return (
        <div className='charinfo'>
            <div className='charinfo__descr'>
                <img src={loki} alt='' />
                <div><p className='charinfo__name'>loki</p></div>
            </div>
        </div>
    )
}

export default CharInfo