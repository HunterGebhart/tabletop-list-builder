import List_Viewport from "@/components/List_Viewport";

export default function Warhammer40k_Layout({children})
{
    return (
        <section>
            <div><h1 className="text-center bg-teal-600">Warhammer 40,000!</h1></div>
            {children}
            <div><List_Viewport/></div>
        </section>
    );
}