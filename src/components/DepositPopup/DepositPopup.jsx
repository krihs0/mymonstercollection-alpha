import "./DepositPopup.scss";

const DepositPopup = () => {
    return (
        <div className="popupcenterandclose">
            <div className="shopitem__info__price__info__popup">
                <h3 className="shopitem__info__price__info__popup__title">Deposit</h3>
                <p className="shopitem__info__price__info__popup__disclaimer">Sometimes shops will import their monster from countries that dont have a deposit bill!</p>
                <p className="shopitem__info__price__info__popup__text">
                    Netherlands: €0.15 <br/>
                    Germany: €0.25 <br/>
                    Austria: €0.25 <br/>
                    United Kingdom: £0.20 <br/>
                    Romania: 0.50 RON <br/>
                    Estonia: €0.10 <br/>
                    Croatia: 0.50 HRK <br/>
                    Norway: 2.00 NOK <br/>
                    Slovakia: €0.15 <br/>
                    Denmark: 1.00 DKK <br/>
                    Sweden: 1.00 SEK <br/>
                    Finland: €0.15 <br/>
                    Latvia: €0.10 <br/>
                    Lithuania: €0.10 <br/>
                    Iceland: 16.00 ISK <br/>
                </p>
                <a className="shopitem__info__price__info__popup__learnmore" target="_blank" href="https://en.wikipedia.org/wiki/Container-deposit_legislation">Learn more</a>
            </div>
        </div>
    );
}

export  default DepositPopup;
