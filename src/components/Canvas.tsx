"use client";

import CanvasBoard from "./CanvasBoard";

const Canvas = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 h-screen py-12 px-[110px] overflow-y-auto mr-[11px]">
      <CanvasBoard name="header" />
      <CanvasBoard name="body" />
      <CanvasBoard name="footer" />
    </div>
  );
};

export default Canvas;
