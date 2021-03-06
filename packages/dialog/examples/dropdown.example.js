import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import { Dialog } from "@reach/dialog";
import { action } from "@storybook/addon-actions";
import "../styles.css";

export let name = "Dropdown";

export let Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      <Dialog aria-label="Announcement" isOpen={showDialog}>
        <button onClick={() => setShowDialog(false)}>Close Dialog</button>
        <Menu>
          <MenuButton>Dropdown</MenuButton>
          <MenuList>
            <MenuItem onSelect={action("Test")}>Test</MenuItem>
            <MenuItem onSelect={action("Test")}>Test</MenuItem>
            <MenuItem onSelect={action("Test")}>Test</MenuItem>
          </MenuList>
        </Menu>
      </Dialog>
    </div>
  );
};
