const translations = {
    en: {
        title: "Paulina's birth",
        description: "July 19 is a date that can have different meanings depending on the context. Here are some important events and facts associated with this date:",
        events: `
            <li><strong>Historical events:</strong></li>
            <ul>
                <li>In 1900: The Paris metro opens its doors for the first time.</li>
                <li>In 1969: The Apollo 11 mission enters lunar orbit, preparing for the historic moon landing on July 20.</li>
                <li>In 1996: A bomb attack during the Atlanta Olympic Games kills two people and injures more than 100.</li>
            </ul>
            <li><strong>Celebrations and observances:</strong></li>
            <ul>
                <li>Nelson Mandela International Day: This day, recognized by the United Nations, celebrates the life and legacy of Nelson Mandela, encouraging people to dedicate 67 minutes of their time to helping others, in tribute to Mandela's 67 years of fighting for social justice.</li>
            </ul>
            <li><strong>Notable birthdays:</strong></li>
            <ul>
                <li>1834: Birth of Edgar Degas, a famous French painter and sculptor.</li>
                <li>1976: Birth of Benedict Cumberbatch, British actor known for his roles in Sherlock and Doctor Strange.</li>
            </ul>
        `,
        birthdayMessage: "<h2>Happy Birthday, Paulina my love!</h2> Today is a very special day because it's the day you were born, July 19, 1983. Since then, you light up the world with your presence and make my life more beautiful every day. I'm very lucky to have you by my side. May this day be as wonderful as you, filled with joy, love, and happiness.",
        loveMessage: "I love you more than anything.",
        happyBirthday: "Happy Birthday!"
    },
    fr: {
        title: "Naissance de Paulina",
        description: "Le 19 juillet est une date qui peut avoir différentes significations selon le contexte. Voici quelques événements et faits importants associés à cette date :",
        events: `
            <li><strong>Événements historiques :</strong></li>
            <ul>
                <li>En 1900 : Le métro de Paris ouvre ses portes pour la première fois.</li>
                <li>En 1969 : La mission Apollo 11 entre en orbite lunaire, préparant le débarquement historique sur la lune le 20 juillet.</li>
                <li>En 1996 : Un attentat à la bombe pendant les Jeux Olympiques d'Atlanta tue deux personnes et en blesse plus de 100.</li>
            </ul>
            <li><strong>Célébrations et observances :</strong></li>
            <ul>
                <li>Journée internationale Nelson Mandela : Ce jour, reconnu par les Nations Unies, célèbre la vie et l'héritage de Nelson Mandela, en encourageant les gens à consacrer 67 minutes de leur temps à aider les autres, en hommage aux 67 ans de lutte de Mandela pour la justice sociale.</li>
            </ul>
            <li><strong>Anniversaires notables :</strong></li>
            <ul>
                <li>1834 : Naissance d'Edgar Degas, célèbre peintre et sculpteur français.</li>
                <li>1976 : Naissance de Benedict Cumberbatch, acteur britannique connu pour ses rôles dans Sherlock et Doctor Strange.</li>
            </ul>
        `,
        birthdayMessage: "<h2>Joyeux anniversaire, Paulina mon amour!</h2> Aujourd'hui est un jour très spécial car c'est le jour de ta naissance, le 19 juillet 1983. Depuis lors, tu illumines le monde de ta présence et tu embellis ma vie chaque jour. J'ai beaucoup de chance de t'avoir à mes côtés. Que ce jour soit aussi merveilleux que toi, rempli de joie, d'amour et de bonheur.",
        loveMessage: "Je t'aime plus que tout.",
        happyBirthday: "Joyeux anniversaire !"
    },
    es: {
        title: "Nacimiento de Paulina",
        description: "El 19 de julio es una fecha que puede tener diferentes significados según el contexto. Aquí hay algunos eventos y hechos importantes asociados con esta fecha:",
        events: `
            <li><strong>Eventos históricos:</strong></li>
            <ul>
                <li>En 1900: El metro de París abre sus puertas por primera vez.</li>
                <li>En 1969: La misión Apolo 11 entra en órbita lunar, preparando el histórico alunizaje el 20 de julio.</li>
                <li>En 1996: Un atentado con bomba durante los Juegos Olímpicos de Atlanta mata a dos personas y hiere a más de 100.</li>
            </ul>
            <li><strong>Celebraciones y observancias:</strong></li>
            <ul>
                <li>Día Internacional de Nelson Mandela: Este día, reconocido por las Naciones Unidas, celebra la vida y el legado de Nelson Mandela, animando a las personas a dedicar 67 minutos de su tiempo para ayudar a los demás, en homenaje a los 67 años de lucha de Mandela por la justicia social.</li>
            </ul>
            <li><strong>Cumpleaños notables:</strong></li>
            <ul>
                <li>1834: Nacimiento de Edgar Degas, un famoso pintor y escultor francés.</li>
                <li>1976: Nacimiento de Benedict Cumberbatch, actor británico conocido por sus roles en Sherlock y Doctor Strange.</li>
            </ul>
        `,
        birthdayMessage: "<h2>¡Feliz cumpleaños, Paulina mi amor!</h2> Hoy es un día muy especial porque es el día en que naciste, el 19 de julio de 1983. Desde entonces, iluminas el mundo con tu presencia y embelleces mi vida cada día. Tengo mucha suerte de tenerte a mi lado. Que este día sea tan maravilloso como tú, lleno de alegría, amor y felicidad.",
        loveMessage: "Te amo más que a nada.",
        happyBirthday: "¡Feliz cumpleaños!"
    }
};

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerHTML = translations[lang].description;
    document.getElementById('events').innerHTML = translations[lang].events;
    document.getElementById('birthday-message').innerHTML = translations[lang].birthdayMessage;
    document.getElementById('love-message').innerText = translations[lang].loveMessage;
    document.getElementById('happy-birthday').innerText = translations[lang].happyBirthday;
}
