import React, { useEffect, useState } from "react";
import { Button, Text, Surface } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchProduct, deleteProduct } from "../utils/api";

// jh-ps
export default function ShopViewScreen(props) {
  const isFocused = useIsFocused();

  // jh-us
  // Create a box called 'products' with an initial value of an empty array
  const [products, setProducts] = useState([]);
  // Create a box called 'offline' with an initial value of false
  const [offline, setOffline] = useState(false);
  // Create a box called 'error' with an initial value of null
  const [error, setError] = useState(null);
  // Create a box called 'visible' with an initial value of null
  const [visible, setVisible] = useState(false);
  // Create a box called 'selectedProduct' with an initial value of null
  const [selectedProductId, setselectedProductId] = useState(null);
  // Create a box called 'selectedProduct' with an initial value of empty string
  const [selectedProductName, setselectedProductName] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetchProduct();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setOffline(true);
      setError("Unable to fetch data, offline mode");
    }
  };
  // jh-uef
  // In project im connecting to 'people' endpoint
  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  // #region Navigation
  function showViewProduct(id) {
    props.navigation.navigate("ProductView", { id: id });
  }

  function showEditProduct(id) {
    props.navigation.navigate("ProductEdit", { id: id });
  }

  function handleDelete(id) {
    props.navigation.navigate("HandleDelete", { id: id });
  }
  // #endregion

  //jh-hd
  async function handleDelete() {
    if (selectedProductId !== null) {
      try {
        const success = await deleteProduct(selectedProductId);
        if (success) {
          fetchData();
          hideDialog();
        } else {
          setError("Failed to delete. Please try again.");
        }
      } catch (err) {
        console.error("Error deleting:", err);
        setError("Failed to delete. Check your connection.");
        hideDialog();
      }
    }
  }

  //jh-hdt
  async function handleDeleteTest() {
    const lastProduct = products[products.length - 1].id;
    try {
      const success = await deleteProduct(lastProduct);
      if (success) {
        fetchData();
      } else {
        setError("Failed to delete. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting:", err);
      setError("Failed to delete. Check your connection.");
    }
  }

  return (
    <Surface
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text variant="displaySmall">ShopViewScreen</Text>

      {products.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
      <Button mode="contained" icon="update" onPress={() => showViewProduct(3)}>
        View Person #2
      </Button>

      <Button mode="contained" icon="update" onPress={() => showEditProduct(5)}>
        Edit Product #5
      </Button>

      <Button
        mode="contained"
        icon="update"
        onPress={() => showEditProduct(-1)}
      >
        Add new product
      </Button>

      <Button mode="contained" icon="update" onPress={() => handleDeleteTest()}>
        Delete product
      </Button>
    </Surface>
  );
}

//
// > useState is a way to create a "box" that holds some data for your component. This box can store any kind of data, like numbers, strings, arrays, or objects. You can also change what's inside the box whenever you need to.
// > When I call useState, I create a box and give it an initial value.
// useState takes two arguments: the current value inside the box and a function to change the value.
//
