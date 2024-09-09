function jourtravaille(date) {
    const joursFeries = [
        new Date('2020-01-01'), // 1er janvier
        new Date('2020-04-10'), // Vendredi saint
        new Date('2020-04-13'), // Lundi de Pâques
        new Date('2020-05-01'), // Fête du travail
        new Date('2020-05-08'), // Victoire 1945
        new Date('2020-05-21'), // Ascension
        new Date('2020-06-01'), // Lundi de Pentecôte
        new Date('2020-07-14'), // Fête nationale
        new Date('2020-08-15'), // Assomption
        new Date('2020-11-01'), // Toussaint
        new Date('2020-11-11'), // Armistice 1918
        new Date('2020-12-25')  // Noël
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; // mois commence à 0
    const annee = date.getFullYear();

    if (joursFeries.some(jourFerie => jourFerie.getTime() === date.getTime())) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

jourtravaille(new Date('2020-01-01')); // jour férié
jourtravaille(new Date('2020-04-12')); // week-end
jourtravaille(new Date('2020-04-13')); // jour férié
jourtravaille(new Date('2020-04-14')); // jour travaillé