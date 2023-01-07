import { useState } from "react";
import adoptLove from '../images/adopt-love.gif';

function PetCard({ it, names, alt }) {
  const [meQuieres, setMeQuieres] = useState(false);

  const tuMeQuieres = () => {
    !meQuieres ? setMeQuieres(true) : setMeQuieres(false);
  }

  return (
    <div className="card-container" onClick={tuMeQuieres}>
      <div className={`flipper ${meQuieres ? "card-clicked" : ""}`}>
        {meQuieres ?
          (
            <div className="back">
              <h3 className="back-title">Gostou de mim?</h3>
              <p className="back-p">
                Se você quiser adotar {names} e saber mais detalhes sobre esse pet, entre em contato por meio do e-mail ou telefone abaixo:
                <br />
                (01) 2345-6789 e email@email.com
              </p>
              <img
              src={adoptLove}
              alt="doggo e gatitchu"
              className="back-img"
              />
            </div>
          ) : (
            <div className="front">
              <img src={it} key={it} alt={alt} className='pet-img' />
              <div className='pet-name'>
                <p className='pet-p'>{names}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PetCard;