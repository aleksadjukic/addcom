"use client"

import React, { createContext, useContext, useReducer, useState } from 'react';
import { IDragAndDropContextState, IElement } from './types';
import { v4 } from 'uuid';

// Create the initial context data
const initialState: IDragAndDropContextState = {
  elements: [
    { id: v4(), title: "Text", iconSrc: "/assets/icons/fa_align-justify.svg", type: "text" },
    { id: v4(), title: "Image", iconSrc: "/assets/icons/fa_image.svg", type: "image" },
    { id: v4(), title: "Table", iconSrc: "/assets/icons/fa_table.svg", type: "table" },
  ],
  setElements: () => { },

  headerElements: [],
  setHeaderElements: () => { },
  bodyElements: [],
  setBodyElements: () => { },
  footerElements: [],
  setFooterElements: () => { },

  headerDisabled: false,
  setHeaderDisabled: () => { },
  bodyDisabled: false,
  setBodyDisabled: () => { },
  footerDisabled: false,
  setFooterDisabled: () => { },
};

// Create the context
const DragAndDropContext = createContext<IDragAndDropContextState>(initialState);

// Create a hook to use the context in components
export const useDragAndDropContext = (): IDragAndDropContextState => useContext(DragAndDropContext);

// Create a provider component to wrap around components that need to access the context
const DragAndDropProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [elements, setElements] = useState<IElement[]>([
    { id: v4(), title: "Text", iconSrc: "/assets/icons/fa_align-justify.svg", type: "text" },
    { id: v4(), title: "Image", iconSrc: "/assets/icons/fa_image.svg", type: "image" },
    { id: v4(), title: "Table", iconSrc: "/assets/icons/fa_table.svg", type: "table" },
  ]);
  const [headerElements, setHeaderElements] = useState<IElement[]>([])
  const [bodyElements, setBodyElements] = useState<IElement[]>([])
  const [footerElements, setFooterElements] = useState<IElement[]>([])

  const [headerDisabled, setHeaderDisabled] = useState(false);
  const [bodyDisabled, setBodyDisabled] = useState(false);
  const [footerDisabled, setFooterDisabled] = useState(false);

  return <DragAndDropContext.Provider value={{
    elements, setElements,
    headerElements, setHeaderElements,
    bodyElements, setBodyElements,
    footerElements, setFooterElements,
    headerDisabled, setHeaderDisabled,
    bodyDisabled, setBodyDisabled,
    footerDisabled, setFooterDisabled
  }}>{children}</DragAndDropContext.Provider>;
};

export default DragAndDropProvider;
