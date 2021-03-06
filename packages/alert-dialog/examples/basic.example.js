import React from "react";
import "@reach/dialog/styles.css";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription
} from "../src/index";

export let name = "Basic";

export let Example = () => {
  const close = React.useRef(null);
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      {showDialog && (
        <AlertDialog leastDestructiveRef={close}>
          <AlertDialogLabel>Confirmation!</AlertDialogLabel>
          <AlertDialogDescription>
            Are you sure you want to have that milkshake?
          </AlertDialogDescription>
          <p>
            <button>DESTROY Stuff!</button>{" "}
            <button ref={close} onClick={() => setShowDialog(false)}>
              Cancel
            </button>
          </p>
        </AlertDialog>
      )}
    </div>
  );
};
