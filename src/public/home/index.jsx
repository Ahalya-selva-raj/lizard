import AppHeader from "../../layout/appHeader";

const Home = () => {
    return (
        <div className="App">
            <AppHeader />
            <body>
                <div className='info-slider'>
                    <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' style={{ width: "100%" }} />
                    <div className='info-slider-text'>
                        <h1>Hi</h1>
                        <h5>This is the lizard app</h5>
                        <h5>Hoping you will enjoy</h5>
                    </div>
                    <div className='form'>
                        <h2>Get a free service demo</h2>
                        <div>
                            <input placeholder='First Name' />
                            <input placeholder='Last Name' />
                        </div>
                        <div>
                            <input placeholder='Phone Number' />
                            <input placeholder='Email' />
                        </div>
                        <div>
                            <input placeholder='Address' />
                            <input placeholder='City' />
                        </div>
                        <div>
                            <input placeholder='Number of rooms' />
                            <input placeholder='Number of service' />
                        </div>
                        <button>Get a demo</button>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Home;