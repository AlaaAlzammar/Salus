import Mark from "./Mark";

export default function Brand() {
  return (
    <div
      aria-label="SALUS"
      className="flex items-center gap-[9px] text-salus-green [direction:ltr]"
    >
      <Mark width={30} height={34} />
      <span className="font-latin text-[25px] font-extrabold tracking-[.045em] mobile:text-[24px] shorter:text-[23px] shortest:text-[21px] tiny:text-[22px]">
        SALUS
      </span>
    </div>
  );
}
