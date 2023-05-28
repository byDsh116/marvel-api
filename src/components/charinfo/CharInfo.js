import loki from '../../resources/img/loki.png';
import '../../style/buttons.scss'
import './charInfo.scss'

const CharInfo = () => {
    return (
        <div className='charinfo'>
            <div className='charinfo__descr'>
                <img src={loki} alt='' />
                <div><p className='charinfo__name'>loki</p></div>
                <div className='charinfo__btns'>
                    <button className='button button__main'>
                        <div className='inner'>
                            homepage
                        </div>
                    </button>
                    <button className='button button__secondary'>
                        <div className='inner'>
                            wiki
                        </div>
                    </button>
                </div>
                <div>
                    <p className='charinfo__descr-text'> In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
                </div>
                <div>
                    <p className='charinfo__comics-block'>
                        Comics:
                    </p>
                </div>
                <ul>
                    <li>
                        All-Winners Squad: Band of Heroes (2011) #3
                    </li>
                    <li>
                        Alpha Flight (1983) #50
                    </li>
                    <li>
                        Amazing Spider-Man (1999) #503
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharInfo