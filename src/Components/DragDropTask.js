import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import "./DragDropTask.css";

// Initial tasks data
const initialTasks = Array.from({ length: 10 }, (_, i) => ({
  id: `task-${i + 1}`,
  content: `Task ${i + 1}`,
}));

// Initial columns setup
const initialColumns = {
  today: { title: "Today", items: [] },
  tomorrow: { title: "Tomorrow", items: [] },
  thisWeek: { title: "This Week", items: [] },
  nextWeek: { title: "Next Week", items: [] },
  unplanned: { title: "Unplanned", items: initialTasks },
};

const DragDropTaskList = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there's no destination, or the item is dropped in the same spot
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    // Clone items from the source column
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    // Remove the item from the source and add it to the destination
    const [movedItem] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, movedItem);

    // Update the columns with the new lists
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  };

  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <h1 style={{marginTop:'100px'}}>Drag & Drop Task</h1>
      <div className="container">
        
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                className="column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{column.title}</h3>
                <div className="task-list">
                  {column.items.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="task-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DragDropTaskList;
