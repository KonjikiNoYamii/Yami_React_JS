export default function InputMessage({message, onMessageChange}) {
    return(
        <div>
            <input type="text" value={message} onChange={(e) => onMessageChange(e.target.value)} />
        </div>
    )
}