import React from 'react';


const About = () => {
    // Негізгі контейнер
    return <div className="about-sectiion-container">
        {/* Фон суреті */}
        <div className='about-background-image-container'>
            <img src="https://avatars.mds.yandex.net/i?id=f8ba6fb741ce7b1143007f9286d7d072_l-10452512-images-thumbs&n=13" alt="" />
        </div>
        {/* Фондағы қосымша сурет */}
        <div className='about-text-section-container'>
            <img src="https://www.eurocompanyformations.com/wp-content/uploads/2020/07/About-us.png" alt="" />
        </div>
        {/* Мәтіндік бөлім */}
        <div className='about-section-text-container'>
            {/* Кіші тақырып */}
            <p className='primary-subheading'>About</p>
            {/* Негізгі тақырып */}
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            {/* Бірінші мәтін */}
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur.Non tincidunt magna non et elit. Dolor turpis molestil dio magnis facilisis at fringilla quam.</p>
            {/* Екінші мәтін */}
            <p className='primary-text'>
                Non tincidunt magna non et elit. Dolor turpis molestil dio magnis facilisis at fringilla quam. <br />
            </p>
            {/* Батырмалар контейнері */}
            <div className='about-button-container'>
                {/* "Learn More" батырмасы */}
                <button className='secondary-button'>Learn More</button>
                {/* Видео көру батырмасы */}
                <button className='watch-video-button'>
                    {""} 
                    {/* <BsFillPlayCircleFill/> */}
                    Whath Vidoe
                </button>
            </div>
        </div>
    </div>
};


export default About;