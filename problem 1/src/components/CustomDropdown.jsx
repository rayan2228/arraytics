import { useState, useEffect } from "react";
import { DropdownWrapper, Options, Selected, Title } from "../styleComponent";

const CustomDropdown = ({ items, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!selected && items.length > 0) {
      onSelect(items[0]);
    }
  }, [items, selected, onSelect]);
  return (
    <DropdownWrapper>
      <Selected onClick={() => setIsOpen((prev) => !prev)}>
        {selected && (
          <Title dangerouslySetInnerHTML={{ __html: selected.title }} />
        )}
      </Selected>

      {isOpen && (
        <Options>
          {items.map((item) => (
            <Title
              key={item.id}
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          ))}
        </Options>
      )}
    </DropdownWrapper>
  );
};
export default CustomDropdown;
