const fetch = require('node-fetch');

const GITHUB_REPO = 'donkats/guestbook-app';
const GITHUB_FILE_PATH = 'guestbook.json';
const GITHUB_BRANCH = 'main'; // or your branch name
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const newEntry = JSON.parse(event.body);

  try {
    // 1. Get current guestbook.json from GitHub (get SHA needed for update)
    const fileRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const fileData = await fileRes.json();

    // 2. Decode content (base64)
    const content = Buffer.from(fileData.content, 'base64').toString();
    const entries = JSON.parse(content);

    // 3. Add new entry with timestamp
    const updatedEntries = [ { ...newEntry, date: new Date().toISOString() }, ...entries ];

    // 4. Prepare updated content (base64)
    const updatedContent = Buffer.from(JSON.stringify(updatedEntries, null, 2)).toString('base64');

    // 5. Commit update to GitHub
    const updateRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`, {
      method: 'PUT',
      headers: { 
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Add guestbook entry by ${newEntry.name}`,
        content: updatedContent,
        sha: fileData.sha,
        branch: GITHUB_BRANCH,
      }),
    });

    if (!updateRes.ok) {
      const err = await updateRes.json();
      return { statusCode: 500, body: JSON.stringify({ error: err.message || 'GitHub update failed' }) };
    }

    // 6. Optionally trigger Netlify build hook if needed here

    return { statusCode: 200, body: JSON.stringify({ message: 'Guestbook updated' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
