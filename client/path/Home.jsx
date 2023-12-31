import React, { useState, useEffect } from 'react';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// import { useNavigate } from 'react-router-dom';

import Component from '../components/Component.jsx';

export default function Home() {
  const [participants, setParticipants] = useState(['Dad', 'Mom', 'Chris', 'Matt', 'Ana'])
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
      <h1 onClick={() => randomize(participants)} className='title'>Noche Buena</h1>
      {/* <button onClick={() => randomize(participants)}>Do the shuffle</button> */}
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
              <div className='spinning-square'>
                <div className='shrinking top dad'>Dad</div>
                <div className='shrinking top mom'>Mom</div>
                <div className='shrinking top chris'>Chris</div>
                <div className='shrinking bottom matt'>Matt</div>
                <div className='shrinking bottom ana'>Ana</div>
              </div>
                <ul  className='ul-list-holder' {...provided.droppableProps} ref={provided.innerRef}>
                  <div className='holder'>
                    {participants.map((name, index) => (
                      <div className='list-holder'>
                        <Draggable key={name} draggableId={name} index={index}>
                          {(provided) => (
                            <div className={`name-holder name-${index}`}>
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
                        {index !== 4 ? (
                          <img className='arrow-down' src='https://www.freeiconspng.com/thumbs/arrow-down-icon-png/red-arrow-down-icon-png-30.png'></img>
                        ) : (
                          null
                        )}
                      </div>
                      
                    ))}
                    <img className='arrow-up' src='https://static.vecteezy.com/system/resources/previews/017/178/086/non_2x/directional-arrow-on-transparent-background-free-png.png'></img>
                  </div>
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