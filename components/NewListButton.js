"use client";
import { useState } from "react";
import CreateListModal from "./CreateListModal";

export default function NewListViewport()
{
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="border-2 border-yellow-500">
            <button onClick={openModal}>
                Add List
            </button>
            <CreateListModal isOpen={isModalOpen} onClose={closeModal}>
                <h1>This is a modal!</h1>
                <p>List creation here</p>
            </CreateListModal>
        </div>
    );
}