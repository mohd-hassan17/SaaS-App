
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
]

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({title, companions, classNames}: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
          <h2 className="font-bold text-3xl">Recent Session</h2>
          <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
          <TableRow >
            <TableCell className="font-medium">invoice</TableCell>
            <TableCell>paymentStatus</TableCell>
            <TableCell>paymentMethod</TableCell>
            <TableCell className="text-right">totalAmount</TableCell>
          </TableRow>
       
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </article>
  )
}

export default CompanionList;