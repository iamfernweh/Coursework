async function getUser(id) {
    try {
      const response = await 
        fetch(`https://api.com/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
  