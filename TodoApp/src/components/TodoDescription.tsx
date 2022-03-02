import { useCallback, useState } from "react";

interface TodoInf {
  description: string;
  id: string;
}

const TodoDescription = (props: TodoInf) => {
  const [listItem, setListItem] = useState(false);

  const Status = useCallback(() => {
    setListItem(!listItem);
  }, [props]);

  return (
    <div className="Description">
      <p className={listItem ? "change" : ""}>{props.description} </p>
      <i
        className={`fa fa-light fa-dot-circle font_style pt-1 ${
          listItem ? "change_style" : "text-dark"
        }`}
        onClick={Status}
      ></i>
    </div>
  );
};
export default TodoDescription;
