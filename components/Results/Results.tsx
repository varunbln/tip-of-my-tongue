import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export function Results({ open, setOpen, results }: any) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="!text-zinc-100">
                        Results
                    </DialogTitle>
                    <DialogDescription>
                        Was one of these words what you were thinking of? If
                        not, try to describe the word in more detail and just
                        try again!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <ul className="text-slate-100 text-balance">
                        <li>- {results[0]}</li>
                        <li>- {results[1]}</li>
                        <li>- {results[2]}</li>
                        <li>- {results[3]}</li>
                        <li>- {results[4]}</li>
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
}
