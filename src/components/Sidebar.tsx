"use client"

import React from "react";
import Draggable from "./Draggable";
import { ReactSortable } from "react-sortablejs";
import { useDragAndDropContext } from "@/store/drag-and-drop";

const Sidebar = () => {
  const { elements, setElements } = useDragAndDropContext();

  const handleOnMove = (evt: any) => {
    const sourceContainerId = evt.from.getAttribute('id');
    const targetContainerId = evt.to.getAttribute('id');
    const draggedItemType = evt.dragged.getAttribute('id');

    const dropInHeaderForbidden = sourceContainerId === 'sidebar' && targetContainerId === 'header' && draggedItemType !== 'image';
    const dropInFooterForbidden = sourceContainerId === 'sidebar' && targetContainerId === 'footer' && draggedItemType !== 'text';

    if (dropInHeaderForbidden) return false;
    if (dropInFooterForbidden) return false;

    return true;
  };

  return (
    <div className="min-w-[460px] p-8 bg-[#FAFAFA] h-screen">
      <h2 className="mb-10 text-lg text-[#3A6B88] font-semibold">Elements</h2>

      <ReactSortable id="sidebar"
        onMove={handleOnMove}
        forceFallback
        fallbackClass="dragged-item"
        group={{ name: "sidebar", pull: "clone", put: true }}
        direction={"horizontal"}
        list={elements}
        setList={setElements}
        sort={false}
        className="grid grid-cols-3 gap-2  w-full justify-center">

        {elements?.map((item: any, index: any) => (
          <Draggable key={index} element={item} />
        ))}

      </ReactSortable>
    </div >
  );
};

export default Sidebar;
