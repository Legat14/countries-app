import { ICustomBtn } from "../types";

export function CustomBtn({ key, label, onClick }: ICustomBtn) {
  return (
    <button type="button" key={key} onClick={onClick}>
      {label}
    </button>
  );
}
