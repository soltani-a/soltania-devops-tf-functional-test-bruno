# 🚀 soltania-devops-tf-github-prototype

## Overview

This repository demonstrates how to **automate the creation and management of GitHub repositories using Terraform**.  
It provides a reusable Terraform module and Bash automation script to quickly provision repositories with predefined configurations, making it ideal for DevOps workflows, Infrastructure as Code (IaC), and CI/CD pipelines.  

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [GitHub Token Setup](#github-token-setup)
- [Contributing](#contributing)
- [License](#license)

---

## 📂 Project Structure

```
/
├── src/
│   └── main/
│       ├── bash/
│       │   └── execute_terraform.sh     # Bash script to automate Terraform execution
│       └── terraform/                   # Terraform files for GitHub repo creation
│           ├── main.tf                  # Defines GitHub repository resources
│           ├── provider.tf              # GitHub provider configuration
│           ├── variable.tf              # Input variables for repository configuration
│           └── output.tf                # Outputs from Terraform execution
├── README.md                            # Documentation for this repository
```

---

## 🔥 Features

- **Infrastructure as Code**: Fully automate GitHub repository creation using Terraform.
- **Reusable Terraform module**: Configure multiple repositories from a single configuration file.
- **Bash automation script**:
  - Formats and initializes Terraform.
  - Generates a `.tfplan` file with a timestamp.
  - Applies the plan automatically.
  - Archives plan files in an `old/` directory.
- **Version Control**: Store all infrastructure changes as code.

---

## ⚙️ Prerequisites

- **Terraform** v0.15+ installed ([Download](https://www.terraform.io/downloads.html))
- **GitHub account**
- **GitHub Personal Access Token (PAT)** with appropriate permissions
- Bash shell (Linux, macOS, or Git Bash on Windows)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/soltania-devops-tf-github-prototype.git
cd soltania-devops-tf-github-prototype
```

### 2. Install Terraform

Follow the official [Terraform installation guide](https://developer.hashicorp.com/terraform/downloads).

---

## 🔑 GitHub Token Setup

1. Go to **GitHub → Settings → Developer settings → Personal Access Tokens → Tokens (classic)**.
2. Click **Generate new token**:
   - Select scopes:  
     - `repo` (to manage repositories)
     - `admin:repo_hook` (if needed)
3. Copy the token.

4. Export it as an environment variable:

```bash
export GITHUB_TOKEN="your_personal_access_token"
```

Windows (PowerShell):

```powershell
setx GITHUB_TOKEN "your_personal_access_token"
```

---

## Usage

Run the automation script from the **project root**:

```bash
bash src/main/bash/execute_terraform.sh
```

What it does:
1. Formats all Terraform files.
2. Initializes Terraform.
3. Plans infrastructure changes and creates a timestamped `.tfplan` file.
4. Applies the plan automatically.
5. Archives the `.tfplan` file.

---

## Example Terraform Configuration

```hcl
variable "repositories" {
  description = "Map of GitHub repositories to provision"
  type = map(object({
    description = string
    visibility  = string
  }))
  default = {
    "default_repo" = {
      description = "Default repository description"
      visibility  = "private"
    }
  }
}
```

Modify `variable.tf` to add your own repositories.

---

## Contributing

Contributions are welcome!  

1. Fork the repository.  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/my-feature
   ```  
3. Commit changes:  
   ```bash
   git commit -m 'Add new feature'
   ```  
4. Push the branch:  
   ```bash
   git push origin feature/my-feature
   ```  
5. Create a Pull Request.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
