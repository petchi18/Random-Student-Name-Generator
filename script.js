// AIML-B and CSE-A student lists
const aimlStudents = [
    "NADHIYA SHREE S", "NAVEEN K", "NAVIN C", "NISHOK KUMAR R", "NITHYASREE A P", 
    "PRAGATHEESHWARAN M", "PRANEESH T", "PRASANT RAJIN C T", "PRAVEEN RAJ S", 
    "PRINCE BROONA J", "PRITHIV NACHIAPPAN S", "PURUSOUTHANAN B", "RAGUNATH M", 
    "RAKSHANA M", "RIDHA FAMEEN N", "RITHIKA S", "ROHITH G", "RUBARAJ M", "RUCHICA B", 
    "SAISHIVATHARSHINI PRAGALATHAN", "SAKTHI SABARISH R", "SAKTHIVEL R", "SANJAY G", 
    "SANJIT KUMAAR J", "SANJO THOMAS", "SANTHOSH KUMAR S", "SANTHOSH S", "SARVESH R", 
    "SATHISH IYAPPAN B", "SHAHUL HAMMED S", "SHALOM J", "SHANMIYA T P", "SHEIK ARSH S", 
    "SHWETHA P", "SHYAM GANESH S", "SIVA A", "SOWMIYA M", "SRI VISHAL C", "SRUTHI MOL R", 
    "SUBHAHARINI S L", "SUDHARSHAN R E", "SURESH KRISHNA S P", "SURESH S", "SWETHA S", 
    "THIRUMALAI R", "VAISHNAVI P", "VASANTHA DEEPAN J", "VIGNESH M", "VISHNU M S", "YAMINI S", 
    "YUHASHINI K"
];

const cseStudents = [
    "AATHI M", "ABINANDHANA K", "ABINESH R", "ABISHEK J", "ADARSHKRISHNA P M", 
    "AGARSHAN S", "AHMED ABDALLAH ALBASHIF FADALAH", "AKASTHIYA M", "AMARVARSHINI P", 
    "AMIRTHA VARSHNI S", "ANANDHAVINAYAGAM S", "ANGU SRI MUHIL K", "ANTONY RAHUL M", 
    "APURVA LAKSHMI K", "AROCKIA JERRINUSE P", "ARSHED HOSHAM ELHAG YOUSIF", "ARUL SELVAN S", 
    "ASHOK SUNDAR S", "ASHVITHA SHREE S", "ATCHAYA S", "BARANIDHARAN T S", "BAZEERAHAMED R", 
    "BHARANIDHARAN R", "BHARATH R P", "BHAVANA M", "DANABAL L", "DEEBIKA P", "DEEPAK KUMAR M", 
    "DEEPIKA R", "DEV THARUNEES R", "DEVANATHAN M", "DEVASENAN S S", "DEVI SHREE VIJAY THENU", 
    "DHAARANII S", "DHARANEESH U", "DHARSHINI S", "DINESHKUMAR S K", "DINESH R", 
    "GHAYATHREE R S", "GOKUL S", "HAJAMYDEEN J", "HARISGURURAJ P", "HARISH M", "HARSHINI S", 
    "HEMAVARSHINI K", "INBASRUTHI J", "INIYA R", "JAISHREE M", "JANANE J M", "JENIFER MERCY P", 
    "JEYANTHAN S", "JOEL JERRY DANISH P", "KAMALA V ADARSHINI", "KAMALESH KUMAR V"
];

// Variables to keep track of remaining students and current class
let remainingAimlStudents = [...aimlStudents];
let remainingCseStudents = [...cseStudents];
let currentClassStudents = null;

// Function to pick a random student from the list
function pickRandomStudent(students) {
    if (students.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * students.length);
    return students.splice(randomIndex, 1)[0]; // Remove the selected student from the list
}

// Update the UI with the picked student's name
function displayStudentName(studentName) {
    const studentNameDiv = document.getElementById('student-name');
    studentNameDiv.classList.remove('hidden');
    if (studentName) {
        studentNameDiv.textContent = studentName;
        studentNameDiv.style.color = "#4CAF50"; // Change color on student selection
    } else {
        studentNameDiv.textContent = "All students have been picked!";
        document.getElementById('pick-btn').disabled = true;
        document.getElementById('reset-btn').classList.remove('hidden');
    }
}

// Function to reset all names and restart the process
function resetStudents() {
    remainingAimlStudents = [...aimlStudents];
    remainingCseStudents = [...cseStudents];
    document.getElementById('aiml-btn').disabled = false;
    document.getElementById('cse-btn').disabled = false;
    document.getElementById('pick-btn').disabled = true;
    document.getElementById('pick-btn').classList.add('hidden');
    document.getElementById('student-name').classList.add('hidden');
    document.getElementById('reset-btn').classList.add('hidden');
    document.getElementById('student-name').textContent = '';
    currentClassStudents = null;
}

// Event listeners for the class buttons
document.getElementById('aiml-btn').addEventListener('click', () => {
    currentClassStudents = remainingAimlStudents;
    document.getElementById('aiml-btn').disabled = true;
    document.getElementById('cse-btn').disabled = true;
    document.getElementById('aiml-btn').classList.add('selected');
    document.getElementById('pick-btn').classList.remove('hidden');
    document.getElementById('pick-btn').disabled = false;
});

document.getElementById('cse-btn').addEventListener('click', () => {
    currentClassStudents = remainingCseStudents;
    document.getElementById('aiml-btn').disabled = true;
    document.getElementById('cse-btn').disabled = true;
    document.getElementById('cse-btn').classList.add('selected');
    document.getElementById('pick-btn').classList.remove('hidden');
    document.getElementById('pick-btn').disabled = false;
});

// Event listener for picking a student
document.getElementById('pick-btn').addEventListener('click', () => {
    const studentName = pickRandomStudent(currentClassStudents);
    displayStudentName(studentName);
});

// Event listener for resetting students
document.getElementById('reset-btn').addEventListener('click', resetStudents);
