# API testing with Testing Library and Mock Service Worker

This react project connects to the open https://ghibliapi.herokuapp.com/ API and tests the the projects API handling. It tests that it can handle

- a typical data response
- a 500 status code
- a 418 status code (with custom page feedback)

The focus being on the testing rather than the actual app (which is pretty minimal)

### Requirement:

- Node (stable) v17.0.2
- eslint v7.32.0
- jest v25.2.4 (for testing)

#### Install:

To install and run the project:

- [install node](https://nodejs.org/en/download/)
- [install git](https://github.com/git-guides/install-git)

```bash
git clone https://github.com/K9Design/api-mock-testing
cd api-mock-testing
npm install
```

#### To run it:

```bash
npm start
```

#### To test it:

```bash
npm test
```

### Live Demo (not all that exciting):

[https://k9design.github.io/api-mock-testing/](https://k9design.github.io/api-mock-testing/)
