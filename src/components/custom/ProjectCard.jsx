
function ProjectCard({
    image,
    title,
    description,
    tech = [],
}) {
    return (
        <div>
            <div className="w-full h-[300px] lg:h-[480px]">
                <img src={image} className="object-cover h-full w-full" />
            </div>

            <div>
                <div className="flex items-center mt-1 gap-2 py-2">
                    {
                        tech.map((t, i) => (
                            <span className="py-1 px-2  border border-1 border-gray-500 rounded-xl">
                                {t}
                            </span>
                        ))
                    }
                </div>
                <h1 className="text-2xl mt-3 font-semibold capitalize">{title}</h1>
                <p className="text-gray-600 mt-1 leading-[1.8em]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;