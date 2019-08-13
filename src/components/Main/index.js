import React, { useRef } from "react";
import AskQuestion from "../AskQuestion";
import Contacts from "../Contacts";
import Hero from "../Hero";
import Portfolio from "../Portfolio";

export default function Main() {
  const projectRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <main>
      <Hero projectRef={projectRef} contactsRef={contactsRef} />
      <Portfolio projectRef={projectRef} />
      <Contacts contactsRef={contactsRef} />
      <AskQuestion />
    </main>
  );
}
