import landingImage from '../images/landing/landing-image.png'
import '../styles/landing.css'

function Landing() {
    return(
        <div className="main-container">
            <div className="heading-section mt-4">
                <div className="heading-section-title">
                    <div>
                        <h1>
                            Welcome to E-commerce JS, the first website of second handed clothes.
                        </h1>
                        <div className='heading-section-buttons mt-2'>
                            <button className='squared-button create-account-button bold'>Create account</button>
                            <button className='squared-button login-button bold'>Log-in</button>
                        </div>
                    </div>
                </div>

                <div className="heading-section-ilustration">
                    <img width={700} src={landingImage} alt="" />
                </div>
            </div>


        </div>
    );
}

export default Landing;