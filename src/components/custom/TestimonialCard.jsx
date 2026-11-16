import { Quote } from "lucide-react"

function TestimonialCard({
    testimony,
    name,
    role
}) {
    return (
        <div className="bg-[#3157ff] p-5 rounded-2xl text-white relative max-w-[340px] lg:max-w-[400px]">
            <div>
                <Quote size={42} 
                    className="text-white/80"
                />
            </div>
            <p className="text-white/70 mt-4 leading-[1.2em] mb-18">
                {testimony}
            </p>

            <div className="mt-8 flex items-center justify-between absolute bottom-5 left-5 right-5">
                <p className="font-semibold">{name}</p>
                <p className="text-white/70"> {role} </p>
            </div>
        </div>
    )
}

export default TestimonialCard;