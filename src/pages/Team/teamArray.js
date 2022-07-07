
const TNames = [
    {name: <h1>"Ethan"</h1>},
    {name: <h1>"Eli"</h1>},
    {name: <h1>"Person"</h1>},
]

const TPhoto = [
    {photo: require("../../assets/photos/Photo-11.jpeg")},
    {photo: require("../../assets/photos/Photo-11.jpeg")},
    {photo: require("../../assets/photos/Photo-11.jpeg")},
]

const TDescription = [
    {details: <text>"This guy"</text>},
    {details: <text>"That guy"</text>},
    {details: <text>"The guy"</text>},
    
]


const TeamMember = (Name, Photo, Description) => [
    
    Name = { ...TNames},
    Photo = {...TPhoto},
    Description = {...TDescription},
    

];

export default TeamMember;
