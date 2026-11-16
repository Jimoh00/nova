import "../../index.css";

function Button ({ cta }) {
    return (
        <button className="mt-12 cursor-pointer rounded-lg border border-black/10 bg-[#111111] px-9 py-4 font-medium tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(17,17,17,0.14)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#3157ff] hover:shadow-[0_12px_28px_rgba(49,87,255,0.28)] active:translate-y-0 active:shadow-[0_6px_14px_rgba(49,87,255,0.2)]">
            {cta}
        </button>
    )
}

export default Button;