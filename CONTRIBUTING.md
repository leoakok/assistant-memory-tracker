# Contributing to Assistant Memory Tracker

Thank you for your interest in contributing to this project!

## Development Setup

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/leoakok/assistant-memory-tracker.git
   cd assistant-memory-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will open at [http://localhost:3000](http://localhost:3000)

## Dependency Management

### Important: Always Commit package-lock.json
This project uses npm for dependency management. **Always commit package-lock.json** when you:
- Add new dependencies (`npm install <package>`)
- Update dependencies (`npm update`)
- Change package.json manually

### Adding Dependencies
```bash
# Install and save to package.json
npm install <package-name>

# Commit both files
git add package.json package-lock.json
git commit -m "Add <package-name> dependency"
```

### Updating Dependencies
```bash
# Update all dependencies
npm update

# Or update specific package
npm update <package-name>

# Commit the changes
git add package.json package-lock.json
git commit -m "Update dependencies"
```

### Regenerating package-lock.json
If you ever need to regenerate the lock file:
```bash
# Remove old lock file
rm package-lock.json

# Generate new one
npm install

# Commit the new file
git add package-lock.json
git commit -m "Regenerate package-lock.json"
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## Project Structure
```
assistant-memory-tracker/
├── public/           # Static files
├── src/              # React source code
│   ├── App.js        # Main application component
│   ├── App.css       # Application styles
│   └── index.js      # Entry point
├── .github/
│   └── workflows/    # GitHub Actions workflows
├── package.json      # Project dependencies and scripts
└── package-lock.json # Locked dependency versions
```

## Code Style
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful variable and function names

## Submitting Changes
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes locally
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Deployment
The project automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment workflow:
1. Installs dependencies
2. Builds the React app
3. Deploys to GitHub Pages

## Troubleshooting

### Build Failures
If you encounter build failures:
1. Ensure Node.js version is 18 or higher: `node --version`
2. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that package-lock.json is committed
4. Check GitHub Actions logs for specific errors

### Dependency Issues
If dependencies are out of sync:
1. Delete node_modules and package-lock.json
2. Run `npm install`
3. Commit the new package-lock.json

## Questions?
Open an issue for any questions or problems you encounter.
