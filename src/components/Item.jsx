import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ title, id, status, time, tasks, setTasks }) => {
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  const onUpdateStatus = () => {
    setChecked(!checked);
    tasks.map((item) => {
      if (item.id === id) {
        item.status = !checked;
      }
      return true;
    });
    setTasks([...tasks]);
  };

  const onRemoveItem = () => {
    setTasks([...tasks.filter((item) => item.id !== id)]);
  };

  return (
    <li className={classes.join(" ")}>
      <div>
        <label>
          <input type="checkbox" checked={checked} onChange={onUpdateStatus} />
          <span>
            {title} {time}
          </span>
        </label>
        <i className="material-icons red-text" onClick={onRemoveItem}>
          X
        </i>
      </div>
    </li>
  );
};

Item.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  status: PropTypes.bool,
  time: PropTypes.string,
};

export default Item;
