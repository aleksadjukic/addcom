import { ReactSortable } from "react-sortablejs";
import Draggable from "./Draggable";
import { useCanvasBoard } from "@/hooks/useCanvasBoard";
import { useState } from "react";

interface ICanvasBoardProps {
  name: string;
}

const CanvasBoard = ({ name }: ICanvasBoardProps) => {
  const { elements, setElements, shouldDisableDrop, containerEmpty, setContainerEmpty, handleOnMove } = useCanvasBoard(name);

  return (
    <div className="py-[16px] px-[8px] bg-[#F6F6F6] rounded">
      <h3 className="mb-[24px] text-[#3A6B88] font-semibold text-sm">{name[0].toUpperCase() + name.slice(1, name.length)}</h3>
      <div className="flex flex-col gap-[10px]">
        <div className={`relative flex justify-center ${(elements.length > 0 && !containerEmpty) ? "" : "bg-white border border-dashed border-[#3A6B88]"} rounded`}>
          <p className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${(elements.length !== 0 && !containerEmpty) && "text-transparent"}`}>Drag and drop an element within this area.</p>
          <ReactSortable
            id={name}
            disabled={shouldDisableDrop}
            group={{ name, put: true }} list={elements} setList={setElements}
            chosenClass="chosen"
            ghostClass="ghost-item"
            className={`py-[8px] px-[4px] flex flex-col justify-center items-center flex-1 w-[818px] min-h-[138px] z-20 gap-[8px]`}
            onMove={handleOnMove}
            onEnd={() => setContainerEmpty(false)}
          >

            {elements.map((item, index) => (
              <Draggable key={index} element={item} />
            ))}

          </ReactSortable>

        </div>

      </div>
    </div>

  );
};

export default CanvasBoard;
