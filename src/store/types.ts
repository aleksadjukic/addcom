export interface IElement {
    id: string;
    title: string;
    iconSrc: string;
    type: string;
}

export interface ICanvasBoard {
    name: string;
    elements: IElement[];
    disabled: boolean;
}

export interface IDragAndDropContextState {
    elements: IElement[],

    setElements: React.Dispatch<React.SetStateAction<IElement[]>>

    headerElements: IElement[],
    setHeaderElements: React.Dispatch<React.SetStateAction<IElement[]>>
    bodyElements: IElement[],
    setBodyElements: React.Dispatch<React.SetStateAction<IElement[]>>
    footerElements: IElement[],
    setFooterElements: React.Dispatch<React.SetStateAction<IElement[]>>

    headerDisabled: boolean,
    setHeaderDisabled: React.Dispatch<React.SetStateAction<boolean>>
    bodyDisabled: boolean,
    setBodyDisabled: React.Dispatch<React.SetStateAction<boolean>>
    footerDisabled: boolean,
    setFooterDisabled: React.Dispatch<React.SetStateAction<boolean>>
}
