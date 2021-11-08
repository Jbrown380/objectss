//
const olEl = document.querySelector("ol");
const movies = [
{
    name:"Spiderman Into the Spiderverse",
    year: 2018,
    director: "Peter Ramsey",
    picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FayHvBRGNpU3Zb6_V4La5pddRuwo%3D%2F1400x1400%2Ffilters%3Aformat(png)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22000183%2Fimage__12_.png&imgrefurl=https%3A%2F%2Fwww.polygon.com%2F2020%2F10%2F30%2F21541814%2Fmarvel-spider-man-miles-morales-into-the-spider-verse-suit-pre-order-early-access&tbnid=lm7FwxFDljTV2M&vet=12ahUKEwjG1Lro74f0AhV-QkIHHd7UB_UQMygGegUIARDbAQ..i&docid=cI0KXOKjrlc3JM&w=1400&h=1400&q=miles%20morales%20movie&ved=2ahUKEwjG1Lro74f0AhV-QkIHHd7UB_UQMygGegUIARDbAQ"
},

{
    name: "Joker",
    year: 2019,
    director: "Todd Phillips",
   picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI%40._V1_QL75_UX500_CR0%2C0%2C500%2C281_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt7286456%2F&tbnid=vFKf4nOBrlH_YM&vet=12ahUKEwiJ7YCd8If0AhUGmVMKHY1bDdMQMygAegUIARDKAQ..i&docid=C4LXs0Zk0shJnM&w=500&h=281&q=joker%20movie&ved=2ahUKEwiJ7YCd8If0AhUGmVMKHY1bDdMQMygAegUIARDKAQ"
},
{
    
    name: "Justice League",
    year: 2017,
    director: "Zack Snyder",
    picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91JNWWQKGgL._RI_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FJustice-League-Ben-Affleck%2Fdp%2FB077H3VB76&tbnid=KbmOxgVIJRWGIM&vet=12ahUKEwiPioOc8Yf0AhXx8lMKHQMcBYEQMygDegUIARCSAg..i&docid=ZyyJCOCVsb6-DM&w=1920&h=2560&q=Justice%20league%20movie&hl=en&ved=2ahUKEwiPioOc8Yf0AhXx8lMKHQMcBYEQMygDegUIARCSAg"
}
];

const templateEl = movies.map(movies => `
    <li>
    <p>Name: ${movies.name}</p>
    <p>year: ${movies.year}</p>
    <p>director: ${movies.director}</p>
    <p>picture: <a href=${movies.picture}</a></p>
    </li>
    `);


    olEl.innerHTML = template.join(``);