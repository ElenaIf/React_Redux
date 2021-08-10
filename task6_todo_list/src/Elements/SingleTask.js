import React from 'react';

const SingleTask = ({ todoTask, todoID,todoComplete, toggleTask, deleteTask}) => {
    return (
 <div key={todoID} className="task-list">
     <span className="spot">❍</span>
<div className={todoComplete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todoID)}>
     {todoTask}
</div>

<span className="close-buttton" onClick={() => deleteTask(todoID)}>X</span>
 </div>
    );
};

export default SingleTask;