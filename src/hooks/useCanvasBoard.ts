import { useDragAndDropContext } from "@/store/drag-and-drop";
import { useState } from "react";

export const useCanvasBoard = (name: string) => {
    const { headerElements, setHeaderElements, bodyElements, setBodyElements, footerElements, setFooterElements } = useDragAndDropContext();

    const isHeaderBoard = name === 'header';
    const isBodyBoard = name === 'body';

    const [elements, setElements] = isHeaderBoard ? [headerElements, setHeaderElements] : isBodyBoard ? [bodyElements, setBodyElements] : [footerElements, setFooterElements]

    const { headerDisabled, bodyDisabled, footerDisabled } = useDragAndDropContext();
    const shouldDisableDrop = isHeaderBoard ? headerDisabled : isBodyBoard ? bodyDisabled : footerDisabled;

    const isBoardEmpty = elements.length === 0;

    const [containerEmpty, setContainerEmpty] = useState(false);

    const handleOnMove = (evt: any) => {
        const sourceContainerId = evt.from.getAttribute('id');
        const targetContainerId = evt.to.getAttribute('id');
        const draggedItem = evt.dragged.getAttribute('id')

        const sourceContainerEmpty = evt.from.childElementCount === 1;

        if (sourceContainerEmpty) {
            setContainerEmpty(true)
        }

        const canDropInHeader = (sourceContainerId === 'body' && targetContainerId === 'header' && draggedItem === 'image') || sourceContainerId === 'header' && targetContainerId === 'header';
        const canDropInBody = (sourceContainerId === 'header' && targetContainerId === 'body') || sourceContainerId === 'body' && targetContainerId === 'body';

        if (canDropInHeader) return true

        if (canDropInBody) return true;

        return false;
    };

    return { elements, setElements, shouldDisableDrop, isBoardEmpty, containerEmpty, setContainerEmpty, handleOnMove }
}