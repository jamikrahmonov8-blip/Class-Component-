import { Button, Modal, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

let url = "http://37.27.29.18:8001/api/to-dos";

let initialState = {
  users: [],
  isModalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, users: action.payload };
    case "showModal":
      return { ...state, isModalOpen: action.payload };

    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  async function get() {
    try {
      let { data } = await axios.get(url);
      dispatch({ type: "get", payload: data.data });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${url}?id=${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);


  if (loading)
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <Spin size="large" />
      </div>
    );

  if (state.users.length === 0) return <h1>No data</h1>;

  return (
    <section style={{ width: 1300 }}>
      <Button
        type="primary"
        onClick={() => dispatch({ type: "showModal", payload: true })}
      >
        Open Modal
      </Button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.users.map((user) => (
          <div
            key={user.id}
            style={{
              width: 200,
              background: "#eee",
              margin: 10,
              padding: 10,
            }}
          >
            <h2>{user.title}</h2>
            <p>{user.description}</p>

            <Button danger onClick={() => deleteUser(user.id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>

      <Modal
        title="Basic Modal"
        open={state.isModalOpen}
        onOk={() => dispatch({ type: "showModal", payload: false })}
        onCancel={() => dispatch({ type: "showModal", payload: false })}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </section>
  );
}

export default Home;
