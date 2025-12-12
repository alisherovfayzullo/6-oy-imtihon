const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Xatolik bor: " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Xatolik:", error.message);
  }
}

getData();
