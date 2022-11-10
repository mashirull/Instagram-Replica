var posts = [
    {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "https://bit.ly/3shJrDh",
    post: "https://bit.ly/3TubxHq",
    comment: "just took a few mushrooms lol",
    likes: 21
    },
    {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "https://bit.ly/3VKv4VH",
    post: "https://bit.ly/3DkW1rB",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
    },
    {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "https://bit.ly/3CYdGUB",
    post: "https://bit.ly/3W2pTk6",
    comment:
        "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
    }
];



{/* <div class="post_box">
        <div class="user_name_box">
            <img src="" alt="" class="avatar">
            <div class="avatar_content">
                <h3 class="name"></h3>
                <p class="location"></p>
            </div>
        </div>
        <div class="post_img">
            <img src="" >
        </div>
        <div class="icon"></div>
        <h1 class="like"></h1>
        <h2 class="username"> </h2>
        <span class="comment"></span>
    </div> */}


    




for(i=0;i<posts.length;i++){
    var post_card = document.createElement('div')
    post_card.classList.add('post_box');

    post_card.innerHTML = `<div class="user_name_box">
    <img src="${posts[i].avatar}" alt="" class="avatar">
    <div class="avatar_content">
        <h3 class="name">${posts[i].name}</h3>
        <p class="location">${posts[i].location}</p>
    </div>
    </div>
    <div class="post_img">
        <img src="${posts[i].post}" >
    </div>
    <div class="bottom_sec">
    <div class="icon">
    <i class="fa-regular fa-heart"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-share"></i>
    </div>
    <h1 class="like">${posts[i].likes} Likes</h1>
    <h2 class="username">${posts[i].username} <p class="comment">${posts[i].comment}</p></h2>
    </div>
    `


    var post_container = document.querySelector('.post_container');
    post_container.appendChild(post_card)
    console.log(post_card)
}





















