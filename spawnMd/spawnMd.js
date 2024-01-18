async function spawnMd(user, repo, id, doc){ // id used to select output element // doc used to point to a particular .md file 
  // first API call - gets raw Markdown  
  const url = `https://api.github.com/repos/${user}/${repo}/contents/${doc}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    },
    //Authorization: "Bearer <AUTH-TOKEN>" // Uncomment the start of this line for authentication.
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
        //'Authorization': 'Bearer <AUTH_TOKEN>', // Uncomment the start of this line for authentication.
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
// Use this id parent doc to call the function: 
//spawnMd("Autonetic", "simple-comment-form", "output", "README.md");
