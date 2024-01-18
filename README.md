# spawnMd
**Include github markdown in your HTML documents!**


## spawnMd.js
Insert / render github markdown into HTML!
JavaScript to GET a markdown document (eg README.md) using github's REST API, from any public repo and POST it to githubs markdown API to render a finalised .md file within any HTML document.

Includes support for private repo's, an authorization token is required; generated from your github settings page.

## Usage:

Just include source script to use:

`<script src="spawnMd.js"></script>`

And call the function like this:

`spawnMd("githubuser", "repo", "output-element-id", "FILE.md");`

eg: **spawnMd("facebook", "react", "output", "README.md");**
