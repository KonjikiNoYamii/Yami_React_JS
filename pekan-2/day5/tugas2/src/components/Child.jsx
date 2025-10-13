import GrandChild from "./GrandChild";

export default function Child({data}) {
    return(
        <div>
            <h1>ini dari komponen Child</h1>
            <GrandChild data={data} />

        </div>
    )
}