
export const Footer = () => {
    return (
        <div>
            <footer className="bg-white  dark:bg-gray-950 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/main" className=" flex items-center ">
                            {/* <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img src={logo2} alt="Logo" className="object-cover dark:hidden" />
                                <img src={logo1} alt="Logo" className="hidden object-cover dark:block" />
                            </div> */}
                            <span className="mr-0 font-logo italic font-bold text-3xl text-[#09b3e4] ">Expen</span>
                            <span className="ml-0 font-logo italic font-bold text-3xl text-[#ff914d] ">zo</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="#" className="hover:underline">
                            Expenzo™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>

        </div>
    )
}
