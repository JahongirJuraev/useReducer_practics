import { useReducer } from "react";
import gallerey from "./data";

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIKE": // like btn
      return state.map((image) => {
        if (image.id === payload) {
          return { ...image, likes: image.likes + 1 };
        } else {
          return image;
        }
      });
    case "DIS_LIKE": // dislike btn
      return state.map((image) => {
        if (image.id === payload) {
          return { ...image, disLikes: image.disLikes + 1 };
        } else {
          return image;
        }
      });
    case "DELETE": // delete btn
      return state.filter((image) => image.id !== payload);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(changeState, gallerey);

  // like btn
  // const addLike = (id) => {
  //   setImages((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, likes: item.likes + 1 } : item
  //     )
  //   );
  // };

  // dislike btn
  // const disLike = (id) => {
  //   setImages((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, disLikes: item.disLikes + 1 } : item
  //     )
  //   );
  // };

  // delete btn
  // const deleteItems = (id) => {
  //   setImages((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
    <div className="images-container">
      {state.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="" />

          <div className="buttons-container">
            <button
              onClick={() => dispatch({ type: "ADD_LIKE", payload: image.id })}
            >
              👍{image.likes}
            </button>
            <button
              onClick={() => dispatch({ type: "DIS_LIKE", payload: image.id })}
            >
              👎{image.disLikes}
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: image.id })}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
