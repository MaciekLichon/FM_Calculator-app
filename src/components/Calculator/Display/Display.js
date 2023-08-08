const Display = ({num1, num2, operation}) => {
    return (
        <div className="display h-[88px] w-full rounded-[10px] p-6 mb-6 relative overflow-hidden md:px-8 md:h-[128px]">
            <p className="text-displayS absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap md:right-8 md:text-displayL">{num1 + ' ' + operation + ' ' + num2}</p>
        </div>
    );
};

export default Display;