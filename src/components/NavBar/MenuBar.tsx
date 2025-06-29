const MenuBar = ({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}): React.JSX.Element => {
  return (
    <label className="flex flex-col gap-2 w-8 sm:hidden cursor-pointer z-10">
      <input
        className="peer hidden"
        type="checkbox"
        name="menuBtn"
        checked={isOpen}
        onChange={() => toggleMenu()}
      />
      <div className="rounded-2xl h-[3px] w-1/2 bg-[var(--foreground)] duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
      <div className="rounded-2xl h-[3px] w-full bg-[var(--foreground)] duration-500 peer-checked:-rotate-45" />
      <div className="rounded-2xl h-[3px] w-1/2 bg-[var(--foreground)] duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
    </label>
  );
};

export default MenuBar;
