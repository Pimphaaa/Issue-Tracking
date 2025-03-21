// /utils/api.ts
export const fetchIssues = async () => {
    const response = await fetch('/api/issues');
    const data = await response.json();
    return data;
  };
  
  export const login = async (username: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  };
  