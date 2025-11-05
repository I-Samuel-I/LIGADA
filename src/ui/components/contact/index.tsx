import "./style.scss";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Função de envio não implementada (apenas para layout).");
  };

  return (
    <div className="contact-card form-side">
      <div className="card-header">
        <i className="fa-regular fa-envelope" />
        <h2>Envie uma Mensagem</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome *</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="seu.email@exemplo.com"
          required
        />

        <label htmlFor="subject">Assunto *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Sobre o que você quer falar?"
          required
        />

        <label htmlFor="message">Mensagem *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Escreva sua mensagem..."
          required
        ></textarea>

        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}
