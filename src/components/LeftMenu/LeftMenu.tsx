// Import the useState hook from React. This hook lets you add state to function components.
import { useState } from "react";

// Define a new interface for the item objects
interface Item {
    name: string;
    icon: string;  // <-- change the type of 'icon' from 'IconDefinition' to 'string'
}

// Modify the Props interface
interface Props {
    lmitems: Item[];
    heading: string;
    onSelectItem: (lmitems: string) => void;
}

function LeftMenu({ lmitems, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <ul className="list-group LeftMenu">
                {lmitems.map((item, index) =>
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={index}
                        onClick={() => { setSelectedIndex(index); onSelectItem(item.name); }}>
                        <div className="icon-container">
                            <img src={item.icon} alt={item.name + ' icon'} /> {/* <-- 'item.icon' should now be a string URL to an image file */}
                            {item.name}
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
}

export default LeftMenu;
