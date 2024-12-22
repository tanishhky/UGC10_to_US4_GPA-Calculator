# GPA Calculator

A simple and interactive web-based GPA Calculator that allows users to calculate their GPA either by entering course details manually or by uploading an existing CSV file containing course data.

## Features

- **Manual Course Entry**: Add courses, credits, and grades to calculate GPA.
- **CSV File Upload**: Upload a CSV file with course data to calculate GPA.
- **Dynamic Course Addition**: Add multiple courses dynamically and remove any course if needed.
- **GPA Calculation**: Calculates GPA based on entered courses and grades.
- **CSV Export**: Allows users to download the course data as a CSV file.
- **PDF Report Generation**: Generate a downloadable PDF report with GPA and course details.
- **Responsive Design**: Fully responsive for use on mobile and desktop devices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Time-Saving CSV Feature](#time-saving-csv-feature)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the GPA Calculator locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/gpa-calculator.git
    cd gpa-calculator
    ```

2. **Open the `index.html` file in your browser:**

    - Open the project folder and double-click on `index.html` to launch the application in your default browser.
    
    Alternatively, you can host the project on any local server or use an online code editor like GitHub Pages.

## Usage

### 1. Enter your details:

   - **Name**: Enter your full name.
   - **University**: Enter the name of your university.

### 2. Choose how to input course data:
   
   - **Manual Entry**: Click on the "Manual Entry" card and add your courses, credits, and grades.
   - **Upload CSV**: Click on the "Upload CSV" card and select a CSV file containing course data.

### 3. Add Courses (Manual Entry):

   - Click **Add Another Course** to add more courses.
   - For each course, you will need to provide:
     - **Course Name**: Name of the course (e.g., "Mathematics 101").
     - **Credits**: Enter the number of credits for the course (e.g., 3).
     - **Grade**: Choose your grade from a predefined list (e.g., "A", "B+" etc.).

### 4. Calculate GPA:

   - Once you've entered all courses, click **Calculate GPA** to compute your GPA.
   
   The GPA is calculated using the following grade point scale:
   
   | Grade | Points |
   |-------|--------|
   | O     | 4.0    |
   | A+    | 4.0    |
   | A     | 3.5    |
   | B+    | 3.0    |
   | B     | 2.5    |
   | C     | 2.0    |
   | P     | 2.0    |
   | F     | 0.0    |

### 5. View Results:

   - After calculating the GPA, a summary with your overall GPA and the detailed course data will appear on the results page.
   
   - You can also download the following:
     - **CSV**: Export your entered course data as a CSV file.
     - **PDF**: Download a PDF report containing your GPA and course details.

## Time-Saving CSV Feature

Once you’ve entered your course data and calculated your GPA, our website offers a **time-saving feature** by allowing you to **save your course data as a CSV file**. 

### Why is this useful?

- **Save Time for Future Calculations**: By exporting your data as CSV, you won’t have to enter the same information again in the future. Simply upload your saved CSV file next time to recalculate your GPA.
- **Effortless Backup**: Your course details and GPA calculations are safely stored in a CSV file, which you can refer to or modify at any time.
- **Easy Sharing**: You can share the CSV file with others or import it into other applications for further analysis.

### How does it work?

- After calculating your GPA, you can simply click on the **Download CSV** button to save your course data.
- Next time you need to calculate your GPA, you can upload this CSV file and your courses will automatically be loaded into the calculator, saving you from having to input the data again.

## Technologies Used

- **HTML**: Markup for the structure of the web pages.
- **CSS**: Styling for the application layout and responsiveness.
- **JavaScript**: Logic for GPA calculation, file handling (CSV), and dynamic content updates.
- **jsPDF**: Library to generate and download PDF reports.
- **FileReader API**: For handling file uploads and processing CSV files in the browser.

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests.

### Steps for contributing:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add feature xyz'`).
4. Push to your branch (`git push origin feature-xyz`).
5. Open a pull request to the `main` branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy GPA Calculation!**
