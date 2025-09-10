// exam.js
// ==========================
// Full exam data (40 questions per subject)
// ==========================
const exams = {
  english: [
    { q: "Which word is a synonym for 'happy'?", options: ["A. Sad", "B. Joyful", "C. Angry", "D. Tired"], answer: 1 },
    { q: "Choose the correct spelling:", options: ["A. Recieve", "B. Receive", "C. Recive", "D. Receeve"], answer: 1 },
    { q: "What is the plural form of 'child'?", options: ["A. Childs", "B. Childes", "C. Children", "D. Childrens"], answer: 2 },
    { q: "Which sentence is in the past tense?", options: ["A. She walks to school.", "B. She will walk to school.", "C. She walked to school.", "D. She is walking to school."], answer: 2 },
    { q: "Which word is an adjective?", options: ["A. Quickly", "B. Beautiful", "C. Run", "D. Happiness"], answer: 1 },
    { q: "What is the antonym of 'difficult'?", options: ["A. Hard", "B. Simple", "C. Complicated", "D. Tough"], answer: 1 },
    { q: "Which sentence uses the correct form of 'there', 'their', or 'they're'?", options: ["A. Their going to the park.", "B. There going to the park.", "C. They're going to the park.", "D. Theyre going to the park."], answer: 2 },
    { q: "What is the comparative form of 'good'?", options: ["A. Gooder", "B. More good", "C. Better", "D. Best"], answer: 2 },
    { q: "Which word is a noun?", options: ["A. Run", "B. Quickly", "C. Apple", "D. Beautiful"], answer: 2 },
    { q: "Choose the correct punctuation: 'How are you ____'", options: ["A. ?", "B. .", "C. !", "D. ;"], answer: 0 },
    { q: "Select the sentence that is grammatically correct:", options: ["A. He don't like apples.", "B. He doesn't likes apples.", "C. He doesn't like apples.", "D. He don't likes apples."], answer: 2 },
    { q: "Which is a conjunction?", options: ["A. Quickly", "B. And", "C. Blue", "D. Run"], answer: 1 },
    { q: "Choose the opposite of 'ancient':", options: ["A. Old", "B. New", "C. Historic", "D. Antique"], answer: 1 },
    { q: "Which sentence is in passive voice?", options: ["A. The chef cooked the meal.", "B. The meal was cooked by the chef.", "C. The chef is cooking the meal.", "D. The chef will cook the meal."], answer: 1 },
    { q: "Pick the correct preposition: 'She is good ____ math.'", options: ["A. in", "B. at", "C. on", "D. for"], answer: 1 },
    { q: "Which is an interjection?", options: ["A. Wow!", "B. Quickly", "C. Because", "D. Table"], answer: 0 },
    { q: "Choose the correct homophone: 'Their/There/They're going to ____ house.'", options: ["A. Their", "B. There", "C. They're", "D. Thair"], answer: 0 },
    { q: "Which word is an adverb?", options: ["A. Slow", "B. Slowly", "C. Slowest", "D. Slowness"], answer: 1 },
    { q: "Select the best synonym for 'begin':", options: ["A. Start", "B. End", "C. Finish", "D. Stop"], answer: 0 },
    { q: "Which sentence shows correct subject-verb agreement?", options: ["A. The dogs barks loudly.", "B. The dog bark loudly.", "C. The dog barks loudly.", "D. The dogs barkes loudly."], answer: 2 },
    { q: "Pick the correct article: 'I saw ___ elephant at the zoo.'", options: ["A. a", "B. an", "C. the", "D. no article"], answer: 1 },
    { q: "Which is a compound word?", options: ["A. Notebook", "B. Note", "C. Book", "D. Not"], answer: 0 },
    { q: "Which sentence contains an error?", options: ["A. She has been to London.", "B. He have finished his work.", "C. They are playing now.", "D. I will call you."], answer: 1 },
    { q: "Choose the word that best completes: 'He is the ____ player on the team.'", options: ["A. goodest", "B. better", "C. best", "D. most good"], answer: 2 },
    { q: "Which is an infinitive verb form?", options: ["A. To run", "B. Running", "C. Ran", "D. Runs"], answer: 0 },
    { q: "Select the correct passive form: 'They will finish the work.'", options: ["A. The work will be finished by them.", "B. They will finished the work.", "C. The work will finished.", "D. The work will be finish."], answer: 0 },
    { q: "Which is a proper noun?", options: ["A. city", "B. london", "C. London", "D. country"], answer: 2 },
    { q: "Pick the correct tense: 'By next year I ____ my degree.'", options: ["A. will complete", "B. will have completed", "C. have completed", "D. completed"], answer: 1 },
    { q: "Which option is an antonym for 'scarce'?", options: ["A. Rare", "B. Abundant", "C. Little", "D. Sparse"], answer: 1 },
    { q: "Identify the direct object: 'She reads the book every night.'", options: ["A. She", "B. Reads", "C. The book", "D. Every night"], answer: 2 },
    { q: "Which word is a pronoun?", options: ["A. Mary", "B. He", "C. Table", "D. Quickly"], answer: 1 },
    { q: "Choose the sentence with correct punctuation:", options: ["A. Lets eat grandma.", "B. Let's eat, grandma.", "C. Lets eat, grandma.", "D. Let's eat grandma."], answer: 1 },
    { q: "Which word is a synonym for 'enormous'?", options: ["A. Tiny", "B. Huge", "C. Little", "D. Narrow"], answer: 1 },
    { q: "Pick the correct comparative: 'This exam is ____ than the last.'", options: ["A. difficult", "B. more difficult", "C. most difficult", "D. difficulter"], answer: 1 },
    { q: "Which sentence is a question tag example?", options: ["A. You are coming, aren't you?", "B. You are coming, are you?", "C. You are coming, don't you?", "D. You are coming, isn't you?"], answer: 0 },
    { q: "Choose the best meaning of the idiom 'break the ice':", options: ["A. Break glass", "B. Make people comfortable", "C. End friendship", "D. Freeze water"], answer: 1 }
  ],

  mathematics: [
    { q: "Simplify: 2x + 3x", options: ["A. 5x", "B. 6x", "C. x²", "D. 2x²"], answer: 0 },
    { q: "Find x: 2x - 4 = 10", options: ["A. 7", "B. 6", "C. 5", "D. 8"], answer: 1 },
    { q: "Square root of 144 is:", options: ["A. 10", "B. 11", "C. 12", "D. 13"], answer: 2 },
    { q: "What is 25% of 200?", options: ["A. 25", "B. 50", "C. 75", "D. 100"], answer: 1 },
    { q: "Convert 3/4 to decimal:", options: ["A. 0.25", "B. 0.5", "C. 0.75", "D. 1.25"], answer: 2 },
    { q: "If f(x)=2x+3, f(4) equals:", options: ["A. 8", "B. 11", "C. 10", "D. 9"], answer: 1 },
    { q: "Solve: 3(2x - 1) = 15", options: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: 3 },
    { q: "The area of a rectangle with sides 5 and 8 is:", options: ["A. 13", "B. 40", "C. 26", "D. 80"], answer: 1 },
    { q: "Find the median of: 3, 7, 9, 10, 12", options: ["A. 3", "B. 7", "C. 9", "D. 10"], answer: 2 },
    { q: "What is 7 × 8?", options: ["A. 48", "B. 54", "C. 56", "D. 64"], answer: 2 },
    { q: "If 5x = 20, x = ?", options: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: 2 },
    { q: "What is the perimeter of a square with side 6?", options: ["A. 12", "B. 18", "C. 24", "D. 36"], answer: 2 },
    { q: "Simplify: (x^2)(x^3) =", options: ["A. x^5", "B. x^6", "C. x^1", "D. x^0"], answer: 0 },
    { q: "What is the value of π (approx)?", options: ["A. 2.14", "B. 3.14", "C. 4.14", "D. 1.41"], answer: 1 },
    { q: "If angle A = 90°, triangle is:", options: ["A. Acute", "B. Right", "C. Obtuse", "D. Equilateral"], answer: 1 },
    { q: "Solve for y: y/3 = 7", options: ["A. 21", "B. 10", "C. 3", "D. 14"], answer: 0 },
    { q: "Which is a prime number?", options: ["A. 9", "B. 15", "C. 17", "D. 21"], answer: 2 },
    { q: "If probability of event is 1/4, odds are:", options: ["A. 1:4", "B. 1:3", "C. 3:1", "D. 4:1"], answer: 1 },
    { q: "What is the LCM of 6 and 8?", options: ["A. 12", "B. 24", "C. 48", "D. 14"], answer: 1 },
    { q: "What is 10^3 ?", options: ["A. 100", "B. 1000", "C. 10", "D. 10000"], answer: 1 },
    { q: "Solve: (4+6) ÷ 2", options: ["A. 3", "B. 4", "C. 5", "D. 2"], answer: 2 },
    { q: "If the ratio is 2:3 and total is 10, smaller part is:", options: ["A. 4", "B. 2", "C. 6", "D. 3"], answer: 0 },
    { q: "Area of triangle (base 8, height 5) is:", options: ["A. 20", "B. 40", "C. 30", "D. 10"], answer: 0 },
    { q: "Which is a factor of 36?", options: ["A. 5", "B. 6", "C. 7", "D. 8"], answer: 1 },
    { q: "Convert 45° to radians (approx):", options: ["A. π/2", "B. π/6", "C. π/4", "D. π/3"], answer: 2 },
    { q: "What is the next number in sequence: 2, 4, 8, 16, ?", options: ["A. 18", "B. 32", "C. 24", "D. 20"], answer: 1 },
    { q: "If x = 3 and y = 4, what is x^2 + y^2 ?", options: ["A. 9", "B. 16", "C. 25", "D. 49"], answer: 2 },
    { q: "What is the decimal of 1/5?", options: ["A. 0.2", "B. 0.25", "C. 0.5", "D. 0.75"], answer: 0 },
    { q: "Solve: 6x = 54, x = ?", options: ["A. 7", "B. 8", "C. 9", "D. 10"], answer: 2 },
    { q: "What is the mean of 2, 4, 6, 8, 10?", options: ["A. 5", "B. 6", "C. 7", "D. 8"], answer: 0 },
    { q: "Which is an even prime number?", options: ["A. 1", "B. 2", "C. 3", "D. 5"], answer: 1 },
    { q: "What is 15% of 200?", options: ["A. 20", "B. 25", "C. 30", "D. 35"], answer: 2 },
    { q: "If a = 2 and b = 3, (a+b)^2 = ?", options: ["A. 10", "B. 25", "C. 12", "D. 5"], answer: 0 },
    { q: "Which shape has 4 equal sides and 4 right angles?", options: ["A. Rectangle", "B. Square", "C. Parallelogram", "D. Rhombus"], answer: 1 },
    { q: "Evaluate: 0 × 12345 =", options: ["A. 0", "B. 1", "C. 12345", "D. undefined"], answer: 0 }
  ],

  physics: [
    { q: "What is the SI unit of Force?", options: ["A. Joule", "B. Newton", "C. Pascal", "D. Watt"], answer: 1 },
    { q: "Light travels fastest in which medium?", options: ["A. Water", "B. Glass", "C. Air", "D. Diamond"], answer: 2 },
    { q: "Which quantity is a vector?", options: ["A. Speed", "B. Mass", "C. Velocity", "D. Distance"], answer: 2 },
    { q: "Energy due to motion is called:", options: ["A. Potential", "B. Kinetic", "C. Thermal", "D. Chemical"], answer: 1 },
    { q: "Acceleration due to gravity on Earth is approximately:", options: ["A. 9.8 m/s²", "B. 8.9 m/s²", "C. 10.8 m/s²", "D. 9.0 m/s²"], answer: 0 },
    { q: "Electric current is measured in:", options: ["A. Volts", "B. Amperes", "C. Ohms", "D. Watts"], answer: 1 },
    { q: "The unit of resistance is:", options: ["A. Ohm", "B. Ampere", "C. Volt", "D. Coulomb"], answer: 0 },
    { q: "Sound travels fastest in:", options: ["A. Air", "B. Water", "C. Vacuum", "D. Steel"], answer: 3 },
    { q: "Which law states 'for every action there is an equal and opposite reaction'?", options: ["A. Newton's 1st", "B. Newton's 2nd", "C. Newton's 3rd", "D. Law of Gravitation"], answer: 2 },
    { q: "Unit of frequency is:", options: ["A. Hz", "B. m", "C. s", "D. N"], answer: 0 },
    { q: "A concave mirror can produce:", options: ["A. Only virtual image", "B. Only real image", "C. Real or virtual image", "D. No image"], answer: 2 },
    { q: "Which phenomenon explains rainbow formation?", options: ["A. Reflection", "B. Refraction & dispersion", "C. Diffraction", "D. Interference"], answer: 1 },
    { q: "Which particle is negatively charged?", options: ["A. Proton", "B. Neutron", "C. Electron", "D. Photon"], answer: 2 },
    { q: "The slope of a distance-time graph gives:", options: ["A. Acceleration", "B. Speed", "C. Force", "D. Velocity"], answer: 1 },
    { q: "Work is measured in:", options: ["A. Joule", "B. Watt", "C. Newton", "D. Pascal"], answer: 0 },
    { q: "Which is an example of non-contact force?", options: ["A. Friction", "B. Tension", "C. Gravity", "D. Normal"], answer: 2 },
    { q: "Power is defined as:", options: ["A. Work × Time", "B. Work / Time", "C. Force × Distance", "D. Energy × Time"], answer: 1 },
    { q: "Ohm's law: V = ?", options: ["A. IR", "B. I/R", "C. I+R", "D. I-R"], answer: 0 },
    { q: "Which wave has highest frequency?", options: ["A. Radio", "B. Microwave", "C. Ultraviolet", "D. Gamma rays"], answer: 3 },
    { q: "What happens to resistance when temperature increases (for most metals)?", options: ["A. Increases", "B. Decreases", "C. Stays same", "D. Fluctuates"], answer: 0 },
    { q: "What is the momentum of a 2 kg mass moving at 3 m/s?", options: ["A. 5 kg·m/s", "B. 6 kg·m/s", "C. 1.5 kg·m/s", "D. 9 kg·m/s"], answer: 1 },
    { q: "Which instrument measures electric current?", options: ["A. Voltmeter", "B. Ammeter", "C. Ohmmeter", "D. Galvanometer"], answer: 1 },
    { q: "If velocity is constant, acceleration is:", options: ["A. Positive", "B. Negative", "C. Zero", "D. Infinite"], answer: 2 },
    { q: "A lens that converges light is called:", options: ["A. Concave", "B. Convex", "C. Cylindrical", "D. Plane"], answer: 1 },
    { q: "Which process produces heat by chemical reaction?", options: ["A. Endothermic", "B. Exothermic", "C. Isothermal", "D. Adiabatic"], answer: 1 },
    { q: "A freely falling object has:", options: ["A. Constant speed", "B. Increasing speed", "C. Decreasing speed", "D. Zero speed"], answer: 1 },
    { q: "Reflection of light obeys:", options: ["A. Angle of incidence = angle of reflection", "B. Angle of incidence > angle of reflection", "C. Angle of incidence < angle of reflection", "D. No relation"], answer: 0 },
    { q: "Which unit measures magnetic field strength?", options: ["A. Tesla", "B. Henry", "C. Weber", "D. Coulomb"], answer: 0 },
    { q: "Which is a scalar quantity?", options: ["A. Force", "B. Displacement", "C. Temperature", "D. Velocity"], answer: 2 },
    { q: "Relative motion problems often ignore:", options: ["A. Frames of reference", "B. Air resistance", "C. Acceleration", "D. Time"], answer: 1 },
    { q: "If mass doubles and velocity halves, momentum becomes:", options: ["A. Same", "B. Double", "C. Half", "D. Quarter"], answer: 0 },
    { q: "Which phenomenon is used in ultrasound imaging?", options: ["A. Reflection of sound", "B. Diffraction of light", "C. Refraction of X-rays", "D. Polarization"], answer: 0 },
    { q: "Heat transfer by fluid motion is called:", options: ["A. Conduction", "B. Convection", "C. Radiation", "D. Conduction & Convection"], answer: 1 },
    { q: "Which is required for current to flow?", options: ["A. Potential difference", "B. Insulation", "C. No conductor", "D. Vacuum"], answer: 0 },
    { q: "Sound cannot travel in:", options: ["A. Air", "B. Water", "C. Solids", "D. Vacuum"], answer: 3 },
    { q: "Which unit is used for energy?", options: ["A. Newton", "B. Joule", "C. Meter", "D. Ampere"], answer: 1 }
  ],

  chemistry: [
    { q: "What is the chemical symbol for Sodium?", options: ["A. Na", "B. So", "C. Sn", "D. S"], answer: 0 },
    { q: "Which gas is used in the manufacture of ammonia (Haber process)?", options: ["A. Oxygen", "B. Nitrogen", "C. Hydrogen", "D. Carbon dioxide"], answer: 2 },
    { q: "pH of a neutral solution is:", options: ["A. 0", "B. 7", "C. 14", "D. 1"], answer: 1 },
    { q: "Which is a noble gas?", options: ["A. Neon", "B. Nitrogen", "C. Oxygen", "D. Chlorine"], answer: 0 },
    { q: "Rusting is an example of:", options: ["A. Reduction", "B. Oxidation", "C. Neutralization", "D. Polymerization"], answer: 1 },
    { q: "Which element has atomic number 1?", options: ["A. Helium", "B. Hydrogen", "C. Oxygen", "D. Carbon"], answer: 1 },
    { q: "Which bond involves electron sharing?", options: ["A. Ionic", "B. Covalent", "C. Metallic", "D. Hydrogen"], answer: 1 },
    { q: "Which is an acid?", options: ["A. NaOH", "B. HCl", "C. NaCl", "D. KCl"], answer: 1 },
    { q: "The formula for water is:", options: ["A. H2O", "B. CO2", "C. O2", "D. H2"], answer: 0 },
    { q: "Which particle has no charge?", options: ["A. Proton", "B. Electron", "C. Neutron", "D. Ion"], answer: 2 },
    { q: "Which process separates solids from liquids?", options: ["A. Distillation", "B. Filtration", "C. Evaporation", "D. Crystallization"], answer: 1 },
    { q: "Which element is most reactive in alkali metals?", options: ["A. Lithium", "B. Sodium", "C. Potassium", "D. Francium"], answer: 3 },
    { q: "Which gas is evolved when zinc reacts with HCl?", options: ["A. Oxygen", "B. Hydrogen", "C. Carbon dioxide", "D. Nitrogen"], answer: 1 },
    { q: "Which is an organic compound?", options: ["A. NaCl", "B. CH4", "C. H2O", "D. CO2"], answer: 1 },
    { q: "Which element forms an ionic bond with chlorine (Cl)?", options: ["A. Neon", "B. Sodium", "C. Oxygen", "D. Carbon"], answer: 1 },
    { q: "What is molarity a measure of?", options: ["A. Mass", "B. Concentration", "C. Volume", "D. Pressure"], answer: 1 },
    { q: "Which is a reducing agent?", options: ["A. O2", "B. H2", "C. Cl2", "D. F2"], answer: 1 },
    { q: "Which of the following is used to separate liquid mixtures by boiling point?", options: ["A. Chromatography", "B. Filtration", "C. Distillation", "D. Sieving"], answer: 2 },
    { q: "Which ion determines acidity in water?", options: ["A. OH−", "B. H+", "C. Na+", "D. Cl−"], answer: 1 },
    { q: "Which substance is amphoteric?", options: ["A. NaOH", "B. HCl", "C. Al(OH)3", "D. KCl"], answer: 2 },
    { q: "Which is exothermic?", options: ["A. Evaporation", "B. Melting", "C. Combustion", "D. Sublimation"], answer: 2 },
    { q: "Avogadro's number is approximately:", options: ["A. 6.02×10^23", "B. 3.02×10^23", "C. 9.02×10^23", "D. 1.02×10^23"], answer: 0 },
    { q: "Which is an isotope of carbon?", options: ["A. C-12", "B. CO2", "C. CH4", "D. C2H6"], answer: 0 },
    { q: "Which gas is responsible for greenhouse effect?", options: ["A. Nitrogen", "B. Oxygen", "C. Carbon dioxide", "D. Argon"], answer: 2 },
    { q: "Which reagent turns blue litmus red?", options: ["A. Base", "B. Acid", "C. Salt", "D. Neutral"], answer: 1 },
    { q: "Which element is a halogen?", options: ["A. Sodium", "B. Chlorine", "C. Potassium", "D. Calcium"], answer: 1 },
    { q: "Which compound is a carbohydrate?", options: ["A. Glucose", "B. Methane", "C. Benzene", "D. Ethanol"], answer: 0 },
    { q: "Which process gives oxygen in plants?", options: ["A. Respiration", "B. Photosynthesis", "C. Fermentation", "D. Combustion"], answer: 1 },
    { q: "pH < 7 indicates:", options: ["A. Neutral", "B. Acidic", "C. Basic", "D. Alkaline"], answer: 1 },
    { q: "Which metal is liquid at room temperature?", options: ["A. Iron", "B. Mercury", "C. Aluminum", "D. Sodium"], answer: 1 },
    { q: "Which is a polymer?", options: ["A. Polyethylene", "B. Water", "C. Ethanol", "D. Salt"], answer: 0 },
    { q: "Which type of bond holds the oxygen atoms in O2?", options: ["A. Ionic", "B. Covalent", "C. Metallic", "D. Hydrogen"], answer: 1 },
    { q: "Which acid is in vinegar?", options: ["A. Hydrochloric", "B. Sulfuric", "C. Acetic", "D. Nitric"], answer: 2 },
    { q: "Which test indicates presence of starch?", options: ["A. Benedict's", "B. Iodine (iodide)", "C. Litmus", "D. Biuret"], answer: 1 },
    { q: "Which is produced in fermentation?", options: ["A. Oxygen", "B. Ethanol", "C. Sodium", "D. Carbon"], answer: 1 },
    { q: "Which compound has the formula NaCl?", options: ["A. Sodium chloride", "B. Sodium carbonate", "C. Hydrochloric acid", "D. Sodium hydroxide"], answer: 0 },
    { q: "Which gas is most abundant in the atmosphere?", options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Argon"], answer: 1 }
  ]
};

// ==========================
// Configuration
// ==========================
const subjectList = {
  english: { label: "English", durationMinutes: 30 },
  mathematics: { label: "Mathematics", durationMinutes: 30 },
  physics: { label: "Physics", durationMinutes: 30 },
  chemistry: { label: "Chemistry", durationMinutes: 30 }
};

// ==========================
// State variables
// ==========================
let selectedSubject = 'english';
let current = 0;
let answers = JSON.parse(localStorage.getItem('examAnswers')) || {}; // structure: { subject: { qIndex: chosenIndex, ... }, ... }
let timerInterval = null;
let timeLeft = 0; // in seconds

// ==========================
// DOM references (adjust IDs in your HTML accordingly)
// ==========================
const subjectSelect = document.getElementById('subjectSelect'); // <select id="subjectSelect">
const examDiv = document.getElementById('exam');               // <div id="exam">
const timerDiv = document.getElementById('timer');             // <div id="timer">
const resultDiv = document.getElementById('result');           // <div id="result">
const prevBtn = document.getElementById('prevBtn');            // <button id="prevBtn">
const nextBtn = document.getElementById('nextBtn');            // <button id="nextBtn">
const submitBtn = document.getElementById('submitBtn');        // <button id="submitBtn">

// Safety checks if elements missing
if (!subjectSelect || !examDiv || !timerDiv || !resultDiv || !prevBtn || !nextBtn || !submitBtn) {
  console.error('One or more required DOM elements are missing. Ensure your HTML includes #subjectSelect, #exam, #timer, #result, #prevBtn, #nextBtn, #submitBtn.');
}

// ==========================
// Helpers
// ==========================
function saveAnswersToLocalStorage() {
  localStorage.setItem('examAnswers', JSON.stringify(answers));
}

function getQuestionsFor(subject) {
  const key = subject.toLowerCase();
  return exams[key] || [];
}

function ensureAnswersSubject(subject) {
  if (!answers[subject]) answers[subject] = {};
}

// ==========================
// Timer functions
// ==========================
function startTimerFor(subject) {
  clearInterval(timerInterval);
  const durationMinutes = (subjectList[subject] && subjectList[subject].durationMinutes) || 30;
  // If there is saved time left for this subject, use it; else initialize
  const savedTimes = JSON.parse(localStorage.getItem('examTimes') || '{}');
  if (savedTimes && savedTimes[subject] != null) {
    timeLeft = savedTimes[subject];
  } else {
    timeLeft = durationMinutes * 60;
  }

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Auto-submit
      submitExam(true);
      return;
    }
    updateTimerDisplay();
    // persist time left per subject
    const times = JSON.parse(localStorage.getItem('examTimes') || '{}');
    times[subject] = timeLeft;
    localStorage.setItem('examTimes', JSON.stringify(times));
  }, 1000);
}

