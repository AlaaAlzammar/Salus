/** Class names shared by buttons, links and inputs across the auth pages. */

export const inputClassName =
  "w-full min-w-0 border-0 bg-transparent px-3 py-3.5 text-[16px] leading-[22px] text-salus-green outline-0 placeholder:text-[#858e83] short:py-3 shorter:py-2.5 shortest:py-2";

export const primaryButtonClassName = [
  "flex min-h-[52px] w-full items-center justify-center rounded-[10px] border border-salus-accent bg-salus-accent text-[15px] font-semibold text-[#fffefa]",
  "transition-[background-color,translate,box-shadow] duration-200 ease-[ease]",
  "hover:-translate-y-px hover:bg-salus-accent-dark hover:shadow-[0_5px_12px_#17302620] active:translate-y-0",
  "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none",
  "short:min-h-12 shorter:min-h-[45px] shortest:min-h-[41px]",
].join(" ");

export const secondaryButtonClassName = [
  "flex min-h-[52px] items-center justify-center rounded-[10px] border border-salus-line bg-white px-7 text-[15px] font-semibold text-salus-green",
  "transition-[background-color,border-color] duration-200 ease-[ease]",
  "hover:border-[#b9c6bb] hover:bg-[#f3f6f1]",
  "short:min-h-12 shorter:min-h-[45px] shortest:min-h-[41px]",
].join(" ");

export const textButtonClassName = [
  "py-0.5 text-[14px] font-bold text-salus-green underline decoration-[#bac4b6] underline-offset-4",
  "transition-[text-decoration-color] duration-200 ease-[ease] hover:decoration-salus-green",
  "shorter:text-[13px]",
].join(" ");
