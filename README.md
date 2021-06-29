# short-stories-2021

Created with CodeSandbox

## Notes on connecting Github pages to custom domain

- Domain in CNAME file must be in all caps (i.e. `WWW.EXAMPLE.COM` not `www.example.com`).
- On your DNS management tab (this domain is served by `namecheap.com`), you must have one `CNAME record` and 4 `A Record`.
- It may take some time (24h even) for your DNS to update.

References:

- [Stackoverflow: Custom domain for Github project pages](https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages)

- [Stackoverflow: How to fix "domain does not resolve to the github pages server" error in Github](https://stackoverflow.com/questions/54059217/how-to-fix-domain-does-not-resolve-to-the-github-pages-server-error-in-github)
