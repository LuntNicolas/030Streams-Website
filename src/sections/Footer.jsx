import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBTqsz7uRiK__anUS-dq3Rj7jZcxjT8-Bcg&s"
                   target="_blank">
                    <img className="size-8" src="./images/logos/logo_with_gradient.png" alt="logo"/>
                </a>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        {/*©{new Date().getFullYear()} Lennart Lunt. All rights reserved.*/}
                        ©{new Date().getFullYear()} 030 Sessions - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
