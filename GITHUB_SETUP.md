# Setting Up GitHub Repository

1. Install GitHub CLI (already done):
```bash
brew install gh
```

2. Authenticate with GitHub:
```bash
gh auth login
```
- Select "GitHub.com"
- Select "HTTPS"
- Select "Y" for authentication with your GitHub credentials
- Complete the authentication in your browser

3. Create new repository:
```bash
gh repo create unchained-academy --public --source=. --remote=origin
```

4. Push your code:
```bash
git push -u origin master
git push -u origin develop
git push -u origin feature/lesson-content
```

5. View in browser:
- Go to https://github.com/rzkowskii/unchained-academy
- Your code will be visible in the repository
- You can switch between branches using the branch dropdown

## Using GitHub for Version Control

### Viewing Changes
- Go to https://github.com/rzkowskii/unchained-academy/commits
- Click on any commit to see the changes
- Use the branch dropdown to view commits on different branches

### Creating Pull Requests
1. Go to https://github.com/rzkowskii/unchained-academy/pulls
2. Click "New Pull Request"
3. Select the branches to compare
4. Create the pull request

### Viewing Code
- Browse code at https://github.com/rzkowskii/unchained-academy
- Use the branch dropdown to switch between branches
- Click on files to view their contents
- View commit history and changes over time

### GitHub Pages (Optional)
To view the site live:
1. Go to repository Settings
2. Navigate to Pages
3. Select branch to deploy (usually main)
4. Save changes
5. Your site will be available at https://rzkowskii.github.io/unchained-academy/
