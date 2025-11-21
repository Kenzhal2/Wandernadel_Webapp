# Git Workflow - Wandernadel Web App

## Branch Strategy

We use a **feature branch workflow** for all development.

### Main Branches

- `main` - Production-ready code, always stable
- `feature/*` - Feature development branches

### Branch Naming Convention

```
feature/descriptive-name
fix/issue-description
docs/documentation-update
test/test-improvement
chore/maintenance-task
```

## Development Workflow

### 1. Start New Work

```bash
# Ensure main is up to date
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Changes

```bash
# Make your changes
# Test thoroughly

# Stage changes
git add .

# Commit with Conventional Commits format
git commit -m "feat: add stamp collection animation"
```

**Note**: Pre-commit hooks will automatically:

- Run ESLint on changed files
- Format code with Prettier
- Block commit if linting fails

### 3. Commit Frequently

Make small, focused commits. Each commit should represent one logical change.

```bash
git commit -m "feat: implement geofence validation logic"
git commit -m "test: add unit tests for geofence calculation"
git commit -m "docs: update API documentation"
```

### 4. Push and Create PR

```bash
# Push feature branch
git push origin feature/your-feature-name

# Create Pull Request on GitHub
# Request code review
# Address feedback
```

### 5. Merge When Ready

After approval:

```bash
# Squash and merge via GitHub UI
# Delete feature branch
git branch -d feature/your-feature-name
```

## Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Types

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Code style changes (formatting, missing semi-colons, etc.)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Changes to build process or auxiliary tools
- `ci:` CI/CD configuration changes

### Examples

```bash
git commit -m "feat: add offline sync for collected stamps"
git commit -m "fix: resolve GPS accuracy in mountainous terrain"
git commit -m "docs: add deployment guide to README"
git commit -m "test: add E2E tests for passport view"
git commit -m "perf: optimize IndexedDB queries for faster sync"
git commit -m "refactor: extract stamp validation into service"
git commit -m "chore: update dependencies to latest versions"
```

### Commit with Scope (Optional)

```bash
git commit -m "feat(map): add custom illustrated markers"
git commit -m "fix(auth): resolve JWT expiration issue"
git commit -m "test(stamps): add unit tests for duplicate prevention"
```

## Code Review Guidelines

### As a Reviewer

- ✅ Check code follows project standards
- ✅ Verify tests are included
- ✅ Ensure documentation is updated
- ✅ Test the feature locally if possible
- ✅ Provide constructive feedback

### As an Author

- ✅ Self-review before requesting review
- ✅ Include tests and documentation
- ✅ Keep PRs focused and small
- ✅ Respond to feedback promptly
- ✅ Fix issues before merging

## Emergency Fixes

For critical production issues:

```bash
git checkout -b fix/critical-issue-name main
# Make minimal fix
git commit -m "fix: resolve critical GPS crash on iOS"
# Create PR, get quick review, merge ASAP
```

## Tips

- **Commit often**: Small, frequent commits are better than large ones
- **Test before committing**: Pre-commit hooks will check, but test manually too
- **Write clear commit messages**: Future you will thank you
- **Keep branches short-lived**: Merge within 1-3 days if possible
- **Rebase if needed**: `git rebase main` to update your branch

## Troubleshooting

### Pre-commit Hook Fails

```bash
# Fix linting errors
npm run lint:fix

# Format code
npm run format

# Try commit again
git commit -m "your message"
```

### Merge Conflicts

```bash
# Update your branch with latest main
git fetch origin
git rebase origin/main

# Resolve conflicts in your editor
# Stage resolved files
git add .
git rebase --continue
```

---

**Questions?** Check the [main README](../README.md) or ask the team!
