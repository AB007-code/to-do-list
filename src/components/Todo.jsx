import React, { useState } from "react";
const Todo = () => {
  const [state, setState] = useState("");
  const inputHandeler = (e) => {
    setState(e.target.value);
  };
  const div = document.querySelector(".div");
  const addList = () => {
    if (state.length > 0) {
      const div1 = document.createElement("div");
      div1.className = "input-group mt-3 c";
      let row = `<input type="text" class="form-control" aria-label="Dollar" value="${state}" disabled/>
                <span class="input-group-text cancel">✖</span>
                <span class="input-group-text success">✔️</span>`;
      div1.innerHTML = row;
      div.appendChild(div1);
    }
  };
  let handeler = (e) => {
    let arr = `${e.target.className}`.split(" ");
    if (arr[1] == "cancel") {
      e.target.closest(".c").remove();
    }
    if (arr[1] == "success") {
      e.target.closest(".c").style.border = "2px solid green";
    }
  };
  return (
    <>
      <div className="container w-50">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Make your list"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={inputHandeler}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={addList}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container w-50 div" onClick={handeler}></div>
    </>
  );
};

export default Todo;
