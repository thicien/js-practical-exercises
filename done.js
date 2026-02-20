// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
async function fetchDataWith(url, retries = 5, delay = 1000) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const data = await response.json();
        
    } catch (error) {
        if (retries > 0) {
            
        }
    }
}