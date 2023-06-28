import "./Account.scss";
import "./../../scss/basics.scss"
import ProfilePlaceholder from "./../../assets/profile-placeholder.png";

const account = () =>{

    return(
        <div className="account">
                <div className="account__editwrapper">
                    <div className="account__editwrapper__top">
                        <figure className="account__editwrapper__top__figure">
                            <img className="account__editwrapper__top__figure__img" src={ProfilePlaceholder} alt="profile picture" />
                        </figure>
                        <div className="account__editwrapper__top__edituid">
                            <p className="account__editwrapper__top__edituid__uid">Username &nbsp; &nbsp;</p>
                            <i class="fa-solid fa-pen account__editwrapper__top__edituid__button"></i>
                        </div>
                    </div>
                    <div className="account__editwrapper__bottom">
                        <div className="account__editwrapper__bottom__changeemail">
                            <input defaultValue="example@example.com" className="account__editwrapper__bottom__changeemail__email input" type="text" />
                            <button className="account__editwrapper__bottom__changeemail__button btn btn--changeemail">Change</button>
                        </div>
                        <button className="account__editwrapper__bottom__changepwd btn btn--accountpage">Change password</button>
                    </div>
                </div>
                <div className="account__dangerwrapper">
                    <button className="account__dangerwrapper__reset btn btn--accountpage">Reset collection</button>
                    <button className="account__dangerwrapper__delete btn btn--accountpage"> Delete acount</button>
                </div>
        </div>
    );
}

export default account;