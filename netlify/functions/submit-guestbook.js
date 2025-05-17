const fetch = require('node-fetch');

const GITHUB_REPO = 'donkats/guestbook-app';
const GITHUB_FILE_PATH = 'src/data/guestbook.json';
const GITHUB_BRANCH = 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const newEntry = JSON.parse(event.body);

    // 1. Fetch the current guestbook.json from GitHub
    const fileRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`,
      {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }
    );
    if (!fileRes.ok) {
      const err = await fileRes.json();
      return { statusCode: 500, body: JSON.stringify({ error: err.message || 'Failed to fetch guestbook file' }) };
    }
    const fileData = await fileRes.json();

    // 2. Decode and parse the file content
    const content = Buffer.from(fileData.content, 'base64').toString();
    let entries = [];
    try {
      entries = JSON.parse(content);
    } catch (e) {
      // If file is empty or invalid, start with empty array
      entries = [];
    }

    // 3. Add new entry at the top with timestamp
    const updatedEntries = [{ ...newEntry, date: new Date().toISOString() }, ...entries];

    // 4. Prepare updated content (base64)
    const updatedContent = Buffer.from(JSON.stringify(updatedEntries, null, 2)).toString('base64');

    // 5. Commit update to GitHub
    const updateRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`,
      {
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
      }
    );

    if (!updateRes.ok) {
      const err = await updateRes.json();
      return { statusCode: 500, body: JSON.stringify({ error: err.message || 'GitHub update failed' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ message: 'Guestbook updated' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};