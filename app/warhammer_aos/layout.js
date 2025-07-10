import List_Viewport from "@/components/ListViewport";

export default function Warhammer40k_Layout({children})
{
    return (
        <section>
            <div><h1 className="text-center bg-lime-300">Warhammer Age of Sigmar!</h1></div>
            {children}
            <div><List_Viewport/></div>
        </section>
    );
}