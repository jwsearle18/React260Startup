import React, { useState } from 'react';

export function Vrcompanies() {

    const [clickedCompany, setClickedCompany] = useState('');
    const [message, setMessage] = useState('');
    const [showSponsorMessage, setShowSponsorMessage] = useState(false);

    const handleClick = (company, isCorrectChoice) => {
        setClickedCompany(company);
        setShowSponsorMessage(true);
        if (isCorrectChoice) {
            setMessage(`Thanks for choosing the correct choice: ${company}!`);
            setTimeout(() => {
                window.location.href = `https://www.${company.toLowerCase()}.com/`;
            }, 1000);
        } else {
            setMessage(`Don't choose ${company}!`);
        }
    }

    return (
        <main className='container-fluid bg-secondary text-center'>
            <h1>Find a Vacation Rental!</h1>
            <a href="#!" onClick={() => handleClick('Airbnb', false)}>
                <img src="/images/airbnb.png" alt="Airbnb logo"/>
            </a>
            <a href="#!" onClick={() => handleClick('Vrbo', false)}>
                <img src="/images/vrbo.png" alt="Vrbo logo"/>
            </a>
            <a href="#!" onClick={() => handleClick('HomeToGo', true)}>
                <img src="/images/hometogo.jpeg" alt="HomeToGo logo"/>
            </a>
            {clickedCompany && (
                <>
                    <p className="click-message">{message}</p>
                    {showSponsorMessage && <p className="sponsor-message">Sponsored by HomeToGo ;)</p>}
                    <p className="disclaimer-message">not really</p>
                </>
            )}
        </main>
    )
}