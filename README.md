
# Project Name - API Testing with Bruno CLI

## Overview

This repository is designed to test APIs using **Bruno CLI**. It contains API collections, test scripts, and automated checks for performance, status codes, and response structures. The goal is to ensure that the API behaves as expected and performs within acceptable limits (response time under 1 second).

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [GitHub Actions Integration](#github-actions-integration)
- [Bruno Collection](#bruno-collection)
- [Contributing](#contributing)

## Project Structure

```
/
├── src/
│   └── test/
│       └── bruno/                # Contains the Bruno collection for API testing
├── .github/
│   └── workflows/
│       └── ci.yml                # GitHub Actions workflow for running tests on push/pull
├── package.json                  # npm dependencies including Bruno CLI
├── README.md                     # This file, documentation for the repository
```

### Key Folders and Files

- **`src/test/bruno`**: Contains the Bruno collection for API testing. Each collection contains requests to different endpoints, along with assertions to validate response codes, response structure, and performance.
- **`package.json`**: Lists the npm dependencies, including **Bruno CLI** as a global dependency.
- **`.github/workflows/ci.yml`**: Defines the CI pipeline using GitHub Actions, which runs the Bruno collection automatically on each push or pull request.

## Getting Started

### Prerequisites

- Node.js (version 14.x or above)
- npm (version 6.x or above)
- Bruno CLI

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd your-repo
   ```

3. **Install npm dependencies**:

   ```bash
   npm install
   ```

   This will install the Bruno CLI and any other dependencies listed in the `package.json`.

## Running Tests

You can run the tests locally using Bruno CLI to verify the API responses and performance.

1. **Run Bruno collection**:

   ```bash
   bruno run src/test/bruno/bruno.json
   ```

   This will execute the collection of API requests and validate:
   - The status code is `200`.
   - The response structure (e.g., `photoUrls` is an array of strings, `tags` is an array of objects).
   - The response time is under 1 second.

2. **Test API performance**:

   The tests also ensure that the API response time is under 1 second, with automated assertions built into the collection.

## GitHub Actions Integration

This repository includes a GitHub Actions workflow (`ci.yml`) that automatically runs the API tests on every push or pull request to the `main` branch.

### How it works:

- **CI Workflow**: The `ci.yml` file in `.github/workflows/ci.yml` is configured to run Bruno CLI, install dependencies, and execute tests.
- The action checks for:
  - Status codes.
  - Response structure.
  - Response time (performance testing).

You can view the results of the automated tests in the **Actions** tab of the repository.

## Bruno Collection

The API tests are managed through **Bruno CLI**, which supports assertions and test scripts similar to tools like Postman. The collection (`bruno.json`) contains various requests for API endpoints and scripts to validate responses.

### Example Requests:

1. **Get Pet by ID**:
   - Method: `GET`
   - URL: `https://petstore.swagger.io/v2/pet/{petId}`
   - Asserts the status code is `200`, and response body contains the correct structure.

2. **Add a New Pet**:
   - Method: `POST`
   - URL: `https://petstore.swagger.io/v2/pet`
   - Validates the status and ensures the correct response format.

### Example Tests:

- **Status Code Check**:
  ```javascript
  test("Test Passed: Status code is 200", function() {
    expect(res.getStatus()).to.equal(200);
  });
  ```

- **Response Time Check**:
  ```javascript
  test("Test Passed: Response time is under 1 second", function() {
    const responseTime = res.getResponseTime();
    expect(responseTime).to.be.below(1000);
  });
  ```

- **Array of Strings Check** (`photoUrls`):
  ```javascript
  test("Test Passed: photoUrls is an array of strings", function() {
    expect(res.body.photoUrls).to.be.an('array');
    res.body.photoUrls.forEach(function(url) {
      expect(url).to.be.a('string');
    });
  });
  ```

## Contributing

Contributions are welcome! If you'd like to add more tests, improve the documentation, or enhance the workflow, feel free to open a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
