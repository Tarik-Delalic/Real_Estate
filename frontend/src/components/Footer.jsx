import React from 'react';
import FooterLinks from './FooterLinks';

const footerIcons = [
    { name: 'facebook', background: '#3b5998', icon: 'fa-facebook-f' },
    { name: 'twitter', background: '#55acee', icon: 'fa-twitter' },
    { name: 'google', background: '#dd4b39', icon: 'fa-google' },
    { name: 'instagram', background: '#ac2bac', icon: 'fa-instagram' },
    { name: 'linked-in', background: '#0082ca', icon: 'fa-linkedin-in' },
    { name: 'github', background: '#333333', icon: 'fa-github' },

]

const Footer = () => {

    return (

        <footer className="bg-body-tertiary text-center">

            <div className="container p-4 pb-0">
                <section className="mb-4">

                    {footerIcons.map(item => {
                        return <FooterLinks
                            key={item.name}
                            background={item.background}
                            icon={item.icon}>
                                
                            </FooterLinks>
                    })}
                </section>

            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2020 Copyright:
                <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>


    );
};





export default Footer