import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

import {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
} from "../services/customerService";

export default function CustomersScreen() {
  const [customers, setCustomers] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    accountBalance: ""
  });

  const [editingId, setEditingId] = useState(null);

  // Load customers
  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  // Handle submit (Create or Update)
  const handleSubmit = async () => {
    if (!form.fullName || !form.email) {
      Alert.alert("Validation", "Name and Email are required");
      return;
    }

    if (editingId) {
      await updateCustomer(editingId, form);
      setEditingId(null);
    } else {
      await addCustomer(form);
    }

    setForm({ fullName: "", email: "", phone: "", accountBalance: "" });
    loadCustomers();
  };

  // Edit
  const handleEdit = (customer) => {
    setForm(customer);
    setEditingId(customer.id);
  };

  // Delete
  const handleDelete = (id) => {
    Alert.alert("Confirm", "Delete this customer?", [
      {
        text: "Cancel"
      },
      {
        text: "Delete",
        onPress: async () => {
          await deleteCustomer(id);
          loadCustomers();
        }
      }
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text>{item.email}</Text>
        <Text>{item.phone}</Text>
        <Text>₦{item.accountBalance}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FORM */}
      <View style={styles.form}>
        <TextInput
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(text) => setForm({ ...form, fullName: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Phone"
          value={form.phone}
          onChangeText={(text) => setForm({ ...form, phone: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Balance"
          value={form.accountBalance}
          onChangeText={(text) =>
            setForm({ ...form, accountBalance: text })
          }
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {editingId ? "Update Customer" : "Add Customer"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* DATA TABLE */}
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  form: { marginBottom: 20 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6
  },

  button: {
    backgroundColor: "#181D31",
    padding: 12,
    borderRadius: 6,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  },

  row: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  name: {
    fontWeight: "bold",
    fontSize: 16
  },

  actions: {
    justifyContent: "center",
    alignItems: "flex-end"
  },

  edit: {
    color: "blue",
    marginBottom: 10
  },

  delete: {
    color: "red"
  }
});