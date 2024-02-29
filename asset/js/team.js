var team = [
    {
        name: 'Arindam Dandapat',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/arindam-dandapat-719688225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name: 'Arnab Sarkar',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: ''
    },
    {
        name: 'Ipsita Mitra',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/ipsita-mitra-5a0472214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name: 'Srijita Mallick',
        team: 'Volunteer',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/srijita-mallick-10391a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name: 'Shuvam Pal',
        team: 'Volunteer',
        subTeam: 'Creative Management Team',
        linkedin: ''
    },
    {
        name: 'Sheetam Coondoo',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/sheetam-coondoo-6b612b21b/'
    },
    {
        name: 'Agradip Banik',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/agradip-banik-b80793292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name: 'Archak Nath',
        team: 'Core',
        subTeam: 'Creative Management Team',
        linkedin: 'https://www.linkedin.com/in/archak-nath-a682aa247/'
    },
    {
        name: 'Shreya Gupta',
        team: 'Core',
        subTeam: 'PR and Sponsor Management Team',
        linkedin: ''
    },
    {
        name: 'Debparna Ghatak',
        team: 'Core',
        subTeam: 'PR and Sponsor Management Team',
        linkedin: 'https://www.linkedin.com/in/debparna-ghatak-a08645200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name: 'Rishav Thakkar',
        team: 'Core',
        subTeam: 'PR and Sponsor Management Team',
        linkedin: ''
    },
    {
        name: 'Sauvick Pramanick',
        team: 'Core',
        subTeam: 'PR and Sponsor Management Team',
        linkedin: ''
    },
]

const list = document.getElementById('member-list');
team.forEach(member => {
    const indiMember = document.createElement('div');
    const background = document.createElement('img');
    const techstormBG = document.createElement('img');
    const memberPic = document.createElement('img');
    const gradient = document.createElement('div');
    const name = document.createElement('h2');
    const position = document.createElement('p');
    const linkArrow = document.createElement('img');

    indiMember.setAttribute('class', 'member')
    background.setAttribute('class', 'background');
    techstormBG.setAttribute('class', 'techstorm-bg');
    memberPic.setAttribute('class', 'member-pic');
    gradient.setAttribute('class', 'gradient');
    linkArrow.setAttribute('class', 'link-icon');

    background.src = `/asset/resource/image/member-bg/${member.name.replace(/ /g, "-")}.jpg`;
    techstormBG.src = '/asset/resource/image/background/team-bg.png';
    memberPic.src = `/asset/resource/image/member-image/${member.name.replace(/ /g, "-")}-removebg.png`;
    name.textContent = member.name;
    position.textContent = `${member.team}, ${member.subTeam}`
    linkArrow.src = '/asset/resource/image/icon/arrow-up-right.svg';

    if (member.linkedin != '') {
        gradient.appendChild(linkArrow);
        indiMember.onclick = () => {
            window.location.href = member.linkedin;
        }
    }

    indiMember.appendChild(background);
    indiMember.appendChild(techstormBG);
    indiMember.appendChild(memberPic);
    gradient.appendChild(name);
    gradient.appendChild(position);
    indiMember.appendChild(gradient);

    list.appendChild(indiMember);
});

{/* <div class="member">
    <img src="/asset/resource/image/member-bg/shreya-gupta.jpg" alt="" class="background">
    <img src="/asset/resource/image/background/team-bg.png" alt="" class="techstorm-bg">
    <img src="/asset/resource/image/member-image/shreya-gupta-removebg.png" alt="" class="member-pic">
    <div class="gradient">
        <h2>Shreya Gupta</h2>
        <p>Core, PR and Sponsor Management Team</p>
        <img src="/asset/resource/image/icon/arrow-up-right.svg" alt="" class="link-icon">
    </div>
</div> */}