import { ICustomButton } from "../types";

export function CustomButton({ key, label, onClick }: ICustomButton) {
  return (
    <button type="button" key={key} onClick={onClick}>
      {label}
    </button>
  );
}