function updateTimerDisplay() {
  const mm = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const ss = (timeLeft % 60).toString().padStart(2, '0');
  timerDiv.textContent = `Time Left: ${mm}:${ss};`
}

// ==========================
// Rendering
// ==========================
function renderQuestion(index) {
  const questions = getQuestionsFor(selectedSubject);
  if (!questions.length) {
    examDiv.innerHTML = '<p>No questions available for this subject.</p>';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    submitBtn.disabled = true;
    return;
  }

  const q = questions[index];
  ensureAnswersSubject(selectedSubject);
  const savedForThisSubject = answers[selectedSubject] || {};
  const savedChoice = savedForThisSubject[index];

  examDiv.innerHTML = `
    <div class="question">
      <h3>${subjectList[selectedSubject].label} — Question ${index + 1} of ${questions.length}</h3>
      <p>${q.q}</p>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label class="option-label">
            <input type="radio" name="option" value="${i}" ${savedChoice == i ? 'checked' : ''}>
            ${opt}
          </label>
        `).join('')}
      </div>
    </div>
  `;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === questions.length - 1;
  submitBtn.disabled = false;
  resultDiv.style.display = 'none';
}

function saveCurrentAnswer() {
  const sel = document.querySelector('input[name="option"]:checked');
  ensureAnswersSubject(selectedSubject);
  if (sel) {
    answers[selectedSubject][current] = parseInt(sel.value, 10);
    saveAnswersToLocalStorage();
  }
}

// ==========================
// Navigation handlers
// ==========================
prevBtn.addEventListener('click', () => {
  saveCurrentAnswer();
  if (current > 0) {
    current--;
    renderQuestion(current);
  }
});

nextBtn.addEventListener('click', () => {
  saveCurrentAnswer();
  const questions = getQuestionsFor(selectedSubject);
  if (current < questions.length - 1) {
    current++;
    renderQuestion(current);
  }
});

// ==========================
// Submit function
// ==========================
function submitExam(isAuto = false) {
  // Save current answer before scoring
  saveCurrentAnswer();

  const questions = getQuestionsFor(selectedSubject);
  const savedForThisSubject = answers[selectedSubject] || {};
  let score = 0;
  questions.forEach((q, i) => {
    if (savedForThisSubject[i] === q.answer) score++;
  });

  clearInterval(timerInterval);
  // remove saved time for this subject to avoid auto-start at zero next time
  const times = JSON.parse(localStorage.getItem('examTimes') || '{}');
  delete times[selectedSubject];
  localStorage.setItem('examTimes', JSON.stringify(times));

  resultDiv.style.display = 'block';
  if (isAuto) {
    resultDiv.textContent = `Time's up! You scored ${score} out of ${questions.length} in ${subjectList[selectedSubject].label}.; `
  } else {
    resultDiv.textContent = `You scored ${score} out of ${questions.length} in ${subjectList[selectedSubject].label}.;`
  }
}

