# 🚀 Automated API Testing Showcase – Bruno CLI

![CI](https://img.shields.io/github/actions/workflow/status/soltani-a/soltania-devops-tf-functional-test-bruno/main.yml?branch=main)
![Node Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)
![Bruno CLI](https://img.shields.io/badge/Bruno-API%20Automation-orange)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Overview

This repository demonstrates an **enterprise-grade API testing strategy** using [Bruno CLI](https://www.usebruno.com/cli).
It goes beyond basic status code checks by implementing **E2E scenarios** on the [JsonPlaceholder API](https://jsonplaceholder.typicode.com).

The project is designed as a **DevOps Portfolio Showcase**, highlighting best practices in:
* **Test Stability** (Self-healing tests)
* **Data Integrity** (Chaining & Dynamic Generation)
* **CI/CD Integration** (GitHub Actions with caching & reporting)

---

## 🔥 Technical Highlights

This project implements advanced testing patterns to handle the limitations of a Mock API while simulating real-world usage:

| Pattern | Description |
| :--- | :--- |
| **🛡️ Self-Healing Tests** | Every test script checks for required variables. If missing (e.g., test run in isolation), it intelligently falls back to default IDs to prevent crashes. |
| **🔗 Data Chaining** | Dynamic extraction of IDs (User, Post, Comment) from responses to fuel subsequent requests (`POST` -> `GET` -> `PATCH` -> `DELETE`). |
| **✨ Dynamic Content** | No hardcoded strings. Generates realistic data: **Malaysian addresses**, **Tech Blog titles**, and **Branded Emails** (`@soltani-a.ai`) at runtime. |
| **🧠 Smart Assertions** | Validates **Business Logic** (Filtering logic, Foreign Key integrity) and **Non-Regression** (ensuring `PATCH` doesn't erase existing fields). |
| **⚡ Performance SLA** | Enforces strict response time limits (< 500ms - 1s) on all endpoints. |

---

## 🧪 Test Scenarios

The collection simulates a full lifecycle for a Tech Company **"Soltani-A"**:

1.  **👥 User Lifecycle**:
    * **Create**: Generates a new employee profile (with dynamic Malaysian phone & address).
    * **Update (PUT)**: Simulates a relocation to Kuala Lumpur.
    * **Patch**: Promotes the user (adds a professional title) without data loss.
2.  **📝 Blog & Content**:
    * **Create Post**: Generates random "DevOps/Cloud" article titles.
    * **Workflow**: Simulates an "Approval Process" (Draft -> Approved -> Published).
3.  **💬 Support Workflow**:
    * **Comments**: Simulates a "Security Bot" review, then updates to "RESOLVED" by the Support Team.

---

## 🤖 CI/CD Architecture

The pipeline is optimized for speed and reliability, using a **Reusable Workflow** pattern.

```mermaid
graph LR
    A[Push to Main] --> B(GitHub Actions)
    B --> C{Setup Node.js}
    C --> D[Install Dependencies]
    D -- Cache Enabled --> E[npm ci]
    E --> F[Run Bruno Collection]
    F --> G[Generate JUnit Report]
    G --> H[Upload Artifacts]
    F -- Failure --> I[Block Merge]
````

-----

## 📂 Project Structure

```bash
/
├── src/
│   └── test/
│       └── bruno/
│           └── JsonPlaceHolder_API/
│               ├── environments/      # Environment config (URL, Paths)
│               ├── 1_Users/           # CRUD & Logic tests for Users
│               ├── 2_Posts/           # Blog post workflow
│               ├── 3_Comments/        # Comment moderation workflow
│               ├── 4_Albums/          # Documentation assets workflow
│               └── collection.bru     # Root configuration
├── .github/
│   └── workflows/
│       └── main.yml                   # Pipeline calling the shared template
├── package.json                       # Dependencies (@usebruno/cli)
└── README.md
```

-----

## 🚀 Getting Started

### Prerequisites

  - [Node.js](https://nodejs.org/) v20+
  - [Bruno CLI](https://www.usebruno.com/cli) (`npm install -g @usebruno/cli`)

### Installation

```bash
git clone [https://github.com/soltani-a/soltania-devops-tf-functional-test-bruno.git](https://github.com/soltani-a/soltania-devops-tf-functional-test-bruno.git)
cd soltania-devops-tf-functional-test-bruno
npm install
```

### ▶️ Running Tests

Run the full suite with the configured environment:

```bash
npm test
```

*This script executes `bru run` with the `JsonPlaceHolder_Environment` and generates a JUnit report.*

-----

## 📚 Example Code Snippet

**Dynamic Data & Self-Healing (Pre-Request Script):**

```javascript
// Self-Healing: Use existing ID or fallback to 1
let targetId = bru.getVar("userId") || 1;

// Dynamic Data Generation
const roles = ["DevOps Lead", "SRE", "Cloud Architect"];
const randomRole = roles[Math.floor(Math.random() * roles.length)];
bru.setVar("userRole", randomRole);
```

**Business Logic Assertion (Test Script):**

```javascript
test("Patch should preserve User ID", function() {
  // Non-regression testing
  expect(res.getBody().id).to.equal(parseInt(bru.getVar("userId")));
});

test("Email format is valid", function() {
  expect(res.getBody().email).to.match(/@soltani-a\.ai/);
});
```

-----

## 🤝 Contributing

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-test`)
3.  Commit your changes
4.  Push to the branch
5.  Open a Pull Request

-----

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

> **Why Bruno?**
> Unlike Postman, Bruno stores collections as plain text files directly in the filesystem. This makes it **Git-native**, enabling seamless collaboration, version control, and CI/CD integration without dealing with massive JSON blobs.