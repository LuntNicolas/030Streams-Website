import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        ©{new Date().getFullYear()} Lennart Lunt. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
