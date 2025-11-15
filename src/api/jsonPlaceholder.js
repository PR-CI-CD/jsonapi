const BASE_URL = "https://jsonplaceholder.typicode.com"

async function apiFetch(path, options = {}) {
    const res = await fetch(`${BASE_URL}${path}`, options);

    if(!res.ok) {
        throw new Error(`API error: ${res.status}`)
    }

    return res.json();
}

export function getPosts() {
    return apiFetch("/posts")
}

export function getPost(id) {
    return apiFetch(`/posts/${id}`)
}

export function getPostComments(id) {
    return apiFetch(`/posts/${id}/comments`)
}

export function createPost(postData) {
    return apiFetch("/posts", {
        method: "POST",
        headers: { "Content-Type": "applicaiton/json"},
        body: JSON.stringify(postData)
    });
}

export function getTodos() {
    return apiFetch("/todos")
}

export function getUsers() {
    return apiFetch("/users");
}