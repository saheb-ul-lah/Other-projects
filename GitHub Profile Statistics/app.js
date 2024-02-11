// Making the HTML elements Dynamic
let getfollowers = document.querySelector(".follower");
let getfollowings = document.querySelector(".followings");
let getbio = document.querySelector(".job");
let getDp = document.querySelector(".profile-img");
let getName = document.querySelector(".name");
let link = document.querySelector(".link");
// GitHub User Details Fetching
let changedURL = prompt("Enter your Username:");
let requestURL= 'https://api.github.com/users/'+changedURL;
let profilelink = 'https://github.com/'+changedURL;
link.href= profilelink;
function fetchdetailslive(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    let follow;
    let followin;
    let bio;
    let dplink;
    let name;
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            const data =JSON.parse(this.responseText);
            follow = data.followers;
            followin = data.following;
            bio = data.bio;
            dplink = data.avatar_url;
            name = data.name;
            getName.innerHTML = name;
            getDp.src = dplink;
            getbio.innerHTML = bio;
            getfollowers.innerHTML = "Followers: " + follow;
            getfollowings.innerHTML = "Following: " + followin;
        }
    }
    xhr.send();
}
fetchdetailslive();
