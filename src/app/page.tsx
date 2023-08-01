import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import DragAndDropProvider from "@/store/drag-and-drop";

export default function Home() {
  return (
    <main className="flex">
      <DragAndDropProvider>
        <Canvas />
        <Sidebar />
      </DragAndDropProvider>
    </main>
  );
}
