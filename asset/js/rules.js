var events = [
    {
        "name": "Tech Hunt",
        "category": "Brain Teaser",
        "image": "\/asset\/resource\/image\/events-bg\/techhunt.jpeg",
        "description": "Coming Soon"
    },
    {
        "name": "Omegatrix",
        "category": "Brain Teaser",
        "image": "\/asset\/resource\/image\/events-bg\/omegatrix.jpg",
        "description": "Be ready to hum the poetry of logical thoughts because the tricky mathematics quiz is here! With entertaining puzzles like SUDOKU, mind boggling magic squares, brain teasing IQ puzzles, Omegatrix is battle of best minds. For convenience, it has been divided into two rounds namely-Prelims and Mains. Participants who succeed to get through the puzzle in the first round - prelims, qualify and compete in the second round - mains. The finalists will face aptitude-based questions which will assess their skill, knowledge and time management. Hone your skills and your mind in this game. Be ready to slay your opponents with some quick thinking. Watch, think, act and win!"
    },
    {
        "name": "Code Bee",
        "category": "Technicals",
        "image": "\/asset\/resource\/image\/events-bg\/codebee.jpg",
        "description": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. Code-Bee is an offline coding event which tests your logical, mathematical and basic programming skills. Plunge in to unravel the deep Coding secrets and swim up to the shore with the best algorithm"
    },
    {
        "name": "App Mania",
        "category": "Technicals",
        "image": "\/asset\/resource\/image\/events-bg\/app-mania.jpg",
        "description": "BP PODDAR INSTITUTE OF MANAGEMENT AND TECHNOLOGY presents APPMANIA in the awaited TECHSTORM 2.23. Calling all the young innovators with a knack to hack together the next disruptive Android, Web, iOS, and Windows applications to take the ever-growing market of apps by storm. This is your chance to make a dent in the universe. So what are you waiting for? Register now and present your skills and shine as bright as stars in the universe of developers."
    },
    {
        "name": "Technical Writing",
        "category": "Technicals",
        "image": "\/asset\/resource\/image\/events-bg\/technical-writing.jpg",
        "description": "Coming Soon"
    },
    {
        "name": "Aqua Race",
        "category": "Rovers",
        "image": "\/asset\/resource\/image\/events-bg\/aquarace.jpg",
        "description": "Coming Soon"
    },
    {
        "name": "Ro Navigator",
        "category": "Rovers",
        "image": "\/asset\/resource\/image\/events-bg\/ronavigator.jpg",
        "description": "Robots follow a blackline and chase a maze. Bot to take the least amount of time is the winner"
    },
    {
        "name": "Ro Terrance",
        "category": "Rovers",
        "image": "\/asset\/resource\/image\/events-bg\/roterrain.jpeg",
        "description": "A competition where the participants develop a any terrain robot to overcome any hurdle coming in front of it"
    },
    {
        "name": "Ro Combat",
        "category": "Rovers",
        "image": "\/asset\/resource\/image\/events-bg\/rocombat.webp",
        "description": "Participants make there beast to compete against each other and the toughest robot becomes the winner."
    },
    {
        "name": "Ro Soccer",
        "category": "Rovers",
        "image": "\/asset\/resource\/image\/events-bg\/rosoccor.jpg",
        "description": "Participants create bots to play the game of football. Team to score the most wins"
    },
    {
        "name": "Fifa(Console)",
        "category": "Games",
        "image": "\/asset\/resource\/image\/events-bg\/fifa.jpeg",
        "description": "#FIFA"
    },
    {
        "name": "PES(Mobile)",
        "category": "Games",
        "image": "\/asset\/resource\/image\/events-bg\/pes.jpeg",
        "description": "E-football is a competitive mobile football game. It can be played in solo or team mode. Our college is organizing a solo tournament which will have two levels. The tournament prelims will be in knockout mode and quarter, semi and final afterwards. The tournament will be organized in two days and will be held in several manners."
    },
    {
        "name": "Khet",
        "category": "Games",
        "image": "\/asset\/resource\/image\/events-bg\/khet.jpeg",
        "description": "The Laser Game KHET 2.0: Mind blowing laser fun for players ages 9-99. Using simple rules that can be learned in minutes, players alternate turns moving Egyptian themed mirrored Pieces, after which they fire their REAL (eye-safe) laser with the goal of blasting their opponents PHARAOH to win the game! BASIC GEOMETRICAL CONCEPT IS THE KEY FACTOR IN THIS GAME."
    },
    {
        "name": "Creative Canvas",
        "category": "Creative",
        "image": "\/asset\/resource\/image\/events-bg\/creative-canvas.png",
        "description": "Coming Soon"
    },
    {
        "name": "Passion with Reels",
        "category": "Creative",
        "image": "\/asset\/resource\/image\/events-bg\/reels.png",
        "description": "The process of creating a film encompasses multiple distinct steps, starting from the conception of a story, concept and continuing through screenwriting, casting, filming, sound recording, pre-production, editing, and finally, presenting the completed project to an audience. Filmmaking is both an art form and a reflection of humanity's evolving life and rapid advancements in science and technology. If you have a passion for it and a talented team, then take the opportunity to showcase your skills and enthusiasm through your work!"
    }
]

var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var eventName = params['event'].replace(/\+/g, ' ');


const image = document.querySelector('.image');
document.getElementById('registerBtn').onclick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScOWzQcQV7kl5XS7mQgIckv9mXERwpb3mUl3e46ZH4HclDfxg/viewform?usp=sf_link', '_blank');
}



events.forEach(event =>{
    if(event.name == eventName){
        document.querySelector('.gradient h1').textContent = `#${eventName}`;
        image.style.backgroundImage = `url(${event.image})`;
        document.getElementById('description').textContent = event.description;
        if (event.description == 'Coming Soon') {
            document.getElementById('rules-list').innerHTML = 'Coming Soon';
            document.getElementById('rounds').innerHTML = 'Coming Soon';
        }
    }
})