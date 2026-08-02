const competitions = [

{
    icon:"🏴",
    title:"Premier League",
    subtitle:"Premier League History",
    description:`The Premier League is the highest level of professional football in England. It was founded on 20 February 1992, when clubs from the old Football League First Division decided to create a new competition with greater commercial independence.

The league officially began in the 1992–93 season with 22 clubs. Today, it consists of 20 teams competing every season from August to May. The Premier League is widely regarded as the most watched football league in the world, broadcasting matches in more than 190 countries.

Some of the league's most successful clubs include Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, and Tottenham Hotspur.`,

    founded:"20 February 1992",
    country:"England",
    teams:"20",
    organizer:"Premier League Ltd."
},

{
    icon:"🇪🇸",
    title:"La Liga",
    subtitle:"La Liga History",
    description:`La Liga is Spain's highest professional football competition. Founded in 1929, it is one of Europe's oldest leagues and is famous for technical football, legendary players, and the historic rivalry between Real Madrid and Barcelona.

Some of the league's most successful clubs include Real Madrid, Barcelona, Atlético Madrid, Athletic Club and Valencia.`,

    founded:"1929",
    country:"Spain",
    teams:"20",
    organizer:"LALIGA"
},

{
    icon:"🇮🇹",
    title:"Serie A",
    subtitle:"Serie A History",
    description:`Serie A is Italy's highest professional football league. Founded in 1929, it is famous for tactical football and legendary clubs including Juventus, AC Milan, Inter Milan, Napoli and Roma.`,

    founded:"1929",
    country:"Italy",
    teams:"20",
    organizer:"Lega Serie A"
},

{
    icon:"🇩🇪",
    title:"Bundesliga",
    subtitle:"Bundesliga History",
    description:`The Bundesliga is Germany's highest professional football competition. Founded in 1963, it is famous for passionate fans, exciting football and record attendances.

Bayern Munich, Borussia Dortmund and Bayer Leverkusen are among its biggest clubs.`,

    founded:"1963",
    country:"Germany",
    teams:"18",
    organizer:"DFL"
},

{
    icon:"🇫🇷",
    title:"Ligue 1",
    subtitle:"Ligue 1 History",
    description:`Ligue 1 is France's top football competition. Founded in 1932, it has produced many world-class players and clubs including Paris Saint-Germain, Marseille, Lyon and Monaco.`,

    founded:"1932",
    country:"France",
    teams:"18",
    organizer:"LFP"
},

{
    icon:"🇳🇱",
    title:"Eredivisie",
    subtitle:"Eredivisie History",
    description:`The Eredivisie is the highest football league in the Netherlands. Founded in 1956, it is known worldwide for producing talented young players through clubs like Ajax, PSV Eindhoven and Feyenoord.`,

    founded:"1956",
    country:"Netherlands",
    teams:"18",
    organizer:"KNVB"
},

{
    icon:"🇵🇹",
    title:"Primeira Liga",
    subtitle:"Primeira Liga History",
    description:`Primeira Liga is Portugal's top football competition. Founded in 1934, it is home to Benfica, FC Porto and Sporting CP and is famous for developing elite football talent.`,

    founded:"1934",
    country:"Portugal",
    teams:"18",
    organizer:"Liga Portugal"
},

{
    icon:"🇹🇷",
    title:"Süper Lig",
    subtitle:"Süper Lig History",
    description:`The Süper Lig is Turkey's highest football league. Founded in 1959, it is famous for passionate supporters and clubs such as Galatasaray, Fenerbahçe and Beşiktaş.`,

    founded:"1959",
    country:"Turkey",
    teams:"20",
    organizer:"Turkish Football Federation"
},

{
    icon:"🏆",
    title:"UEFA Champions League",
    subtitle:"Champions League History",
    description:`The UEFA Champions League is Europe's biggest club football tournament. It began in 1955 as the European Cup before being renamed in 1992.

It features the best clubs from across Europe every season.`,

    founded:"1955",
    country:"Europe",
    teams:"36 Clubs",
    organizer:"UEFA"
},

{
    icon:"🌍",
    title:"FIFA World Cup",
    subtitle:"FIFA World Cup History",
    description:`The FIFA World Cup is the world's largest international football tournament. First held in Uruguay in 1930, it is played every four years and attracts billions of viewers worldwide.`,

    founded:"1930",
    country:"Worldwide",
    teams:"48 National Teams",
    organizer:"FIFA"
}

];

const container=document.getElementById("historyContainer");

container.innerHTML=competitions.map(item=>`

<div class="history-card">

<div class="league-icon">${item.icon}</div>

<h2>${item.title}</h2>

<h3>${item.subtitle}</h3>

<p>${item.description}</p>

<div class="history-info">
<p><strong>Founded:</strong> ${item.founded}</p>
<p><strong>Country:</strong> ${item.country}</p>
<p><strong>Number of Teams:</strong> ${item.teams}</p>
<p><strong>Current Organizer:</strong> ${item.organizer}</p>
</div>

</div>

`).join("");