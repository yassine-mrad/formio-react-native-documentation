# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
# or
yarn
```

## Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
# or
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
# or
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Configuration

Before deploying, make sure to update the following placeholders in `docusaurus.config.ts`, `src/pages/index.tsx`, and content files:

- `[GITHUB_URL_PLACEHOLDER]`: URL to your GitHub repository
- `[GITHUB_ORG_PLACEHOLDER]`: Your GitHub organization/username
- `[DONATION_URL_PLACEHOLDER]`: URL for donations (e.g., Buy Me a Coffee)
- `[YOUTUBE_VIDEO_URL_PLACEHOLDER]`: URL for the YouTube video embed (in `src/components/YouTubeVideo/index.tsx`)
- `[PACKAGE_NAME]`: Your NPM package name

## Project Structure

- `docs/`: Documentation markdown files
- `src/`: React components and pages
  - `components/`: Reusable components (YouTubeVideo, MobileMockup)
  - `pages/`: Landing page and other custom pages
- `docusaurus.config.ts`: Main configuration file
- `sidebars.ts`: Sidebar navigation structure
