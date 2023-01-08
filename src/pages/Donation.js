function Donation() {

  return (
    <form>
      <label htmlFor="name-form">
        Digite seu nome:
        <input
          id="name-form"
          // onChange={ ({ target }) => setFilterName(target.value) }
          placeholder="Exemplo: Jean Pierre Polnareff"
          type="text"
          // value={ }
        />
      </label>
    </form>
  );
}

export default Donation;
