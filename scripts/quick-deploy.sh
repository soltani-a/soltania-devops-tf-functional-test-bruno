#!/bin/bash

# ==============================================================================
# SCRIPT: quick-deploy.sh
# DESCRIPTION: Automates the full deployment workflow:
#              1. Install Dependencies
#              2. Lint Code (Mandatory Quality Gate)
#              3. Run Unit Tests (Optional with --test flag)
#              4. Git Stage, Commit, and Push
#
# USAGE:
#   ./scripts/quick-deploy.sh "Commit message"         -> Standard deploy (Lint only)
#   ./scripts/quick-deploy.sh "Commit message" --test  -> Full deploy (Lint + Tests)
#   ./scripts/quick-deploy.sh -t                       -> Default message + Tests
# ==============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# --- Configuration & Argument Parsing ---
DEFAULT_MSG="chore: automated dependency update and deployment $(date +'%Y-%m-%d %H:%M:%S')"
COMMIT_MSG=""
RUN_TESTS=false

# Loop through all arguments to find flags and message
for arg in "$@"; do
    case $arg in
        -t|--test)
            RUN_TESTS=true
            ;;
        *)
            # If it's not a flag, assume it's the commit message
            # If multiple parts are unquoted, only the last one captures (user should quote message)
            if [ -z "$COMMIT_MSG" ]; then
                COMMIT_MSG="$arg"
            fi
            ;;
    esac
done

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting Deployment Sequence...${NC}"

# --- STEP 1: Dependencies ---
echo -e "${YELLOW}[1/5] 📦 Managing Dependencies...${NC}"
npm install
echo -e "${GREEN}✔ Dependencies up to date.${NC}"

# --- STEP 2: Quality Gate (Lint) ---
echo -e "${YELLOW}[2/5] 🧹 Running Linter (Static Analysis)...${NC}"
npm run lint
echo -e "${GREEN}✔ Code syntax is clean.${NC}"

# --- STEP 3: Quality Gate (Tests) - OPTIONAL ---
if [ "$RUN_TESTS" = true ]; then
    echo -e "${YELLOW}[3/5] 🧪 Running Unit Tests (Optional Flag Triggered)...${NC}"
    npm test
    echo -e "${GREEN}✔ All tests passed.${NC}"
else
    echo -e "${BLUE}[3/5] ⏭️  Skipping tests (Use --test to enable).${NC}"
fi

# --- STEP 4: Git Stage ---
echo -e "${YELLOW}[4/5] ➕ Staging changes...${NC}"
git add .

# --- STEP 5: Git Commit & Push ---
echo -e "${YELLOW}[5/5] 💾 Committing and Pushing...${NC}"

if [ -z "$COMMIT_MSG" ]; then
    echo -e "No message provided. Using default: ${DEFAULT_MSG}"
    git commit -m "$DEFAULT_MSG"
else
    git commit -m "$COMMIT_MSG"
fi

git push

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"