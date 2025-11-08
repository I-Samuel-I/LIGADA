import { useRef, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import swal from "sweetalert2";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !topic.trim() || !message.trim()) {
      swal.fire({
        title: "Atenção!",
        text: "Por favor, preencha todos os campos!",
        icon: "warning",
        background: "#742D86",
        color: "#ffffff",
        iconColor: "#f8f5f9",
        confirmButtonColor: "#5a1069",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm("service_y7u9ptx", "template_wkb8q55", form.current, {
        publicKey: "yCxIzEDnwB2rxxrxu",
      })

      .then(() => {
        swal.fire({
          title: "SUCESSO!",
          text: "Sua mensagem foi enviada. Por favor verifique seu email para nossa resposta.",
          icon: "success",
          background: "#222222",
          color: "#fff",
        });
        setName("");
        setEmail("");
        setMessage("");
        setTopic("");
      })
      .catch((error) => {
        console.error("Falha ao enviar o email: ", error);
        swal.fire({ title: "ERRO!", text: "Falha ao enviar mensagem.", icon: "error" });
      });
  };

  return (
    <div className="contact-card form-side">
      <div className="card-header">
        <i className="fa-regular fa-envelope" />
        <h2>Envie uma Mensagem</h2>
      </div>

      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="subject">Assunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Sobre o que você quer falar?"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={200}
          placeholder="Escreva sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" value="Send">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
