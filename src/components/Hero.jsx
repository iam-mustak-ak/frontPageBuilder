import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Modal from "../components/Modal";
const Hero = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-white">
            <div className="relative isolate overflow-hidden w-full bg-gray-900 h-[calc(100vh-64px)]">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 grid items-center justify-center h-full">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Create Modern Front Page
                            <br />
                            in a snap.
                        </h2>
                        {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Incididunt sint fugiat pariatur cupidatat consectetur
                        sit cillum anim id veniam aliqua proident excepteur
                        commodo do ea.
                    </p> */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={open}
                                type="button"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Let&apos;s Create
                            </button>
                        </div>
                    </div>
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle
                        cx={512}
                        cy={512}
                        r={512}
                        fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
                        fillOpacity="0.7"
                    />
                    <defs>
                        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <Modal close={close} open={opened} />
        </div>
    );
};

export default Hero;
