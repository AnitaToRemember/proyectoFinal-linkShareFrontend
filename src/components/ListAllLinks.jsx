import { useState } from "react"
import {useLinks} from "../hooks/api"
import EachLinkPost from "./EachLinkPost"

function ListAllLinks() {
    const [selected, setSelected] = useState('');
    const list = useLinks();

    if (!list) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="list-all-links">
            {list.map(link => (
                <div
                    key={link.id}
                    onClick={() => setSelected(link.id)}
                    className={link.id === selected ? 'active' : ''}
                >
                    {link.title}
                </div>
            ))}
            {selected && <EachLinkPost id={selected} />}
        </div>
    );
}

export default ListAllLinks 