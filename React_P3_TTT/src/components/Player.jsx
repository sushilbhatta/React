import { useState } from "react";
export default function Player({ inintialName, symbol }) {
  const [playerName, setPlayerName] = useState(inintialName);
  const [isEditing, setisEditing] = useState(false);
  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
