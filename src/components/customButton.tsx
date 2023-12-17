import { CustomButton } from "../types";

export function customButton({ key, label, onClick }: CustomButton) {
  return (
    <button type="button" key={key} onClick={onClick}>
      {label}
    </button>
  );
}
