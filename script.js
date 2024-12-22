// Global variables
let courseData = [];
let studentName = '';
let university = '';

// Grade conversion table
const gradePoints = {
    'O': 4.0,
    'A+': 4.0,
    'A': 3.5,
    'B+': 3.0,
    'B': 2.5,
    'C': 2.0,
    'P': 2.0,
    'F': 0.0
};

// Navigation functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showManualEntry() {
    studentName = document.getElementById('name').value;
    university = document.getElementById('university').value;
    
    if (!studentName || !university) {
        alert('Please enter your name and university');
        return;
    }
    
    showPage('page2');
}

function showFileUpload() {
    studentName = document.getElementById('name').value;
    university = document.getElementById('university').value;
    
    if (!studentName || !university) {
        alert('Please enter your name and university');
        return;
    }
    
    showPage('page3');
}

function addCourse() {
    const coursesList = document.getElementById('courses-list');
    const newCourse = document.createElement('div');
    newCourse.className = 'course-entry';
    newCourse.innerHTML = `
        <input type="text" placeholder="Course Name" class="course-name">
        <input type="number" placeholder="Credits" min="1" max="6" class="credits">
        <select class="grade">
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="P">P</option>
            <option value="F">F</option>
        </select>
        <button class="remove-course" onclick="removeCourse(this)">Remove</button>
    `;
    coursesList.appendChild(newCourse);
}

function removeCourse(button) {
    button.parentElement.remove();
}

function calculateGPA() {
    courseData = [];
    let totalPoints = 0;
    let totalCredits = 0;

    document.querySelectorAll('.course-entry').forEach(course => {
        const name = course.querySelector('.course-name').value;
        const credits = parseFloat(course.querySelector('.credits').value);
        const grade = course.querySelector('.grade').value;
        const gradePoint = gradePoints[grade];

        if (name && credits && gradePoint !== undefined) {
            courseData.push({ name, credits, grade });
            totalPoints += credits * gradePoint;
            totalCredits += credits;
        }
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    displayResults(gpa);
}

function processCSV() {
    const file = document.getElementById('csvFile').files[0];
    if (!file) {
        alert('Please select a CSV file');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n');
        courseData = [];
        let totalPoints = 0;
        let totalCredits = 0;

        // Skip header row
        for (let i = 1; i < rows.length; i++) {
            const [name, credits, grade] = rows[i].split(',').map(item => item.trim());
            if (name && credits && grade) {
                const numCredits = parseFloat(credits);
                const gradePoint = gradePoints[grade];
                
                if (!isNaN(numCredits) && gradePoint !== undefined) {
                    courseData.push({ name, credits: numCredits, grade });
                    totalPoints += numCredits * gradePoint;
                    totalCredits += numCredits;
                }
            }
        }

        const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
        displayResults(gpa);
    };
    reader.readAsText(file);
}

function displayResults(gpa) {
    document.getElementById('gpaResult').textContent = gpa;
    
    // Create course table
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                ${courseData.map(course => `
                    <tr>
                        <td>${course.name}</td>
                        <td>${course.credits}</td>
                        <td>${course.grade}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('courseTable').innerHTML = tableHTML;
    
    showPage('page4');
}

function downloadCSV() {
    let csvContent = "Course Name,Credits,Grade\n";
    document.querySelectorAll('.course-entry').forEach(course => {
        const name = course.querySelector('.course-name').value;
        const credits = course.querySelector('.credits').value;
        const grade = course.querySelector('.grade').value;
        if (name && credits && grade) {
            csvContent += `${name},${credits},${grade}\n`;
        }
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'courses.csv');
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(16);
    doc.text('GPA Calculation Report', 105, 20, { align: 'center' });
    
    // Add student info
    doc.setFontSize(12);
    doc.text(`Name: ${studentName}`, 20, 40);
    doc.text(`University: ${university}`, 20, 50);
    doc.text(`Overall GPA: ${document.getElementById('gpaResult').textContent}`, 20, 60);

    // Add course table
    let yPosition = 80;
    doc.text('Course Details:', 20, yPosition);
    yPosition += 10;

    // Table headers
    doc.text('Course Name', 20, yPosition);
    doc.text('Credits', 120, yPosition);
    doc.text('Grade', 160, yPosition);
    yPosition += 10;

    // Table content
    courseData.forEach(course => {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
        doc.text(course.name.substring(0, 40), 20, yPosition); // Limit course name length
        doc.text(course.credits.toString(), 120, yPosition);
        doc.text(course.grade.toString(), 160, yPosition);
        yPosition += 10;
    });

    doc.save('gpa_report.pdf');
}

function resetCalculator() {
    courseData = [];
    showPage('page1');
    document.getElementById('name').value = '';
    document.getElementById('university').value = '';
    document.getElementById('courses-list').innerHTML = `
        <div class="course-entry">
            <input type="text" placeholder="Course Name" class="course-name">
            <input type="number" placeholder="Credits" min="1" max="6" class="credits">
            <select class="grade">
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="P">P</option>
                <option value="F">F</option>
            </select>
            <button class="remove-course" onclick="removeCourse(this)">Remove</button>
        </div>
    `;
    // Reset file input if it exists
    const fileInput = document.getElementById('csvFile');
    if (fileInput) {
        fileInput.value = '';
    }
    // Clear the results
    document.getElementById('gpaResult').textContent = '';
    document.getElementById('courseTable').innerHTML = '';
}