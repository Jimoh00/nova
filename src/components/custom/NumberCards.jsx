import { NumberTicker } from "../ui/number-ticker";

function NumberCard({
    stat
}) {
    return (
        <div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 lg:gap-12">
            {stat.map((item, index) => (
                <div key={index}>
                    <div className="pb-3 border-b border-dashed border-gray-800">
                        <div className="flex items-center gap-2 text-6xl md:text-7xl font-semibold">
                            <NumberTicker 
                                value={item.value}
                                start={0}
                            />
                            <h1>{item.suffix}</h1>
                        </div>
                        
                    </div>
                    <div className="pt-4">
                        <p className="text-xl font-semibold">{item.title}</p>
                        <p className="mt-3 leading-[1.8em] text-gray-600">{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NumberCard;