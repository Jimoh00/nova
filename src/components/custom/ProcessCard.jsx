function ProjectCard({
    content
}){
    return (
        <div>
            {content.map((item, index) => (
                <div key={index}
                    className="lg:px-24 p-4 mt-8 lg:h-[240px] rounded-2xl py-8
                        lg:rounded-[50px] bg-gray-200/50 grid grid-cols-1 lg:grid-cols-2
                        relative overflow-clip group hover:bg-[#3157ff] transition-colors
                    "
                >
                    <div>
                        <h1 className="lg:text-[220px] lg:text-center relative bottom-3 group-hover:text-white">
                            0{index + 1}
                        </h1>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl group-hover:text-white font-semibold"> {item.title} </h2>

                        <p className="mt-4 leading-[1.2em] text-gray-700 group-hover:text-white/70">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default ProjectCard;