import { ReactNode, useState } from "react";

import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command"
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChevronsUpDownIcon, Command } from "lucide-react";

interface Props {
    options: Array<{
        id: string;
        value: string;
        children: ReactNode;
    }>;
    onSelect: (value: string) => void;
    onSearch: (value: string) => void;
    value?: string;
    placeholder?: string;
    isSearchable?: boolean;
    className?: string;
};

export const CommandSelect = ({
    options,
    onSelect,
    onSearch,
    value,
    placeholder,
    className,
}: Props) => {
    const [open, setOpen] = useState(false);
    const selectedOption = options.find((option) => option.value === value);
    
    const hangleOpenChange = (open: boolean) => {
        onSearch?.("");
        setOpen(open);
    };

    return (
        <>
            <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(true)}
                className={cn(
                    "h-9 justify-between font-normal px-2",
                    !selectedOption && "text-muted-foreground",
                    className,
                )}
            >
                <div>
                    {selectedOption ? selectedOption.children : placeholder ?? 'Select...'}
                </div>
                <ChevronsUpDownIcon />
            </Button>
            <CommandResponsiveDialog shouldFilter={!onSearch} open={open} onOpenChange={hangleOpenChange}>
                <CommandInput placeholder="Search..." onValueChange={onSearch} />
                <CommandList>
                    <CommandEmpty> 
                        <span className="text-muted-foreground text-sm">
                        No options found.
                        </span>
                    </CommandEmpty>
                    {options.map((option) => (
                        <CommandItem 
                        key={option.id} 
                        onSelect={() => {
                            onSelect(option.value);
                            setOpen(false);
                        }}>
                            {option.children}
                        </CommandItem>
                    ))}
                </CommandList>
            </CommandResponsiveDialog>
        </>
    )
}