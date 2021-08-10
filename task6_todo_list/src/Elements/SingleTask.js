import React from 'react';

const SingleTask = ({ todoTask, todoID,todoComplete, toggleTask, deleteTask}) => {
    return (
 <div key={todoID}>
<div className={todoComplete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todoID)}>
     {todoTask}
</div>
<div onClick={() => deleteTask(todoID)}>X</div>
 </div>
    );
};

export default SingleTask;