const BASE_URL = "https://fakestoreapi.com";

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  console.log(data);

  return data;
}

export async function getProducts() {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }



export async function fetchSingleProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}