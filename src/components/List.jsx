import PropTypes from "prop-types";
import Item from "./Item";

const List = ({ tasks, setTasks }) => {
  let countUnfinishedTasks = 0;

  tasks.map((item) => {
    if (item.status === false) {
      countUnfinishedTasks++;
    }
  });
  localStorage.setItem(
    "countUnfinishedTasks",
    JSON.stringify(countUnfinishedTasks)
  );
  return (
    <>
      <span className="count-tasks">
        Unfinished Tasks: {localStorage.getItem("countUnfinishedTasks")}
      </span>
      <ul>
        {tasks.map((el) => (
          <Item key={el.id} {...el} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default List;
