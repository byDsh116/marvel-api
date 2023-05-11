import Button from '../button/Button'
import './randomChar.scss'



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

                    {/* <div className='randomchar__btns'> */}


                    <Button />

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default RandomChar