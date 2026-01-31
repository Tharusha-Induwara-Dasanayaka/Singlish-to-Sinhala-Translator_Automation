# Singlish-to-Sinhala-Translator_Automation

An automated tool for translating Singlish (Sinhala written with Latin script) into standard Sinhala script, with integrated testing and validation.

## ✨ Overview
This project aims to automate the conversion of Singlish—a common, informal way of writing Sinhala words using English letters (e.g., "ayubowan" for ආයුබෝවන්)—into correct and proper Unicode Sinhala script.

The system includes automated testing suites built with Playwright to ensure translation accuracy and reliability across different use cases.

## Features
- Automated Singlish to Sinhala conversion
- Support for common Singlish patterns and phonetic variations
- Comprehensive test coverage with Playwright
- Easy-to-use interface
- Detailed test reports and validation

## 🗂️ Project Structure
```
Singlish-to-Sinhala-Translator_Automation/
│
├── tests/                    # Automated test suites
├── playwright-report/        # HTML test execution reports  
├── test-results/            # Raw test results data
├── node_modules/            # Project dependencies (auto-generated)
│
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Exact dependency versions
├── playwright.config.js     # Playwright testing framework configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (usually comes with Node.js)

### Installation
1. Clone the repository
2. Install required dependencies: `npm install`
3. Configure Playwright as needed in `playwright.config.js`

## Usage
Provide input text in Singlish format and the translator will convert it to Sinhala script automatically.

## Running Tests
Execute the automated test suite using Playwright:
```bash
npx playwright test
```

This command will run all tests defined in the `tests/` directory and generate detailed reports in the `playwright-report/` directory.

## Test Summary
The project includes a comprehensive suite of automated tests built with Playwright to ensure the accuracy and reliability of the translation process. Each module is tested for various input scenarios, including edge cases and common usage patterns. Test results and detailed reports are generated in the `playwright-report/` directory.

## Author Details
**Name:** DASANAYAKA D R T I  
**ID:** IT23580312
