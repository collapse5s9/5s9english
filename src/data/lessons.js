// Dans data/lessons.js, remplacez le contenu par :
export const LESSONS_DATA = {
  day1: {
    title: "L'alphabet et les sons de base",
    type: "basics",
    content: `
      <h2>Objectifs du jour</h2>
      <ul>
        <li>Apprendre l'alphabet anglais</li>
        <li>Maîtriser la prononciation des lettres</li>
        <li>Comprendre les différences avec le français</li>
      </ul>

      <h3>L'alphabet anglais</h3>
      <p>Les 26 lettres et leur prononciation :</p>
      <div class="grid grid-cols-2 gap-4">
        <div>A [ei] comme dans "day"</div>
        <div>B [bi:] comme dans "bee"</div>
      </div>
    `,
    quiz: {
      questions: [
        {
          question: "Comment prononce-t-on la lettre 'A' en anglais ?",
          options: ["[ei]", "[ai]", "[é]", "[a]"],
          correct: 0,
          explanation: "La lettre 'A' se prononce [ei] comme dans 'day' ou 'make'"
        },
        {
          question: "Quel est l'équivalent du son 'é' français en anglais ?",
          options: ["ay", "ey", "ee", "ea"],
          correct: 0,
          explanation: "Le son 'é' français est souvent rendu par 'ay' en anglais"
        },
        {
          question: "Épeler le mot 'HELLO' en anglais",
          options: [
            "H-E-L-L-O",
            "A-Y-L-O-W",
            "H-A-L-L-O",
            "E-L-L-O-W"
          ],
          correct: 0,
          explanation: "HELLO s'épelle H-E-L-L-O ([eɪtʃ]-[i:]-[el]-[el]-[əʊ])"
        }
      ],
      passingScore: 70
    }
  },

  day2: {
    title: "Salutations et présentations",
    type: "conversation",
    content: `
      <h2>Objectifs du jour</h2>
      <ul>
        <li>Apprendre les salutations de base</li>
        <li>Savoir se présenter</li>
        <li>Comprendre les différents niveaux de politesse</li>
      </ul>

      <h3>Salutations essentielles</h3>
      <div class="grid gap-2">
        <div>Hello / Hi - Bonjour (informel)</div>
        <div>Good morning - Bonjour (matin)</div>
        <div>Good afternoon - Bonjour (après-midi)</div>
        <div>Good evening - Bonsoir</div>
        <div>Goodbye / Bye - Au revoir</div>
      </div>
    `,
    quiz: {
      questions: [
        {
          question: "Quelle est la salutation appropriée à 9h du matin ?",
          options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
          correct: 0,
          explanation: "'Good morning' est utilisé le matin jusqu'à midi environ"
        },
        {
          question: "Comment dit-on 'Au revoir' de manière informelle ?",
          options: ["Bye", "Good evening", "Hello", "Good afternoon"],
          correct: 0,
          explanation: "'Bye' est la version informelle de 'Goodbye'"
        }
      ],
      passingScore: 70
    }
  },

  day3: {
    title: "Le verbe 'To Be' au présent",
    type: "grammar",
    content: `
      <h2>Le verbe être en anglais</h2>
      <div class="conjugation-table">
        <div>I am - Je suis</div>
        <div>You are - Tu es</div>
        <div>He/She/It is - Il/Elle est</div>
        <div>We are - Nous sommes</div>
        <div>You are - Vous êtes</div>
        <div>They are - Ils/Elles sont</div>
      </div>
    `,
    quiz: {
      questions: [
        {
          question: "Comment dit-on 'Je suis étudiant' en anglais ?",
          options: [
            "I am a student",
            "I is a student",
            "I are a student",
            "I be a student"
          ],
          correct: 0,
          explanation: "'I am' est la forme correcte pour 'je suis'"
        },
        {
          question: "Quelle est la forme correcte : '_____ is a teacher'",
          options: ["She", "He am", "They", "We"],
          correct: 0,
          explanation: "'She is' est la forme correcte pour la 3ème personne du singulier"
        }
      ],
      passingScore: 70
    }
  }
  // Vous pouvez continuer à ajouter les jours suivants selon le même modèle
};
