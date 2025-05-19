import { create } from 'zustand'

interface IModal {
    isVisible: boolean,
    setIsVisibile: (state: boolean) => void,
    heading: string,
    body: string,
    levelName: string,
    setContent: (data: { body: string, heading: string }) => void,
}

const useStore = create<IModal>()((set, get) => ({
    isVisible: false,
    setIsVisibile: (state) => set({ isVisible: state }),
    heading: "",
    body: "",
    levelName: "",
    setContent: (data) => set({ body: data.body, heading: data.heading })
}))