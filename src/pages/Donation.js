import { useEffect, useState } from "react";
import Header from '../components/Header';
import hand from '../images/donate.png';
import dogos from '../images/donate-to.png';
import '../styles/Donation.css';

function Donation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [donate, setDonate] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [send, setSend] = useState(false);

  useEffect(() => {
    const phoneLength = 11;
    const minLength = 3;
    const minDonate = 1;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regex)
      && phone.length === phoneLength
      && name.length >= minLength
      && donate >= minDonate) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, phone, name, donate]);

  const sendInfo = () => {
    setSend(true);
  }

  const donateAgain = () => {
    setSend(false);
  }

  return (
    <>
      <Header />
      {send ?
        <div className="donated-container">
          <p className="donated-p">
            Agradecemos seu interesse em nos auxiliar com R${donate}, {name}.
            Enviaremos o código de pagamento PIX via SMS para {phone} e também para o e-mail {email}.
          </p>
          <button
            className="donated-btn"
            type="button"
            onClick={donateAgain}
          >
            Doar outra quantia
          </button>
          <img src={hand} alt="mão com coração, simbolizando ato de doação" className="donated-img" />
        </div>
        :
        <form className="donate-form">
          <h1 className="donate-title">Deseja fazer uma doação? Preencha o formulário abaixo</h1>
          <label htmlFor="name-form" className="donate-label">
            Informe seu nome:
            <input
              className="donate-input"
              id="name-form"
              onChange={({ target }) => setName(target.value)}
              placeholder="Jean Pierre Polnareff"
              type="text"
              value={name}
            />
          </label>
          <label htmlFor="email-form" className="donate-label">
            Informe seu e-mail:
            <input
              className="donate-input"
              id="email-form"
              onChange={({ target }) => setEmail(target.value)}
              placeholder="silver@chariot.com"
              type="email"
              value={email}
            />
          </label>
          <label htmlFor="phone-form" className="donate-label">
            Informe seu celular:
            <input
              className="donate-input"
              id="phone-form"
              onChange={({ target }) => setPhone(target.value)}
              placeholder="11999999999"
              type="tel"
              maxLength="11"
              value={phone}
            />
          </label>
          <label htmlFor="donate-form" className="donate-label">
            Valor que deseja doar:
            <input
              className="donate-input"
              id="donate-form"
              onChange={({ target }) => setDonate(target.value)}
              placeholder="50"
              type="number"
              min="1"
              value={donate}
            />
          </label>
          <button
            className={isDisabled ? "cannot-send" : "send-btn"}
            type="button"
            onClick={sendInfo}
            disabled={isDisabled}
          >
            Enviar dados
          </button>
          <img src={dogos} alt="dois cachorros e um gato aguardando doação" className="donate-img" />
        </form>}
    </>
  );
}

export default Donation;
