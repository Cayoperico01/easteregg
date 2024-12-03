const form = document.getElementById("formulaire");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les données du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const age = document.getElementById("age").value;
    const num = document.getElementById("num").value;
    const motivation = document.getElementById("motivation").value;
    const disponibilites = document.getElementById("disponibilites").value;
    const pourquoi = document.getElementById("pourquoi").value;
    const qualites = document.getElementById("qualites").value;
    const defauts = document.getElementById("defauts").value;
    const consent = document.getElementById("consent").checked ? "Oui" : "Non";

    // Crée le message formaté pour Discord
    const message = {
        "embeds": [{
            "title": "Nouvelle Candidature",
            "description": "Voici une nouvelle candidature pour rejoindre l'organisation de Cayo Perico.",
            "color": 3066993, // Vert militaire
            "fields": [
                {
                    "name": "Nom",
                    "value": nom,
                    "inline": true
                },
                {
                    "name": "Prénom",
                    "value": prenom,
                    "inline": true
                },
                {
                    "name": "Âge",
                    "value": age,
                    "inline": true
                },
                {
                    "name": "Numéro",
                    "value": num,
                    "inline": true
                },
                {
                    "name": "Motivation",
                    "value": motivation,
                    "inline": false
                },
                {
                    "name": "Disponibilités",
                    "value": disponibilites,
                    "inline": false
                },
                {
                    "name": "Pourquoi rejoindre cette organisation ?",
                    "value": pourquoi,
                    "inline": false
                },
                {
                    "name": "Qualités",
                    "value": qualites,
                    "inline": false
                },
                {
                    "name": "Défauts",
                    "value": defauts,
                    "inline": false
                },
                {
                    "name": "Consentement pour collecte des données",
                    "value": consent,
                    "inline": true
                }
            ]
        }]
    };

    // Envoie le message au webhook Discord
    const webhookURL = "https://discord.com/api/webhooks/1313515061150617731/jJhJQyhTOHPxNRocOebuIsIoPDccwE9ksw8RSABNZvrTbCGJFU2-cAHZ5xIhBfwODqRe";

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            alert("Formulaire envoyé avec succès !");
        } else {
            alert("Erreur lors de l'envoi du formulaire.");
        }
    })
    .catch(error => {
        console.error("Erreur :", error);
        alert("Erreur lors de l'envoi du formulaire.");
    });
});
