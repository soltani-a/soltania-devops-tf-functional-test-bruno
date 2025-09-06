# 🚀 Bruno CLI API Testing – JsonPlaceholder Example

![CI](https://img.shields.io/github/actions/workflow/status/soltani-a/soltania-devops-tf-functional-test-bruno/main.yml?branch=main)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bruno CLI](https://img.shields.io/badge/Bruno%20CLI-API%20Testing-green)

## 📖 Overview

This repository demonstrates how to **automate API testing** using [Bruno CLI](https://www.usebruno.com/cli).  
It contains a **Bruno collection** to test the public [JsonPlaceholder API](https://jsonplaceholder.typicode.com),  
with assertions for **status codes**, **response structure**, and **performance (response time < 1s)**.  

It is fully **CI/CD ready**, with a GitHub Actions workflow to run tests automatically on every push or pull request.

---

## 📂 Project Structure

```
/
├── src/
│   └── test/
│       └── bruno/
│           └── JsonPlaceHolder_API/   # Bruno collection and environments
│               ├── 1_Initialization/
│               ├── 2_Functional_Tests_Execution/
│               └── 3_Clean/
├── package.json                       # npm dependencies and scripts
├── .github/workflows/main.yml         # CI/CD pipeline for automated tests
└── README.md
```

### Key Components

- **`JsonPlaceHolder_API`**: Collection of Bruno requests to test multiple endpoints.
- **`environments`**: Bruno environment configuration for different test contexts.
- **`package.json`**: Defines dependencies, including Bruno CLI and linting tools.
- **GitHub Actions Workflow**: Runs Bruno CLI tests on every commit.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14+  
- [npm](https://www.npmjs.com/) v6+  
- [Bruno CLI](https://www.usebruno.com/cli)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/soltania-devops-tf-functional-test-bruno.git

# Navigate to the project
cd soltania-devops-tf-functional-test-bruno

# Install dependencies
npm install
```

---

## ▶️ Running Tests Locally

Run all tests from the root directory:

```bash
npm test
```

This executes the Bruno collection against the **JsonPlaceholder API** and validates:
- Status codes (`200`)
- Response structure (arrays, objects, and data types)
- Response time under **1 second**

---

## 🔄 GitHub Actions Integration

The repository includes a GitHub Actions workflow to:
- Install dependencies
- Run Bruno CLI tests
- Fail the pipeline if any test fails

You can view execution results in the **Actions** tab of this repository.

---

## 📚 Example Tests

Here are some sample assertions from the Bruno collection:

```javascript
// Status code check
test("Status code is 200", function() {
  expect(res.getStatus()).to.equal(200);
});

// Response time check
test("Response time is under 1 second", function() {
  expect(res.getResponseTime()).to.be.below(1000);
});
```

---

## 🤝 Contributing

Contributions are welcome!  
To add tests or enhance workflows:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Why Bruno CLI?

- Open-source API testing tool  
- Lightweight CLI for automation  
- Ideal for CI/CD pipelines  
- Familiar Postman-like collections, but in version-controlled files
