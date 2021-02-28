import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServiceCardProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;

}

export function ContactModal({ modalOpen, setModalOpen }: ServiceCardProps) {
    const [modalOpen2, setModalOpen2] = useState(false);


    function closeContactModal() {
        setModalOpen(false);
    }

    useEffect(() => {
        setModalOpen2(modalOpen);
    }, [modalOpen]);

    return (
        modalOpen && < >
            {/* <div className={(modalOpen ? 'fixed' : 'hidden') + ' z-50 inset-0 overflow-y-auto animated fadeIn'}> */}
            <div className={'fixed z-50 inset-0 overflow-y-auto  modal ' + (modalOpen2 ? '' : 'opacity-0')}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity duration-700 ease-in-out" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeContactModal} ></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all duration-700 sm:my-8 sm:align-middle max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex flex-col items-center justify-center w-9/12 lg:w-4/6 mx-auto mb-4">

                                <img src="/images/contact/contact.svg"></img>

                                <a target="_blank" href="https://api.whatsapp.com/send?phone=5577991653808&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20psicoterapia!"   className=" mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                <FontAwesomeIcon icon={faWhatsapp} size="sm" />
                                    Whatsapp
                                </a>
                                <a target="_blank" href="tel:+5577991653808"  className=" mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                <FontAwesomeIcon icon={faPhoneAlt} size="sm" />
                                    Ligue 
                                </a>

                                <a target="_blank" href="mailto:brendafernandapsi@gmail.com"  className=" mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                <FontAwesomeIcon icon={faEnvelope} size="sm" />
                                    Email 
                                </a>

                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
                            <button type="button" onClick={closeContactModal} className="mt-3  inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Fechar
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}






