import { ThemeToggle } from "../actions/ThemeToggle";
import { Heading } from "../ui/heading";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-3">
      <Heading size={"h3"}>TODO LIST</Heading>
      <ThemeToggle />
    </header>
  );
};
