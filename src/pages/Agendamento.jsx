import { useState } from 'react';

function Agendamento() {
  const [form, setForm] = useState({
    nome: '',
    servico: '',
    data: '',
    horario: ''
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Agendamento realizado para ${form.nome}!`);
  }

  return (
    <section className="section page form-page">
      <div className="form-box">
        <h1>Agendamento</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome
            <input name="nome" value={form.nome} onChange={handleChange} required />
          </label>

          <label>Serviço
            <select name="servico" value={form.servico} onChange={handleChange} required>
              <option value="">Selecione um serviço</option>
              <option>Corte Masculino</option>
              <option>Barba</option>
              <option>Corte + Barba</option>
              <option>Sobrancelha</option>
            </select>
          </label>

          <label>Data
            <input type="date" name="data" value={form.data} onChange={handleChange} required />
          </label>

          <label>Horário
            <select name="horario" value={form.horario} onChange={handleChange} required>
              <option value="">Selecione o horário</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
            </select>
          </label>

          <button className="btn" type="submit">Confirmar agendamento</button>
        </form>
      </div>
    </section>
  );
}

export default Agendamento;