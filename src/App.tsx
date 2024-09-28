import "./App.css";
import { CiCircleRemove } from "react-icons/ci";

export default function App() {
  let AddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    let formValue = form.elements.namedItem("todo") as HTMLInputElement;

    if (formValue.value.length > 0) {
      AddToList(formValue.value);
    }
    formValue.value = "";
  };

  
    let AddToList = (value: string | number) => {
      const list = document.getElementById("list") as HTMLUListElement;

      const todoItem = document.createElement("li");
      todoItem.className =
        "bg-white text-black p-2 text-left my-3 font-bold flex justify-between decoration-2 ";
      todoItem.innerHTML = `${value} <span class="text-[18px] no-underline cursor-pointer Remove-Todo">X</span>`;

      todoItem.addEventListener("click",()=>{
        todoItem.classList.add("line-through")
      })

      const removeButton = todoItem.querySelector(".Remove-Todo");
      removeButton?.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const liToBeRemoved = target.parentNode as HTMLLIElement;

        if (liToBeRemoved) {
          liToBeRemoved.remove();
        }
      });

      list.appendChild(todoItem);
    };
  

  return (
    <>
      <h1 className="text-[48px] mx-auto underline ">Todo App</h1>

      <form className="w-[70%] mx-auto my-5" onSubmit={AddTodo}>
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo"
          className="p-2 w-[75%] mx-3 rounded outline-none"
        />
        <button
          type="submit"
          className="text-white w-[20%] bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Todo
        </button>
      </form>

      <ul id="list">
        {/* <li className="bg-white text-black p-2 text-left  font-bold flex justify-between">
          Heyy <span className="text-[25px]" onClick={RemoveTodo}><CiCircleRemove/></span>
        </li> */}
      </ul>
    </>
  );
}
