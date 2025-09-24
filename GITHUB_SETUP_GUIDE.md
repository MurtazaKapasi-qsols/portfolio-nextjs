# GitHub Setup & Code Review Guide

A complete step-by-step guide to set up your portfolio project on GitHub and use GitHub Copilot for code review through pull requests.

## 📋 Prerequisites

- GitHub account
- Git installed on your machine
- GitHub Copilot subscription (optional but recommended)
- Your portfolio project ready

## 🚀 Step 1: Create GitHub Repository

### Option A: Create Repository on GitHub Website

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - **Repository name**: `portfolio-app` (or your preferred name)
   - **Description**: "Modern portfolio website built with Next.js, TypeScript, and Contentful CMS"
   - **Visibility**: Choose Public or Private
   - **Initialize**: ❌ **DO NOT** check "Add a README file" (you already have one)
   - **Add .gitignore**: ❌ **DO NOT** check this (you'll add it manually)
   - **Choose a license**: Optional
5. **Click "Create repository"**

### Option B: Create Repository via GitHub CLI (if you have it installed)

```bash
gh repo create portfolio-app --public --description "Modern portfolio website built with Next.js, TypeScript, and Contentful CMS"
```

## 🔧 Step 2: Initialize Local Git Repository

1. **Open terminal/command prompt** in your project directory
2. **Initialize Git repository:**
   ```bash
   git init
   ```

3. **Create .gitignore file:**
   ```bash
   # Create .gitignore file
   echo "# Dependencies
   node_modules/
   .pnp
   .pnp.js
   
   # Testing
   /coverage
   
   # Next.js
   .next/
   out/
   
   # Production
   /build
   
   # Misc
   .DS_Store
   *.pem
   
   # Debug
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
   
   # Local env files
   .env*.local
   .env
   
   # Vercel
   .vercel
   
   # TypeScript
   *.tsbuildinfo
   next-env.d.ts" > .gitignore
   ```

4. **Add all files to staging:**
   ```bash
   git add .
   ```

5. **Make initial commit:**
   ```bash
   git commit -m "Initial commit: Portfolio app with Next.js, TypeScript, and Contentful integration"
   ```

## 🔗 Step 3: Connect Local Repository to GitHub

1. **Add remote origin:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-app.git
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

2. **Set main branch:**
   ```bash
   git branch -M main
   ```

3. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

## 🌿 Step 4: Set Up Branch Strategy for Code Review

### Create Development Branch

1. **Create and switch to development branch:**
   ```bash
   git checkout -b development
   ```

2. **Push development branch:**
   ```bash
   git push -u origin development
   ```

### Create Feature Branch for Code Review

1. **Create feature branch:**
   ```bash
   git checkout -b feature/code-review-setup
   ```

2. **Make some changes** (you can add comments, fix formatting, etc.):
   ```bash
   # Example: Add a comment to a file
   echo "// Code review test comment" >> src/app/page.tsx
   ```

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Add code review test changes"
   ```

4. **Push feature branch:**
   ```bash
   git push -u origin feature/code-review-setup
   ```

## 🔍 Step 5: Create Pull Request for Code Review

### Method 1: Via GitHub Website

1. **Go to your repository** on GitHub.com
2. **You'll see a banner** saying "feature/code-review-setup had recent pushes" with a "Compare & pull request" button
3. **Click "Compare & pull request"**
4. **Fill in PR details:**
   - **Title**: "Code Review Setup and Initial Review"
   - **Description**: 
     ```markdown
     ## 📝 Description
     This PR sets up the code review process and includes initial code review.
     
     ## 🔍 Changes Made
     - Added code review test changes
     - Set up branch structure for future reviews
     
     ## 🧪 Testing
     - [ ] Code compiles without errors
     - [ ] No TypeScript errors
     - [ ] All components render correctly
     
     ## 📋 Review Checklist
     - [ ] Code follows project conventions
     - [ ] No console.log statements in production code
     - [ ] Proper error handling implemented
     - [ ] Components are properly typed
     - [ ] No unused imports or variables
     ```
5. **Set reviewers** (if you have collaborators)
6. **Add labels** (optional): `code-review`, `setup`
7. **Click "Create pull request"**

### Method 2: Via GitHub CLI

```bash
gh pr create --title "Code Review Setup and Initial Review" --body "## 📝 Description
This PR sets up the code review process and includes initial code review.

## 🔍 Changes Made
- Added code review test changes
- Set up branch structure for future reviews

## 🧪 Testing
- [ ] Code compiles without errors
- [ ] No TypeScript errors
- [ ] All components render correctly

## 📋 Review Checklist
- [ ] Code follows project conventions
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented
- [ ] Components are properly typed
- [ ] No unused imports or variables"
```

## 🤖 Step 6: Enable GitHub Copilot for Code Review

### Enable Copilot in Repository

1. **Go to your repository settings**
2. **Navigate to "Actions" → "General"**
3. **Scroll down to "Workflow permissions"**
4. **Select "Read and write permissions"**
5. **Check "Allow GitHub Actions to create and approve pull requests"**

### Install GitHub Copilot (if not already installed)

1. **Go to GitHub.com → Settings → Copilot**
2. **Subscribe to GitHub Copilot** (if not already subscribed)
3. **Enable Copilot for your repository**

## 🔄 Step 7: Set Up Automated Code Review Workflow

### Create GitHub Actions Workflow

1. **Create workflow directory:**
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create code review workflow:**
   ```bash
   cat > .github/workflows/code-review.yml << 'EOF'
   name: Code Review with Copilot
   
   on:
     pull_request:
       branches: [ main, development ]
     push:
       branches: [ main, development ]
   
   jobs:
     code-review:
       runs-on: ubuntu-latest
       
       steps:
         - name: Checkout code
           uses: actions/checkout@v4
           
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Run linting
           run: npm run lint
           
         - name: Type check
           run: npx tsc --noEmit
           
         - name: Build check
           run: npm run build
           
         - name: Comment PR with results
           uses: actions/github-script@v7
           with:
             script: |
               const { data: comments } = await github.rest.issues.listComments({
                 owner: context.repo.owner,
                 repo: context.repo.repo,
                 issue_number: context.issue.number,
               });
               
               const botComment = comments.find(comment => 
                 comment.user.type === 'Bot' && 
                 comment.body.includes('## 🤖 Automated Code Review')
               );
               
               const reviewBody = `## 🤖 Automated Code Review
               
               ### ✅ Build Status
               - **Linting**: ✅ Passed
               - **Type Check**: ✅ Passed  
               - **Build**: ✅ Passed
               
               ### 📋 Review Summary
               Your code has passed all automated checks! 
               
               ### 🔍 Next Steps
               - Manual review recommended for business logic
               - Consider adding unit tests for new features
               - Verify responsive design on different screen sizes
               
               ---
               *This is an automated review. Please also request human review.*`;
               
               if (botComment) {
                 await github.rest.issues.updateComment({
                   owner: context.repo.owner,
                   repo: context.repo.repo,
                   comment_id: botComment.id,
                   body: reviewBody
                 });
               } else {
                 await github.rest.issues.createComment({
                   owner: context.repo.owner,
                   repo: context.repo.repo,
                   issue_number: context.issue.number,
                   body: reviewBody
                 });
               }
   EOF
   ```

3. **Commit and push the workflow:**
   ```bash
   git add .github/workflows/code-review.yml
   git commit -m "Add automated code review workflow"
   git push
   ```

## 🔄 Step 8: Create Regular Code Review Process

### Daily Development Workflow

1. **Start new feature:**
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   git push origin feature/your-feature-name
   ```

3. **Create PR for review:**
   ```bash
   gh pr create --title "feat: your feature title" --body "## Description
   Brief description of changes
   
   ## Changes
   - [ ] List your changes
   - [ ] Add checkboxes for testing
   
   ## Review Checklist
   - [ ] Code follows conventions
   - [ ] No TypeScript errors
   - [ ] Responsive design tested
   - [ ] Performance optimized"
   ```

4. **Review the automated feedback** from GitHub Actions
5. **Address any issues** found in the automated review
6. **Request human review** if needed
7. **Merge after approval**

## 🛠️ Step 9: Set Up Branch Protection Rules

1. **Go to repository Settings → Branches**
2. **Add rule for main branch:**
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale PR approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Restrict pushes that create files

## 📱 Step 10: Set Up GitHub Mobile for Quick Reviews

1. **Download GitHub Mobile app**
2. **Sign in with your GitHub account**
3. **Enable notifications for:**
   - Pull request reviews
   - Comments on your PRs
   - Status checks

## 🔍 Step 11: Advanced Code Review Features

### Set Up Code Owners

1. **Create CODEOWNERS file:**
   ```bash
   echo "# Global owners
   * @YOUR_USERNAME
   
   # Frontend components
   /src/components/ @YOUR_USERNAME
   
   # API and backend
   /src/lib/ @YOUR_USERNAME
   
   # Documentation
   *.md @YOUR_USERNAME" > CODEOWNERS
   ```

2. **Commit and push:**
   ```bash
   git add CODEOWNERS
   git commit -m "Add CODEOWNERS file"
   git push
   ```

### Set Up Review Templates

1. **Create PR template:**
   ```bash
   mkdir -p .github/pull_request_template
   cat > .github/pull_request_template.md << 'EOF'
   ## 📝 Description
   Brief description of changes made.
   
   ## 🔍 Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## 🧪 Testing
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed
   - [ ] Cross-browser testing done
   
   ## 📋 Review Checklist
   - [ ] Code follows project conventions
   - [ ] Self-review completed
   - [ ] Comments added for complex logic
   - [ ] No console.log statements
   - [ ] Error handling implemented
   - [ ] Performance considerations addressed
   
   ## 📸 Screenshots (if applicable)
   Add screenshots for UI changes.
   
   ## 🔗 Related Issues
   Closes #issue_number
   EOF
   ```

## 🎯 Step 12: Best Practices for Code Review

### For Authors (You)

1. **Write clear commit messages:**
   ```bash
   # Good examples
   git commit -m "feat: add portfolio grid component"
   git commit -m "fix: resolve TypeScript error in useTestimonials"
   git commit -m "docs: update README with setup instructions"
   ```

2. **Keep PRs focused and small**
3. **Write descriptive PR titles and descriptions**
4. **Test your changes thoroughly**
5. **Address review feedback promptly**

### For Reviewers (Future collaborators)

1. **Review code for:**
   - Logic correctness
   - Performance implications
   - Security concerns
   - Code maintainability
   - Adherence to project conventions

2. **Provide constructive feedback**
3. **Approve when satisfied**
4. **Request changes when needed**

## 🚀 Step 13: Deploy and Monitor

### Set Up Deployment

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy automatically

2. **Set up branch-based deployments:**
   - `main` → Production
   - `development` → Staging
   - `feature/*` → Preview

### Monitor Your Repository

1. **Set up repository insights**
2. **Monitor pull request metrics**
3. **Track code review response times**
4. **Use GitHub's project management features**

## 🎉 Congratulations!

You now have a complete GitHub setup with:
- ✅ Repository created and connected
- ✅ Branch strategy implemented
- ✅ Automated code review workflow
- ✅ Pull request templates
- ✅ Branch protection rules
- ✅ Deployment pipeline ready

## 📚 Additional Resources

- [GitHub Documentation](https://docs.github.com/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)

## 🆘 Troubleshooting

### Common Issues

1. **Authentication errors:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. **Permission denied:**
   - Check SSH keys or use HTTPS
   - Verify GitHub access token

3. **Workflow not running:**
   - Check repository permissions
   - Verify workflow file syntax
   - Check Actions tab for errors

### Getting Help

- Check GitHub's [troubleshooting guide](https://docs.github.com/en/get-started/quickstart/troubleshooting)
- Use GitHub's [community forum](https://github.community/)
- Review [GitHub Actions documentation](https://docs.github.com/en/actions)

---

**Happy coding and reviewing! 🚀**
