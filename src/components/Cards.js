import Card from "./Card";

const Cards = () => {
    const commentsOne = [
        {
            user: "rhys",
            text: "looking good",
            id: 1,
        },
        {
            user: "evka",
            text: "looking good mate",
            id: 2,
        },
        {
            user: "evaldas",
            text: "I wish I was there",
            id: 3,
        },
    ];
    const commentsTwo = [
        {
            user: "nicola",
            text: "I want vocation",
            id: 4,
        },
    ];
    const commentsThree = [
        {
            user: "loreta",
            text: "I was a part of this",
            id: 5,
        },
    ];

    return (
        <div className="cards">
            <Card image="https://picsum.photos/800/900" 
            comments={commentsOne} 
            likedByText="rhys" 
            likedbyNumber={156} 
            hours={14} />

            <Card image="https://picsum.photos/800" 
            comments={commentsTwo} 
            likedByText="Evaldas" 
            likedbyNumber={1345} 
            hours={3} />

            <Card image="https://picsum.photos/800/1000" 
            comments={commentsThree} 
            likedByText="Nicola" 
            likedbyNumber={78} 
            hours={12} />
        </div>
    )
};

export default Cards;