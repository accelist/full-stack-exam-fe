import React from "react";
import { useController } from "react-hook-form";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CustomSelect({ control, name, label, getOptions }) {
    const [, setSelectedLabel] = React.useState(label);

    const { field: { value, onChange } } = useController({
        control,
        name,
    });

    const handleChange = (event) => {
        onChange(event.target.value);
        const selectedOption = options.find((option) => option.value === event.target.value);
        setSelectedLabel(selectedOption?.label || label);
    };

    const options = getOptions();

    return (
        <Select>
            <SelectTrigger>
                <SelectValue>{value || label}</SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value} onClick={handleChange}>
                            {option.label || option.value}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
