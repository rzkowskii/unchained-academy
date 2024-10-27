# Contributing to Unchained Academy

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Main development branch
- Feature branches - `feature/task-description`
- Bugfix branches - `bugfix/issue-description`

### Working on Tasks

1. Create a new branch from `develop`:
```bash
git checkout develop
git checkout -b feature/your-task-name
```

2. Make your changes and commit regularly with descriptive messages:
```bash
git add .
git commit -m "descriptive message about changes"
```

3. When task is complete, merge develop into your branch and resolve conflicts:
```bash
git checkout develop
git pull
git checkout feature/your-task-name
git merge develop
```

4. Push your branch and create a pull request:
```bash
git push origin feature/your-task-name
```

### Reverting Changes

To revert to a previous state:

1. View commit history:
```bash
git log --oneline
```

2. Revert to a specific commit:
```bash
git revert <commit-hash>
```

3. Or reset to a specific commit (use with caution):
```bash
git reset --hard <commit-hash>
```

### Task Branches

Each task should be developed in its own branch:

- Task 1: `feature/homepage-setup`
- Task 2: `feature/navigation-structure`
- Task 3: `feature/lesson-content`

This allows us to:
- Easily revert changes by task
- Work on multiple tasks simultaneously
- Review changes in isolation
- Maintain a clean commit history

### Commit Messages

Follow this format for commit messages:
```
type(scope): description

[optional body]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

Example:
```
feat(lessons): add module 1 lesson content

- Add lesson component structure
- Implement interactive elements
- Add styling for lesson content
