import React from 'react'

const FooterLinks = ({ background, icon }) => {
    return (
        <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: background }}
            href="#!"
            role="button"
        ><i className={`fab ${icon}`}></i>
        </a>
    )
}

export default FooterLinks