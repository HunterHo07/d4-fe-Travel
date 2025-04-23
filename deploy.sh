#!/bin/bash

echo "🚀 Starting deployment process for JEBSEN TRAVEL & Tours website..."

# Build the project
echo "📦 Building the project..."
bun run build

# Create .nojekyll file to bypass Jekyll processing
echo "🔧 Creating .nojekyll file..."
touch out/.nojekyll

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d out

echo "✅ Deployment complete! Your site should be live shortly."
echo "🌐 Check your GitHub repository settings to find the URL."
