/* eslint-disable no-unused-vars */
import { useState } from "react";
import Pacloader from "../components/loader";
import PixelDialog from "../components/successDialog";

import axios from "axios";

export default function Contact() {
  const backend = import.meta.env.VITE_BACKEND_URL;

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [Sender, setSender] = useState({
    email: "",
    sub: "",
    message: "",
  });

  const onSendMail = async (e) => {
    e.preventDefault();
    if (!Sender.email || !Sender.sub || !Sender.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      setIsSending(true);
      setErrorMessage("");
      console.log(isSending);
      const title = "Hey, Rohit here!";
      const body =
        "Thanks for connecting. Looking forward to hearing from you soon.";
      const email = Sender.email;
      const response = await axios.post(`${backend}api/v1/mails`, {
        title,
        body,
        email,
      });
      console.log(response);
      setIsSent(true);
      setSender({
        email: "",
        sub: "",
        message: "",
      });
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.");
      console.log(err);
    } finally {
      setIsSending(false);
      console.log(isSending);
    }
  };

  const closeDialog = () => {
    setIsSent(false); // Close the dialog
  };

  return (
    <div id="contact" className="section relative">
    <section className="bg-transparent md:ms-10 p-6 pt-10">
      <div className="py-6 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center font-arcade">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-lg text-center font-arcade text-secondary">
          Send me a Hello.
        </p>
        {errorMessage && (
          <p className="text-error font-Code text-center mb-4 ">{errorMessage}</p>
        )}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xs font-medium font-arcade text-secondary text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm font-arcade bg-black border border-black text-primary text-xs rounded w-full p-2.5 placeholder:bg-black"
              placeholder="name@me.com"
              value={Sender.email}
              onChange={(e) => setSender({ ...Sender, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-xs font-medium font-arcade text-secondary dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="shadow-sm font-arcade bg-black border border-black text-primary text-xs rounded w-full p-2.5 placeholder:bg-black"
              placeholder="Let me know"
              value={Sender.sub}
              onChange={(e) => setSender({ ...Sender, sub: e.target.value })}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xs font-extralight font-arcade text-secondary dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="shadow-sm font-arcade bg-black border border-black text-primary text-xs rounded w-full p-2.5 placeholder:bg-black"
              placeholder="Leave a comment..."
              value={Sender.message}
              onChange={(e) =>
                setSender({ ...Sender, message: e.target.value })
              }
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              id="send"
              onClick={onSendMail}
              className="shadow-sm text-center font-arcade bg-black border border-black text-primary text-xs rounded w-full p-2.5 placeholder:bg-black"
            >
              {isSending ? <Pacloader /> : "Send"}
            </button>
          </div>
        </form>
      </div>
      {isSent && <PixelDialog onClose={closeDialog} />}
    </section>
    </div>
  );
}
