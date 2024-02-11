import axios from "axios";

export const fetchProductData = async (productId, accessToken) => {
  try {
    const productData = await axios.get(
      `http://localhost:8080/shop/oneProduct/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    console.log(productData.data);

    return productData.data;
  } catch (error) {
    console.error("Error fetching product: ", error);
    throw new Error("Error fetching product. Please try again later.");
  }
};

export const addToCartApi = async (productId, quantity, accessToken) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/shop/addToCart/${productId}`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    const cartItem = response.data.cartItem;
    console.log(cartItem, "DEVV");

    const cartString = localStorage.getItem("cart");
    let existingCart = [];

    if (cartString) {
      try {
        existingCart = JSON.parse(cartString);
        if (!Array.isArray(existingCart)) {
          existingCart = [];
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        existingCart = [];
      }
    }

    const existingCartItemIndex = existingCart.findIndex(
      (item) => item.productId === cartItem.productId
    );

    if (existingCartItemIndex !== -1) {
      existingCart[existingCartItemIndex].quantity += cartItem.quantity;
    } else {
      existingCart.push({
        productId: cartItem.productId,
        name: cartItem.product.name,
        quantity: cartItem.quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

export const handleSignIn = async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/signin",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const handleSignUp = async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/signUp",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const handleRemoveCart = async (productId, accessToken) => {
  try {
    const productData = await axios.delete(
      `http://localhost:8080/shop/removeCart/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    console.log(productData.data, "APIII");

    return productData.data;
  } catch (error) {
    console.error("Error fetching product: ", error);
    throw new Error("Error fetching product. Please try again later.");
  }
};
export const handleOrder = async (formData) => {
  try {
    const res = await axios.patch(
      "http://localhost:8080/order/addAddress",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    const data = res.data;
    // console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
