import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./button";
import { AlignJustify } from "lucide-react";
const MobileNav = ({ data }: { data: string[] }) => {
  return (
    <Drawer direction="right" dismissible>
      <DrawerTrigger asChild>
        <AlignJustify />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center text-xl font-bold border-b py-4 border-muted-foreground">
            DeliciousEats
          </DrawerTitle>
          {data.map((item) => (
            <DrawerDescription
              className="text-xl w-full text-center text-primary font-bold mt-4 hover:text-primary/50"
              key={item}
            >
              {item}
            </DrawerDescription>
          ))}
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="w-full text-primary-foreground">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileNav;
