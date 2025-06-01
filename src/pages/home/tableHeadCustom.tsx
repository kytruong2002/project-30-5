import { TableHead } from "@/components/ui/table";

interface TableHeadCustomProps {
    position?: 'left' | 'center' | 'right';
    text: string;
}

const TableHeadCustom = ({ text, position = 'center' }: TableHeadCustomProps) => {
    const textPositions: Record<string, string> = {
        left: 'text-[#00706e] p-4 text-left',
        center: 'text-[#00706e] p-4 w-1/10 text-center',
        right: 'text-[#00706e] p-4 w-1/10 text-right',
    };
    return (
        <TableHead className={textPositions[position]}>{text}</TableHead>
    )
}

export default TableHeadCustom