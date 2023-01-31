import { useEffect, useCallback } from "react"
import { PlusIcon } from "@heroicons/react/24/outline"

const Modal = ({ show, setModal, children, title, saveInfo }) => {
    const closeModal = useCallback(() => setModal(false), [setModal]);

    const handleSaveInfo = () => {
        saveInfo()
        closeModal();
    }

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? closeModal() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [closeModal]);

    return (
        <>
            {show ? (<>
                <div className="absolute z-50 w-full min-h-full bg-gray-100 p-12 -mx-0">
                    <div className="px-5 py-4 mx-auto w-50 max-w-[400px] shadow-lg grid grid-cols-1 bg-white rounded-md">
                        <header className="flex justify-between pt-2 pb-4">
                            <h2 className="text-xl font-semibold capitalize">Edit {title}</h2>
                            <button className="" onClick={() => closeModal()}>
                                <PlusIcon className="rotate-45" width={24} height={24} />
                            </button>
                        </header>
                        <section className="font-light mb-6 grid grid-cols-1 align-items-center">
                            {children}
                        </section>
                        <footer className="w-full grid grid-rows-1 grid-cols-4 place-items-center p-4 gap-4 opacity-90">
                            <button className="col-start-3 border-2 border-primary_green bg-primary_green text-white_2 rounded-sm inline-block text-sm
                                    px-5 py-1 hover:shadow hover:shadow-green-500 hover:border-transparent hover:bg-green-700"
                                onClick={() => handleSaveInfo()}>
                                Save
                            </button>
                            <button className="px-4 py-1 rounded-sm inline-block text-sm opacity-80 border-white_2"
                                onClick={() => closeModal()}>
                                Cancel
                            </button>
                        </footer>
                    </div>
                </div>
                
            </>)
                : null
            }
        </>)
}


export default Modal