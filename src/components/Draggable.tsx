import React from "react";
import Image from "next/image";

function Draggable({ element }: any) {
  const elementId = element.title.toLowerCase();

  return (
    <div
      id={elementId}
      className={`flex-1 flex flex-col items-center justify-center p-6 w-full rounded shadow cursor-pointer bg-white border-[#E9E9E9]`}
    >
      <div className="mb-[8px]">
        <Image alt="test" src={element.iconSrc} width={43} height={43} />
      </div>

      <h3 className="font-semibold text-sm text-[#3A6B88]">{element?.title}</h3>
    </div>
  );
}

export default Draggable;
