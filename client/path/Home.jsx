import React, { useState, useEffect } from 'react';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// import { useNavigate } from 'react-router-dom';

import Component from '../components/Component.jsx';

export default function Home() {
  const [participants, setParticipants] = useState(['Dad', 'Mom', 'Chris', 'Efrain', 'Matt', 'Ana'])
  const [initialized, setInitialized] = useState(false)

  // const navigate = useNavigate();

  const randomize = list => {
    const array = [...list]
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    console.log(array)

    setParticipants(array);
    setInitialized(true);
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = [...participants];
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setParticipants(reorderedItems);
  };

  return (
    <div className='home'>
      <h1 className='title'>Noche Buena</h1>
      <button onClick={() => randomize(participants)}>Do the shuffle</button>
      {/* <Component/> */}
      {initialized ? 
      (
        // participants.map(name => (
        //   <Component name={name}/>
        // ))
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="reorderable-list">
          {(provided) => (
            <div>
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {participants.map((name, index) => (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided) => (
                      <div className='name-holder'>
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {name}
                        </li>
                      </div>
                      
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
       ) : null
      }
    </div>
  )
}