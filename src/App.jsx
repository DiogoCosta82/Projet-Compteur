import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "double") {
    return {
      count: state.count * 2,
    };
  } else if (action.type === "puissance") {
    return {
      count: state.count * state.count,
    };
  } else if (action.type === "diviser") {
    return {
      count: state.count / 2,
    };
  } else if (action.type === "aleatoire") {
    return {
      count: (state.count = Math.floor(Math.random() * 300)),
    };
  } else if (action.type === "reset") {
    return {
      count: (state.count = 0),
    };
  } else {
    throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented" });
        }}
      >
        Incrémente Compteur
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Décrémenter Compteur
      </button>
      <button
        onClick={() => {
          dispatch({ type: "double" });
        }}
      >
        Doubler Compteur
      </button>
      <button
        onClick={() => {
          dispatch({ type: "puissance" });
        }}
      >
        Puissance Compteur
      </button>
      <button
        onClick={() => {
          dispatch({ type: "diviser" });
        }}
      >
        Diviser Compteur par 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "aleatoire" });
        }}
      >
        Compteur aleatoire
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset Compteur
      </button>
      <p> Le compteur est a {state.count}</p>
    </>
  );
}
