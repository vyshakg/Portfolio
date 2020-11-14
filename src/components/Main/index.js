import React, { useRef } from 'react';
import AskQuestion from './askQuestion/AskQuestion';
import Contacts from './Contacts';
import Hero from './Hero';
// import Portfolio from './portfolio/Portfolio';
import TimeLine from './TimeLine';

export default function Main() {
    const timeLineRef = useRef(null);
    const contactsRef = useRef(null);

    return (
        <main>
            <Hero timeLineRef={timeLineRef} contactsRef={contactsRef} />
            <TimeLine timeLineRef={timeLineRef} />
            {/* <Portfolio projectRef={projectRef} /> */}
            <Contacts contactsRef={contactsRef} />
            <AskQuestion />
        </main>
    );
}
