import React from 'react';

const Work = () => {
    const workInfoDate = [
        {
            // image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            // image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et."
        },
        {
            // image: DeliverMeals,
            title: "Fast Delivries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis."
        }
    ];


    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoDate.map((data, idx) => (
                    <div className='work-section-info' key={idx}>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;