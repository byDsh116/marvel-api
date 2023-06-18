import './randomChar.scss'
import './../../style/buttons.scss'
import thor from '../../resources/img/thor.jpeg'
import mjolnir from '../../resources/img/mjolnir.png'


const RandomChar = (props) => {
    return (
        <div className='randomchar'>
            <div className='randomchar__block'>
                <img src={thor} className='randomchar__img' />
                <div className='randomchar__info'>
                    <p className="randomchar__name">Thor</p>
                    <p className='randomchar__descr'>
                        As the Norse God of thunder and lightning,
                        Thor wields one of the greatest weapons ever made,
                        the enchanted hammer Mjolnir. While others have described Thor as an over-muscled,
                        oafish imbecile, he's quite smart and compassionate...
                    </p>
                    <div className='randomchar__btns'>
                        <button className='button button__main'>
                            <div className='inner'> homepage</div>
                        </button>
                        <button className='button button__secondary'>
                            <div className='inner'> wiki</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='randomchar__choose-block'>
                <p className='randomchar__title'>
                    Random character for today !<br />
                    Do you want to get to know him better?
                </p>
                <p className='randomchar__title'>
                    Or choose another one
                </p>
                <button className='button button__main'>
                    <div className='inner'>try it</div>
                </button>
                <img src={mjolnir} alt="" className='randomchar__decoration' />
            </div>
        </div>
    )
}

export default RandomChar
