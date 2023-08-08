import {useState} from 'react';

const Navbar = ({setTheme}) => {

    const [active, setActive] = useState('regular');

    const handleUpdate = (e) => {
        setTheme(e.target.value);
        setActive(e.target.value);
    };

    return (
        <div className="nav flex justify-between items-end mb-8">
            <p className="text-logoS">calc</p>
            <div className="flex gap-6 text-navS items-end">
                <p className="uppercase mb-[5px]">theme</p>
                <div className="flex flex-col gap-[5px]">
                    <div className="flex justify-between mx-2">
                        <p className="w-3 h-3 text-center">1</p>
                        <p className="w-3 h-3 text-center">2</p>
                        <p className="w-3 h-3 text-center">3</p>
                    </div>
                    <div className="nav__selector w-full h-6 rounded-xl p-[5px] flex gap-2.5 items-center">
                        <button 
                            className={`rounded-full h-4 w-4 bg-regular-keySubmit ${active === 'regular' ? 'opacity-1' : 'opacity-0'} transition hover:bg-regular-keySubmitHover`} 
                            value="regular" 
                            onClick={e => handleUpdate(e)}>
                        </button>
                        <button 
                            className={`rounded-full h-4 w-4 bg-light-keySubmit ${active === 'light' ? 'opacity-1' : 'opacity-0'} transition hover:bg-light-keySubmitHover `} 
                            value="light" 
                            onClick={e => handleUpdate(e)}>
                        </button>
                        <button 
                            className={`rounded-full h-4 w-4 bg-dark-keySubmit ${active === 'dark' ? 'opacity-1' : 'opacity-0'} transition hover:bg-dark-keySubmitHover`}
                            value="dark" 
                            onClick={e => handleUpdate(e)}>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;