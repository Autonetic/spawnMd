async function renderReadme(user, repo, id){ // id used to select output element
  // first API call - gets raw Markdown  
  const url = `https://api.github.com/repos/${user}/${repo}/contents/README.md`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    },
    Authorization: "Bearer <AUTH_TOKEN>" 
  });
  const contents = await res.json();
  const decoded = atob(contents.content); 
  console.log("Raw Markdown: \n" + decoded);  

  // second API call - posts raw markdown to githubs markdown api
  const url2 = "https://api.github.com/markdown/raw";
  const res2 = await fetch(url2, {
    method: 'POST',
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'Bearer <AUTH_TOKEN>',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'text/plain'
    },
    body: decoded
    })
    .then(function(response) {
    return response.text();
    });
  document.getElementById(id).innerHTML =  res2;
};
// call the function in parent doc with this: 
//spawnMd("Autonetic", "simple-comment-form", "output");
