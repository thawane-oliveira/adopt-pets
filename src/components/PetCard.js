import { useState } from "react";

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
              <p > se fufu, vai ter que me adotar </p>
            </div>
          ) : (
            <div className="front">
              <img src={it} key={it} alt={alt} className='dog-img' />
              <div className='dog-name'>
                <p className='dog-p'>{names}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PetCard;