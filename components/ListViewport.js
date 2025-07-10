import ListRenderer from "./ListRenderer";
import NewListViewport from "./NewListButton";

export default function List_Viewport()
{
    return(
        <div className="border-2 border-indigo-500 w-6/20 h-200 ml-40 mt-4">
            <h1 className="text-center mt-4">List Selection</h1>
            <NewListViewport />
            <ListRenderer />
        </div>
    );
}