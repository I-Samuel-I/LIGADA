import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export function useEmailJs(publicKey: string) {
  useEffect(() => {
    emailjs.init(publicKey);
    console.log("EmailJS initialized");
  }, [publicKey]);
}
