import React from 'react'
import Card from '../card/Card'

const Cards = () => {
    let cards = [
        {
            id: 1,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg',
            title: 'Threads',
            desc: 'Illustration'
        },
        {
            id: 2,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg',
            title: 'Explore',
            desc: 'Graphic designer'
        },
        {
            id: 3,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg',
            title: 'Finish',
            desc: 'Identity'
        },
        {
            id: 4,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg',
            title: 'Lines',
            desc: 'Branding'
        },
        {
            id: 5,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg',
            title: 'Southwest',
            desc: 'Website design'
        }
        ,
        {
            id: 6,
            image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg',
            title: 'Window',
            desc: 'Photography'
        }
    ]
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'30px',justifyContent:'center',margin:'200px 0'}}>
            {cards.map((card)=>(
                <Card 
                key={card.id} 
                image={card.image}
                title={card.title}
                desc={card.desc}
                />
            ))}
        </div>
    )
}

export default Cards