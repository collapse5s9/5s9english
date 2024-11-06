// src/App.js
import React, { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase/config';
import { ChevronLeft, User, LogOut, Award, Book, Home, BarChart } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LESSONS_DATA } from './data/lessons';
import { LessonPage } from './components/LessonPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progress, setProgress] = useState({
    currentDay: 1,
    completedDays: [],
    score: 0
  });

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUserData({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUserData(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLessonComplete = (lessonDay, score) => {
    setProgress(prev => ({
      ...prev,
      completedDays: [...prev.completedDays, lessonDay],
      currentDay: Math.max(prev.currentDay, lessonDay + 1),
      score: (prev.score + score) / 2
    }));
    setCurrentLesson(null);
    setCurrentPage('lessons');
  };

  // Rest of your components (Navigation, HomePage, LessonsPage, ProfilePage)
  // ... (Keep them as they were in your original code)
  
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

// Dans App.js, remplacez les composants manquants par :
const Navigation = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
    <div className="flex justify-around items-center">
      <button 
        onClick={() => setCurrentPage('home')}
        className={`flex flex-col items-center p-2 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <Home size={24} />
        <span className="text-xs">Accueil</span>
      </button>
      <button 
        onClick={() => setCurrentPage('lessons')}
        className={`flex flex-col items-center p-2 ${currentPage === 'lessons' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <Book size={24} />
        <span className="text-xs">Leçons</span>
      </button>
      <button 
        onClick={() => setCurrentPage('stats')}
        className={`flex flex-col items-center p-2 ${currentPage === 'stats' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <BarChart size={24} />
        <span className="text-xs">Progrès</span>
      </button>
      <button 
        onClick={() => setCurrentPage('profile')}
        className={`flex flex-col items-center p-2 ${currentPage === 'profile' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <User size={24} />
        <span className="text-xs">Profil</span>
      </button>
    </div>
  </div>
);

const HomePage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">English Learning Journey</h1>
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Votre progression</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{width: `${(progress.currentDay / 90) * 100}%`}}
        ></div>
      </div>
      <p className="text-sm text-gray-600">Jour {progress.currentDay}/90</p>
    </div>
    {progress.currentDay > 0 && (
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Continuer la leçon</h3>
        <button 
          onClick={() => setCurrentLesson(progress.currentDay)}
          className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
        >
          Jour {progress.currentDay}
        </button>
      </div>
    )}
  </div>
);

const LessonsPage = () => (
  <div className="p-4 pb-20">
    <h2 className="text-xl font-bold mb-4">Vos leçons</h2>
    <div className="grid gap-4">
      {Object.keys(LESSONS_DATA).map((day, index) => (
        <div 
          key={day}
          className={`bg-white rounded-lg p-4 shadow ${index + 1 > progress.currentDay ? 'opacity-50' : ''}`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Jour {index + 1}</h3>
            {progress.completedDays.includes(index + 1) && (
              <Award className="text-green-500" size={20} />
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">
            {LESSONS_DATA[day].title}
          </p>
          <button 
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 disabled:opacity-50"
            disabled={index + 1 > progress.currentDay}
            onClick={() => setCurrentLesson(index + 1)}
          >
            Commencer
          </button>
        </div>
      ))}
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-4 pb-20">
    {isLoggedIn ? (
      <>
        <div className="bg-white rounded-lg p-4 shadow mb-4">
          <div className="flex items-center gap-4">
            <img 
              src={userData.photo} 
              alt="Profile" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{userData.name}</h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow mb-4">
          <h3 className="font-semibold mb-2">Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg text-center ${progress.currentDay >= 30 ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Award size={24} className={progress.currentDay >= 30 ? 'text-blue-600 mx-auto' : 'text-gray-400 mx-auto'} />
              <p className="text-sm mt-2">Jour 30</p>
            </div>
            <div className={`p-4 rounded-lg text-center ${progress.currentDay >= 60 ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Award size={24} className={progress.currentDay >= 60 ? 'text-blue-600 mx-auto' : 'text-gray-400 mx-auto'} />
              <p className="text-sm mt-2">Jour 60</p>
            </div>
            <div className={`p-4 rounded-lg text-center ${progress.currentDay >= 90 ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Award size={24} className={progress.currentDay >= 90 ? 'text-blue-600 mx-auto' : 'text-gray-400 mx-auto'} />
              <p className="text-sm mt-2">Jour 90</p>
            </div>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white rounded-lg py-2 font-medium hover:bg-red-700"
        >
          <LogOut size={20} />
          Déconnexion
        </button>
      </>
    ) : (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
        <button 
          onClick={handleLogin}
          className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700"
        >
          Se connecter avec Google
        </button>
      </div>
    )}
  </div>
);
  
  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {currentLesson ? (
        <LessonPage
          lesson={LESSONS_DATA[`day${currentLesson}`]}
          onComplete={(score) => handleLessonComplete(currentLesson, score)}
        />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'lessons' && <LessonsPage />}
          {currentPage === 'profile' && <ProfilePage />}
        </>
      )}
      <Navigation />
    </div>
  );
};

export default App;
