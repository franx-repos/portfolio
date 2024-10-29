import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const style = {
    input:
      "mt-2 text-white rounded-md block w-full p-2.5 bg-zinc-700 focus:outline-none focus:border focus:border-green-400 focus:mt-[6px]",
    button:
      "mt-2 ml-auto bg-transparent hover:bg-green-400 text-2xl text-green-400 font-frankyFont hover:text-black font-medium py-2 px-8 border border-green-400 hover:border-transparent rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110",
  };

  const inputs = [
    { name: "user_name", type: "text", label: "Name" },
    { name: "subject", type: "text", label: "Subject" },
    { name: "user_email", type: "email", label: "Email" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2z0lakn", "template_yaafod8", form.current, {
        publicKey: "c_pCmO3Jeu97cqFKj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col h-screen justify-center items-center bg-stone-900 font-frankyFont text-white "
    >
      <h2 className="section-heading z-50 text-4xl md:text-5xl lg:text-6xl text-white mt-5 font-bold">
        Contact
      </h2>
      <div className="flex w-4/5 mt-24 justify-center">
        <form
          className="flex flex-col w-full lg:w-2/5 space-y-2"
          ref={form}
          onSubmit={sendEmail}
        >
          {inputs.map((input, index) => (
            <div key={index + 1}>
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                className={style.input}
                placeholder={input.label}
              />
            </div>
          ))}
          <div>
            <textarea
              name="message"
              id="message"
              className={style.input}
              placeholder="Message"
              rows="4"
            />
          </div>
          <div className="flex">
            <button type="submit" value="Send" className={style.button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
