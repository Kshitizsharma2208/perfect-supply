import React from 'react';
import Header from '../../component/Header';
import SwiperContact from '../../component/SwiperContact';
import location from "../../styles/images/location.png";
import phone from "../../styles/images/phone.png";
import whatsapp from "../../styles/images/whatsapp.png";
import msg from "../../styles/images/msg.png";
import locationImg from "../../styles/images/loc.png"
import "./ContactUs.scss";

const ContactUs = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperContact />
            <div className="oilAndGasContentPage container">

                <div className="leftPart">
                    <h2 className='header'>DUBAI</h2>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={location} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">Platinum Business Center Al Nahda 2 Office 406 - Dubai - United Arab Emirates</div>
                    </div>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={phone} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">+971 4259 4442</div>
                    </div>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={whatsapp} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">+971 551 319 876</div>
                    </div>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={msg} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">sales@perfectservicesuae.com</div>
                    </div>

                </div>
                <div className="rightPart">
                    <div className="location">
                        <img src={locationImg} alt="" className="locationImg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs