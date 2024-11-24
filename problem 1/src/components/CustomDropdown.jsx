/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { DropdownWrapper, Options, Selected, Title } from "../styleComponent";
import { colors } from "../data/allData";
import { css } from "@emotion/react";
const CustomDropdown = ({ items, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!selected && items.length > 0) {
      onSelect(items[0]);
    }
  }, [items, selected, onSelect]);
  return (
    <DropdownWrapper
      border={`1px solid ${colors[selected?.name]?.backgroundColor}`}
    >
      <Selected onClick={() => setIsOpen((prev) => !prev)}>
        {selected && (
          <Title
            fontSize="13px"
            color={colors[selected?.name]?.backgroundColor}
            dangerouslySetInnerHTML={{
              __html: selected.title.split(" visitors")[0] + " visitor...",
            }}
          />
        )}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke={`${colors[selected?.name]?.backgroundColor}`}
            width={"15px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke={`${colors[selected?.name]?.backgroundColor}`}
            width={"15px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </Selected>

      {isOpen && (
        <Options>
          {items.map((item) => (
            <Title
              as={"li"}
              key={item.title}
              fontSize="13px"
              color={
                selected?.title === item.title
                  ? colors[selected?.name]?.backgroundColor
                  : "#49687e"
              }
              padding="8px 4px"
              hoverBackgroundColor="#f7f5fb"
              css={css`
                cursor: pointer;
                background-color: ${selected?.title === item.title
                  ? "#f7f5fb"
                  : "transparent"};
                border-bottom: 1px solid #f0f0f0;
              `}
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
