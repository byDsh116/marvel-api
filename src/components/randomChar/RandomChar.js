import Button from '../button/Button'
import './randomChar.scss'
import mjolnir from '../../resources/img/mjolnir.png'




const RandomChar = (props) => {
    return (
        <div className='randomchar'>
            <div className='randomchar__block'>
                {props.img}
                <div className='randomchar__info'>
                    <p className="randomchar__name">{props.name}</p>
                    <p className='randomchar__descr'>
                        As the Norse God of thunder and lightning,
                        Thor wields one of the greatest weapons ever made,
                        the enchanted hammer Mjolnir. While others have described Thor as an over-muscled,
                        oafish imbecile, he's quite smart and compassionate...
                    </p>

                    <div className='randomchar__btns'>
                        <Button />
                        <Button />

                    </div>
                </div>
            </div>

            <div className='randomchar__choose-block'>
                <p className='randomchar__title'>Random character for today !</p>
                <p className='randomchar__title'>Do you want to get to know him better?</p>
                <Button />
                <img src={mjolnir} alt="" className='randomchar__decoration' />
            </div>
        </div>
    )
}

export default RandomChar