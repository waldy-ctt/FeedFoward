import logo from 'src/assets/FF.png'
import HamburgerMenu from 'src/components/HamburgerMenu';
import Menu from 'src/components/Menu'

function Header(){

    return(
        <>
            <div className=''>
                <div className="w-full h-[65px] flex justify-between">
                    <img src={logo} alt="logo"
                    className='hidden'/>
                    <div className="font-mono pl-[20px] w-[170px] h-auto">
                        <p className='text-bold text-4xl flex justify-center'>
                            FF
                        </p>
                        <p className='text-bold text-2xl'>
                            FeedForward
                        </p>
                    </div>
                    <div className="pt-[30px] pr-[20px]">
                        <HamburgerMenu>
                            <Menu />
                        </HamburgerMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;