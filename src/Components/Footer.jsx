import  {BsFacebook, BsInstagram ,BsLinkedin , BsTwitter}  from "react-icons/bs"

 
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <>
            <footer className=' w-full relative left-0 bottom-0 h-[10vh] py-10 flex flex-col  sm:flex-row items-center justify-between text-white bg-gray-800  px-20' >
                <section className='text-lg'>
                    Copyright {year} | All rights reserved
                    
                </section> 
                <section className='flex item-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration300'>
                        <BsFacebook />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration300'>
                        <BsInstagram/>
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration300'>
                        <BsLinkedin />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration300'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    )

    
}

export default Footer;