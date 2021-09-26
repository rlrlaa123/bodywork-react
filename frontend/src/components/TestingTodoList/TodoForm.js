import React, { useState, useCallback } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <button type="submit">등록</button>
      <p>{value}</p>
      <hr />
    </form>
  );
};

export default TodoForm;