submitBtn.addEventListener('click', () => submitExam(false));

// ==========================
// Subject change
// ==========================
subjectSelect.addEventListener('change', (e) => {
  const subj = e.target.value;
  if (!exams[subj]) return;
  // save current answers/time
  saveCurrentAnswer();
  const times = JSON.parse(localStorage.getItem('examTimes') || '{}');
  times[selectedSubject] = timeLeft; // persist time for old subject
  localStorage.setItem('examTimes', JSON.stringify(times));

  selectedSubject = subj;
  current = 0;
  // ensure answers object exists for new subject
  ensureAnswersSubject(selectedSubject);
  renderQuestion(current);
  startTimerFor(selectedSubject);
});

// ==========================
// Initialization
// ==========================
window.addEventListener('DOMContentLoaded', () => {
  // Populate subjectSelect (in case HTML didn't include options)
  if (subjectSelect && subjectSelect.children.length === 0) {
    Object.keys(subjectList).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = subjectList[key].label;
      subjectSelect.appendChild(opt);
    });
  }

  // restore selected subject from localStorage if present
  const savedSubject = localStorage.getItem('selectedSubject');
  if (savedSubject && exams[savedSubject]) {
    selectedSubject = savedSubject;
    if (subjectSelect) subjectSelect.value = savedSubject;
  } else {
    if (subjectSelect) subjectSelect.value = selectedSubject;
  }

  // restore answers if any already (answers variable already loaded)
  if (!answers[selectedSubject]) answers[selectedSubject] = {};

  renderQuestion(current);
  startTimerFor(selectedSubject);
});