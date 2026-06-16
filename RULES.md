# Project Rules & Guidelines

## 1. Code Standards
- Follow language-specific style guides (e.g., ESLint, Prettier, Rustfmt)
- Use meaningful variable/function names
- Keep functions small and single-purpose
- Write self-documenting code; comments for why, not what

## 2. Git Workflow
- Branch naming: `feature/`, `bugfix/`, `hotfix/`, `chore/`
- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, etc.)
- Squash commits before merging to main
- No direct pushes to `main` or `develop` — use PRs

## 3. Code Review
- At least one approval required before merge
- Check for security, performance, and correctness
- Ensure tests are included and passing

## 4. Testing
- Unit tests for all business logic
- Integration tests for API endpoints
- Maintain >= 80% code coverage
- Run tests before committing

## 5. Documentation
- Update docs alongside code changes
- Document public APIs and interfaces
- Keep README and setup instructions current

## 6. Communication
- Use the project tracker for task status
- Report blockers immediately
- Daily standup: what I did, what I'll do, blockers

## 7. Security
- No secrets/keys in code — use environment variables
- Validate all user input
- Follow OWASP guidelines

## 8. Release Process
- Semantic versioning (MAJOR.MINOR.PATCH)
- Maintain a changelog
- Tag releases in git
