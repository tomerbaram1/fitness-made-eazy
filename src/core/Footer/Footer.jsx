import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='section1'>
                <img src='https://raw.githubusercontent.com/aniskchaou/GYM-FRONTEND-CLIENT/master/screenshots/logo.png' />

                <h3>Fitness made easy is a pro natrul bodybulding site, <br />
                    studided by experts and scientists all over the world.</h3>
                <div className='icon-section'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                </div>
            </div>
            <div className='section1'>
                <h1>programs</h1>
                <p>Training Programs</p>
                <p>Nutrition Plans</p>
            </div>
            <div className='section1'>
                <h1>ABOUT</h1>
                <p>About Me</p>
                <p>Blog</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className='section1'>
                <h1>MY SPONSORS</h1>
                <p>MacroFactor Diet App</p>
                <p>Mass Research Review</p>
                <p>Rise Gym Gear</p>
                <p>PEScience Supplements</p>
                <p>Neck Flex</p>
            </div>
        </div>
    )
}

export default Footer